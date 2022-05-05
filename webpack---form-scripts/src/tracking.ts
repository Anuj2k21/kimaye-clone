import { FORMS_TRACKING_PIXELS_CONTAINER_ID } from './constants';
import { getContext } from './context';

const addTrackingPixel = (url: string): Promise<null> =>
    new Promise((resolve, reject) => {
        const pixel = document.createElement('img');
        pixel.setAttribute('src', url);

        pixel.addEventListener('load', () => {
            resolve(null);
        });

        pixel.addEventListener('error', () => {
            reject();
        });

        const trackingPixelsContainer = document.getElementById(FORMS_TRACKING_PIXELS_CONTAINER_ID);

        trackingPixelsContainer.appendChild(pixel);
    });

export const trackView = (formID: string): Promise<null> => addTrackingPixel(getContext().forms.getTrackViewEndpoint(formID));
export const trackInteraction = (formID: string): Promise<null> => addTrackingPixel(getContext().forms.getTrackInteractionEndpoint(formID));
