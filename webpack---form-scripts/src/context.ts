import { CONTACT_ID_COOKIE } from './constants';
import { omitEmptyValues } from './utils';

declare const window: Window;

export type Window = {
    _omnisend: OmnisendContext;
    location: {
        href: string;
    };
    document: {
        title: string;
    };
};

export type OmnisendContext = {
    forms: { isWindowClear: boolean };
    cookies: {
        set: (cookieName: string, value: string, expires: number) => void;
        get: (cookieName: string) => string | undefined;
        DAY: number;
    };
    config: {
        formsAPIHost: string;
    };
    brandSettings: {
        brandID: string;
    };
    shopType: string;
    shopID: string;
    shopHostname: string;
    user: {
        anonymousID: string;
        sessionID: string;
    };
};

export type CookieOptions = {
    expiration?: number;
    sessionOnly?: boolean;
};

type TrackingParams = {
    timestamp: string;
    shopType: string;
    shopID: string;
    shopHostname: string;
    brandID: string;
    formID: string;
    anonymousID: string;
    sessionID: string;
    contactID: string;
    pageTitle: string;
    pageURL: string;
};

const buildTrackingQueryParams = (trackingParams: TrackingParams) =>
    new URLSearchParams(omitEmptyValues(trackingParams) as Record<string, string>).toString();

const buildTrackingParams = (formID: string) => {
    const { shop, brand, user, cookies, navigation } = getContext();

    const trackingParams: TrackingParams = {
        timestamp: new Date().getTime().toString(),
        shopType: shop.getShopType(),
        shopID: shop.getShopID(),
        shopHostname: shop.getShopHostName(),
        brandID: brand.getBrandID(),
        formID,
        anonymousID: user.getAnonymousID(),
        sessionID: user.getSessionID(),
        contactID: cookies.get(CONTACT_ID_COOKIE),
        pageTitle: navigation.getPageTitle(),
        pageURL: navigation.getPageUrl()
    };

    return buildTrackingQueryParams(trackingParams);
};

export type Context = {
    brand: {
        getBrandID: () => string | undefined;
    };
    forms: {
        checkIfWindowIsClear: () => boolean;
        setWindowClearance: (isClear: boolean) => void;
        getApiHost: () => string;
        getFormsLoadEndpoint: (brandID: string) => string;
        getTrackViewEndpoint: (formID: string) => string;
        getTrackInteractionEndpoint: (formID: string) => string;
    };
    navigation: {
        redirect: (url: string) => void;
        getPageTitle: () => string;
        getPageUrl: () => string;
    };
    cookies: {
        set: (name: string, value: string, options?: CookieOptions) => void;
        get: (name: string) => string | undefined;
    };
    shop: {
        getShopType: () => string;
        getShopID: () => string;
        getShopHostName: () => string;
    };
    user: {
        getAnonymousID: () => string;
        getSessionID: () => string;
    };
};

// Isolating context a bit to prevent direct window object manipulation
export function getContext(): Context {
    const formsApiHost = window._omnisend.config.formsAPIHost;

    return {
        brand: {
            getBrandID: () => window._omnisend.brandSettings?.brandID
        },
        forms: {
            checkIfWindowIsClear: () => window._omnisend.forms.isWindowClear,
            setWindowClearance: (isClear) => {
                window._omnisend.forms.isWindowClear = isClear;
            },
            getApiHost: () => formsApiHost,
            getFormsLoadEndpoint: (brandID: string): string => `${formsApiHost}REST/forms/v1/renderedForms?brandID=${brandID}`,
            getTrackViewEndpoint: (formID: string): string => `${formsApiHost}REST/forms/v1/track/view?${buildTrackingParams(formID)}`,
            getTrackInteractionEndpoint: (formID: string): string =>
                `${formsApiHost}REST/forms/v1/track/interaction?${buildTrackingParams(formID)}`
        },
        navigation: {
            redirect: (url) => {
                window.location.href = url;
            },
            getPageTitle: () => window.document.title,
            getPageUrl: () => window.location.href
        },
        cookies: {
            set: (name, value, { expiration = window._omnisend.cookies.DAY * 365, sessionOnly } = {}) => {
                // Inner workings of omnisend.cookies, expiration must be undefined to be stored in a session cookie
                window._omnisend.cookies.set(name, value, sessionOnly ? undefined : expiration);
            },
            get: (name) => window._omnisend.cookies.get(name)
        },
        shop: {
            getShopType: () => window._omnisend.shopType,
            getShopID: () => window._omnisend.shopID,
            getShopHostName: () => window._omnisend.shopHostname
        },
        user: {
            getAnonymousID: () => window._omnisend.user.anonymousID,
            getSessionID: () => window._omnisend.user.sessionID
        }
    };
}
