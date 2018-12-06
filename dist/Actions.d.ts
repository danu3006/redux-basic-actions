import { BasicReducerState } from "./reducers/BasicReducerFactory";
interface ActionTypes {
    [key: string]: string;
}
declare type ActionsPrefixes = string[];
declare type InitHandler = () => {
    type: string;
};
declare type ResetHandler = () => {
    type: string;
};
declare type SuccessHandler<S> = (data: S) => {
    type: string;
    data: S;
};
declare type FailureHandler<F> = (data: F) => {
    type: string;
    data: F;
};
interface ActionCreatorHandlers<S, F> {
    init: InitHandler;
    success: SuccessHandler<S>;
    failure: FailureHandler<F>;
    reset: ResetHandler;
}
export default class Actions {
    protected identifier: string;
    private readonly prefixCollection;
    private readonly typeCollection;
    constructor(identifier: string);
    readonly types: ActionTypes;
    protected prefixes: ActionsPrefixes;
    SimpleReducer: <S, F>(prefix: string, initial?: BasicReducerState<S, F>) => (state: BasicReducerState<S, F>, action: any) => BasicReducerState<S, F>;
    protected handlers: <S, F>(prefix: string) => ActionCreatorHandlers<S, F>;
}
export {};
