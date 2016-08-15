"use strict";
describe('Deep merge', function () {
    /**
     * Module dependencies.
     */

    var defaultsDeep = require('../../lib');

    /**
     * Test deep merge.
     */
    const expect = require("chai").expect;
    it('should perform a deep _.defaults', function () {
        var source = {
            foo: 'bads',
            fred: 'foo',
            date: new Date(),
            grault: {garply: 2, waldo: 'baz'},
            bar: {qux: {net: 2}},
            bou: ['tan']
        };
        var object = {foo: 'bar', baz: 'quux', corge: 1, grault: {}, bar: {qux: {net: 1}}, bou: ['nat']};
        var result = defaultsDeep(source, object);

        /*jshint -W030 */
        expect(result).to.be.an("object");
        expect(result).to.have.keys('foo', 'baz', 'corge', 'grault', 'bar', 'bou', 'fred', 'date');
        expect(result.date).to.be.a("date");
        /*jshint +W030 */

        expect(result).to.have.property('foo', 'bads');
        expect(result).to.have.property('baz', 'quux');
        expect(result).to.have.property('corge', 1);
        expect(result).to.have.property('date').equal(source.date);
        expect(result).to.have.property('grault').with.a.property('garply', 2);
        expect(result).to.have.property('grault').with.a.property('waldo', 'baz');
        expect(result).to.have.property('bar').with.a.property('qux').with.a.property('net', 2);
        expect(result).to.have.property('bou');
        expect(result.bou).to.eql(['tan']);
    });

    it('should work with deeply nested objects', function () {
        var object = {foo: 'bar', bar: {biz: {net: 'qux'}}, qux: ['biz']};
        var source = {bar: {biz: {net: 'txi', qox: 'fuc'}}, qux: ['baz']};
        var result = defaultsDeep(source, object);

        /*jshint -W030 */
        expect(result).to.be.an("object");
        expect(result).to.have.keys('foo', 'bar', 'qux');
        /*jshint +W030 */

        expect(result).to.have.property('foo', 'bar');
        expect(result.bar).to.have.keys('biz');
        expect(result.bar.biz).to.have.keys('net', 'qox');
        expect(result).to.have.property('bar').with.a.property('biz');
        expect(result.bar.biz).to.contain({
            net: 'txi',
            qox: 'fuc'
        });
        expect(result.qux).to.eql(['baz']);
    });
});
