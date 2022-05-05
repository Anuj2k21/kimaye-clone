import { getContext } from './context';
import { IForm } from './types';

export const loadForms = async (): Promise<IForm[]> => {
    const { brand, forms } = getContext();
    const brandID = brand.getBrandID();

    if (!brandID) {
        return Promise.resolve([]);
    }

    const formsResponse = await fetch(forms.getFormsLoadEndpoint(brandID));

    return formsResponse.json();
};
