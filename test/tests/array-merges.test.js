"use strict";
describe('Arrays', function () {
    /**
     * Module dependencies.
     */

    var defaultsDeep = require('../../lib');

    /**
     * Test array merges.
     */
    const expect = require("chai").expect;
    it('should not merge arrays', function () {
        var object = {
            foo: 'bar',
            bar: [],
            qux: {
                biz: {
                    net: ['foo']
                }
            }
        };

        var source = {
            bar: ['net'],
            qux: {
                biz: {
                    net: []
                }
            },
            qox: ['biz']
        };

        var result = defaultsDeep(source, object);

        expect(result.bar).to.eql(['net']);
        expect(result.qux.biz.net).to.eql([]);
        expect(result.qox).to.eql(['biz']);
    });
});
