export const omitEmptyValues = (obj: Record<string, unknown>): Record<string, unknown> => {
    return Object.keys(obj)
        .filter((key) => obj[key] !== null && typeof obj[key] !== 'undefined' && obj[key] !== '')
        .reduce((result, key) => ({ ...result, [key]: obj[key] }), {});
};
