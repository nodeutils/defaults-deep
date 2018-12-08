"use strict";

var toArray = require("lodash/toArray");
var mergeWith = require("lodash/mergeWith");
var isArray = require("lodash/isArray");
module.exports = function () {
    var output = {};
    toArray(arguments).reverse().forEach(function (item) {
        mergeWith(output, item, function (objectValue, sourceValue) {
            return isArray(sourceValue) ? sourceValue : undefined;
        });
    });
    return output;
};