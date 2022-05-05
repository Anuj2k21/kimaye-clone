import { getContext } from './context';

export type TrackingResults = {
    triedToClose: boolean;
    loadTime: number;
    pageViewCount: number;
    scrolledPercent: number;
};

export type ChangeHandler = (results: TrackingResults) => void;

const results: TrackingResults = {
    triedToClose: false,
    loadTime: Date.now(),
    pageViewCount: 0,
    scrolledPercent: determineScrollPercentage()
};

const changeHandlers: ChangeHandler[] = [];

function determineScrollPercentage() {
    return Math.round((window.scrollY * 100) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) || 0;
}

function trackClose() {
    window.addEventListener('mouseout', (event) => {
        if (event.y < 0) {
            results.triedToClose = true;

            changeHandlers.forEach((handler) => handler(results));
        }
    });
}

function trackScrolling() {
    window.addEventListener('scroll', () => {
        const percent = determineScrollPercentage();

        if (percent <= results.scrolledPercent) return;

        results.scrolledPercent = percent;

        changeHandlers.forEach((handler) => handler(results));
    });
}

function trackPageViews() {
    const { cookies } = getContext();
    const existingViews = parseInt(cookies.get('page-views'), 10) || 0;
    const newViews = existingViews + 1;

    cookies.set('page-views', newViews.toString(), { sessionOnly: true });

    results.pageViewCount = newViews;
}

export function onActivityChange(handler: ChangeHandler) {
    changeHandlers.push(handler);
}

export function monitorActivity() {
    trackClose();
    trackScrolling();
    trackPageViews();
}

export function getActivityInformation() {
    return results;
}
