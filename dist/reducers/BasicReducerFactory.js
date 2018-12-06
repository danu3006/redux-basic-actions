"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasicReducerFactory = (instance, prefix, initial) => {
    const start = initial || { isLoading: false, response: null, error: null };
    prefix = prefix.toUpperCase();
    return (state = start, action) => {
        switch (action.type) {
            case instance.types[`${prefix}_INIT`]:
                return Object.assign({}, state, { isLoading: true, response: null, error: null });
            case instance.types[`${prefix}_SUCCESS`]:
                return Object.assign({}, state, { isLoading: false, response: action.data, error: null });
            case instance.types[`${prefix}_FAILURE`]:
                return Object.assign({}, state, { isLoading: false, response: null, error: action.data });
            case instance.types[`${prefix}_RESET`]:
                return start;
            default:
                return state;
        }
    };
};
exports.default = BasicReducerFactory;
