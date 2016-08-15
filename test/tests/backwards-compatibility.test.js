"use strict";
describe('Backwards compatibility with _.defaults', function () {
    /**
     * Module dependencies.
     */

    var defaultsDeep = require('../../lib');

    /**
     * From `lodash` core tests.
     *
     * @see https://github.com/lodash/lodash/blob/master/test/test.js#L3341
     */

    const expect = require("chai").expect;

    it('should assign properties of a source object if missing on the destination object', function () {
        expect(defaultsDeep({a: 1}, {a: 2, b: 2})).to.eql({a: 1, b: 2});
    });

    it('should accept multiple source objects', function () {
        var expected = {a: 1, b: 2, c: 3};

        expect(defaultsDeep({a: 1, b: 2}, {b: 3}, {c: 3})).to.eql(expected);
        expect(defaultsDeep({a: 1, b: 2}, {b: 3, c: 3}, {c: 2})).to.eql(expected);
    });

    it('should not overwrite `null` values', function () {
        var actual = defaultsDeep({a: null}, {a: 1});
        expect(actual.a).to.equal(null);
    });

    it('should overwrite `undefined` values', function () {
        var actual = defaultsDeep({'a': undefined}, {'a': 1});

        expect(actual.a).to.equal(1);
    });
});
