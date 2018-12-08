"use strict";
const toArray = require("lodash/toArray");
const mergeWith = require("lodash/mergeWith");
const isArray = require("lodash/isArray");
module.exports = function () {
    let output = {};
    toArray(arguments).reverse().forEach(item => {
        mergeWith(output, item, (objectValue, sourceValue) => {
            return isArray(sourceValue) ? sourceValue : undefined;
        });
    });
    return output;
};
