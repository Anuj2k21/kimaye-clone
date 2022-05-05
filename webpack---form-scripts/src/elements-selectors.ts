export const getFormIDSelector = (formID: string): string => `omnisend-form-${formID}`;
export const getCloseActionSelector = (formID: string): string => `#${getFormIDSelector(formID)}-close-action`;
export const getBlockActionSelector = (blockID: string): string => `#omnisend-form-action-${blockID}`;
