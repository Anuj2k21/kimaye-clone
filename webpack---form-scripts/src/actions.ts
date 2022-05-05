import { getContext } from './context';
import { getFormIDSelector } from './elements-selectors';
import { trackInteraction } from './tracking';

const setClosedFormCookie = (formID: string) => {
    getContext().cookies.set(`${getFormIDSelector(formID)}-closed-at`, new Date().toISOString());
};

export const redirectAction = async (url: string, formID: string): Promise<void> => {
    setClosedFormCookie(formID);

    await trackInteraction(formID);

    getContext().navigation.redirect(url);
};

export const closeAction = (formID: string): void => {
    const form = document.getElementById(getFormIDSelector(formID));
    form.setAttribute('style', 'display: none');

    getContext().forms.setWindowClearance(true);
    setClosedFormCookie(formID);
};
