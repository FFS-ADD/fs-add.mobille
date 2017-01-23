export interface Action {
    type: string;
    params: any;
}

export interface ActionBind {
    type: string;
    instance: any;
    handler: (any) => any;
}

