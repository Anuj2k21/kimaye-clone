import { getContext } from './context';
import { closeAction, redirectAction } from './actions';
import { getBlockActionSelector, getCloseActionSelector, getFormIDSelector } from './elements-selectors';
import { loadForms } from './repo';
import { ActionType, IAction, IForm } from './types';
import { trackView } from './tracking';
import { DYNAMIC_CONTAINER_ID, FORMS_CONTAINER_ID, FORMS_TRACKING_PIXELS_CONTAINER_ID } from './constants';
import { evaluateTargeting } from './targeting';
import { monitorActivity, onActivityChange } from './activity-monitoring';

interface IFormElement {
    form: IForm;
    element: Element;
}

const attachButtonTriggerListeners = (el: Element, listener: () => unknown, cleanListeners = false) => {
    el.addEventListener('click', function clickListener() {
        listener();

        if (cleanListeners) {
            el.removeEventListener('click', clickListener);
        }
    });
    el.addEventListener('keydown', function keydownListener(event: KeyboardEvent) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            listener();

            if (cleanListeners) {
                el.removeEventListener('keydown', keydownListener);
            }
        }
    });
};

const attachActionsListeners = (form: Element, formActions: IAction[], formID: string) => {
    if (!formActions) {
        return;
    }

    formActions.forEach((action) => {
        const actionElement = form.querySelector(getBlockActionSelector(action.targetID));

        if (action.type === ActionType.redirect && actionElement) {
            attachButtonTriggerListeners(actionElement, () => redirectAction(action.settings.url, formID));
        }
    });
};

const attachCloseListeners = (form: Element, id: string) => {
    const closeElement = form.querySelector(getCloseActionSelector(id));

    if (closeElement) {
        attachButtonTriggerListeners(closeElement, () => closeAction(id), true);
    }
};

const createFormElement = (form: IForm): Element => {
    const formElement = document.createElement('div');
    formElement.setAttribute('id', getFormIDSelector(form.id));
    formElement.setAttribute('style', 'display: none');
    formElement.innerHTML = form.html;

    return formElement;
};

const showForm = async ({ form, element }: IFormElement) => {
    const context = getContext();
    context.forms.setWindowClearance(false);

    attachCloseListeners(element, form.id);
    attachActionsListeners(element, form.actions, form.id);

    element.setAttribute('style', '');

    trackView(form.id);
};

function tryToShowForm(formElements: IFormElement[]) {
    const context = getContext();

    if (!getContext().forms.checkIfWindowIsClear()) {
        return;
    }

    formElements
        .filter((formElement) => evaluateTargeting(formElement.form))
        .forEach((form) => {
            if (context.forms.checkIfWindowIsClear()) {
                showForm(form);
            }
        });
}

export const initiate = async (): Promise<void> => {
    monitorActivity();
    const forms = (await loadForms()).filter((form) => !!form.html);

    if (!forms.length) {
        return;
    }

    const omnisendContainer = document.getElementById(DYNAMIC_CONTAINER_ID);

    const formsContainer = document.createElement('div');
    formsContainer.setAttribute('id', FORMS_CONTAINER_ID);

    const formsTrackingPixelsContainer = document.createElement('div');
    formsTrackingPixelsContainer.setAttribute('id', FORMS_TRACKING_PIXELS_CONTAINER_ID);

    omnisendContainer.appendChild(formsContainer);
    omnisendContainer.appendChild(formsTrackingPixelsContainer);

    const formElements: IFormElement[] = [];

    forms.forEach((form) => {
        const formElement = createFormElement(form);

        formsContainer.appendChild(formElement);
        formElements.push({ form, element: formElement });
    });

    onActivityChange(() => tryToShowForm(formElements));
    setInterval(() => {
        tryToShowForm(formElements);
    }, 1000);
};
