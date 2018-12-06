import Actions from "../Actions";
export interface BasicReducerState<T1, T2> {
    isLoading: boolean;
    response: T1 | null;
    error: T2 | null;
}
declare const BasicReducerFactory: <A extends Actions, S, F>(instance: A, prefix: string, initial?: BasicReducerState<S, F>) => (state: BasicReducerState<S, F>, action: any) => BasicReducerState<S, F>;
export default BasicReducerFactory;
