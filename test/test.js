'use strict';

var expect = require('chai').expect;
var numFormatter = require('../index');

describe('#numFormatter', function() {
    it('should convert single digits', function() {
        var result = numFormatter('B', 2);
        expect(result).to.equal('success');
    });

});