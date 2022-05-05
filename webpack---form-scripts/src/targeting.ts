import { getActivityInformation } from './activity-monitoring';
import { getContext } from './context';
import { getFormIDSelector } from './elements-selectors';
import { IForm } from './types';

function isDefined<T>(x: T | undefined): x is T {
    return typeof x !== 'undefined';
}

function getFormClosedTime(form: IForm) {
    const { cookies } = getContext();

    const closedAt = cookies.get(`${getFormIDSelector(form.id)}-closed-at`);

    if (!closedAt) return 0;

    return new Date(closedAt).getTime();
}

function checkUrlMatch(form: IForm) {
    const urlMatching = form.targeting?.urlMatch;

    if (!urlMatching) return true;

    const { includes = [], excludes = [] } = urlMatching;

    const url = window.location.href;

    const isIncluded = !includes.length || includes.some((segment) => url.includes(segment));
    const isNotExcluded = !excludes.length || excludes.every((segment) => !url.includes(segment));

    return isIncluded && isNotExcluded;
}

function checkDisplay(form: IForm) {
    const display = form.targeting?.display;

    if (!display) return true;
    if (!Object.keys(display).length) return true;

    const { scrolledPercent, loadTime, pageViewCount, triedToClose } = getActivityInformation();

    const { afterScrollDown, afterTime, afterViewedPageCount, onExit } = display;

    const isScrolledDown = () => isDefined(afterScrollDown) && afterScrollDown <= scrolledPercent;
    const hasTimeElapsed = () => isDefined(afterTime) && loadTime + afterTime <= Date.now();
    const pageViewsReached = () => isDefined(afterViewedPageCount) && pageViewCount >= afterViewedPageCount;
    const triedToCloseWindow = () => isDefined(onExit) && onExit === triedToClose;

    return [isScrolledDown, hasTimeElapsed, pageViewsReached, triedToCloseWindow].some((rule) => rule());
}

function checkFrequency(form: IForm) {
    const frequency = form.targeting?.frequency;
    const closedAt = getFormClosedTime(form);

    if (!frequency) return !closedAt;

    return closedAt + frequency <= Date.now();
}

export function evaluateTargeting(form: IForm) {
    if (!form.targeting) {
        return !getFormClosedTime(form);
    }

    const rules: ((form: IForm) => boolean)[] = [checkUrlMatch, checkDisplay, checkFrequency];

    return rules.every((rule) => rule(form));
}
