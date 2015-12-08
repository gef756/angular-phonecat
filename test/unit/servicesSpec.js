'use strict';

/* jasmine specs for services go here */

describe('service', function() {
  beforeEach(module('phonecatApp'));

  // Test service availability
  it('should have a Phone factory', inject(function(Phone) {
    expect(Phone).toBeDefined();
  }));
});
