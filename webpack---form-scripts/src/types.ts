export enum ActionType {
    redirect = 'redirect'
}

interface ISettings {
    url: string;
}

export interface IAction {
    type: ActionType;
    targetID: string;
    settings: ISettings;
}

export interface IForm {
    id: string;
    html: string;
    actions: IAction[];
    targeting?: Targeting;
}

export type Targeting = {
    urlMatch?: UrlMatch;
    display?: Display;
    frequency?: number; // ms
};

export type UrlMatch = {
    includes?: string[];
    excludes?: string[];
};

export type Display = {
    afterViewedPageCount?: number;
    afterTime?: number; // ms
    afterScrollDown?: number; // Percent
    onExit?: boolean;
};
