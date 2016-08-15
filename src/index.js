"use strict";
const _ = require("lodash");
module.exports = function () {
    let output = {};
    _.toArray(arguments).reverse().forEach(item=> {
        _.mergeWith(output, item, (objectValue, sourceValue) => {
            return _.isArray(sourceValue) ? sourceValue : undefined;
        });
    });
    return output;
};