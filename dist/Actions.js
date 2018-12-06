"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasicReducerFactory_1 = require("./reducers/BasicReducerFactory");
class Actions {
    constructor(identifier) {
        this.identifier = identifier;
        this.SimpleReducer = (prefix, initial) => {
            return BasicReducerFactory_1.default(this, prefix, initial);
        };
        this.handlers = (prefix) => ({
            init: () => ({ type: this.types[`${prefix.toUpperCase()}_INIT`] }),
            success: (data) => ({ type: this.types[`${prefix.toUpperCase()}_SUCCESS`], data }),
            failure: (data) => ({ type: this.types[`${prefix.toUpperCase()}_FAILURE`], data }),
            reset: () => ({ type: this.types[`${prefix.toUpperCase()}_RESET`] }),
        });
        this.typeCollection = {};
        this.prefixCollection = [];
    }
    get types() {
        return this.typeCollection;
    }
    set prefixes(value) {
        const { typeCollection, identifier } = this;
        for (const prefix of value) {
            typeCollection[`${prefix.toUpperCase()}_INIT`] =
                `${identifier.toUpperCase()}_${prefix.toUpperCase()}_INIT`;
            typeCollection[`${prefix.toUpperCase()}_SUCCESS`] =
                `${identifier.toUpperCase()}_${prefix.toUpperCase()}_SUCCESS`;
            typeCollection[`${prefix.toUpperCase()}_FAILURE`] =
                `${identifier.toUpperCase()}_${prefix.toUpperCase()}_FAILURE`;
            typeCollection[`${prefix.toUpperCase()}_RESET`] =
                `${identifier.toUpperCase()}_${prefix.toUpperCase()}_RESET`;
        }
    }
}
exports.default = Actions;
