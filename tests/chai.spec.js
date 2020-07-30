var expect = require('chai').expect;

describe('Chai', function() {
  var arr;

  beforeEach(function() {
    arr = [1,2,3];
  });

  //SMOKE TEST - primeiro teste mais simples para testar o tipo do objeto testado
  it('should be an array', function() {
    expect(arr).to.be.a('array');
  })

  it('should have a size of 4 when push another value to the array', function() {
    arr.push(4);
    expect(arr).to.has.lengthOf(4);
  });

  it('should remove the value 3 when use pop in the array', function() {
    arr.pop();
    expect(arr).to.not.include(3);
  });

  it('shoukd return true when pop 3 from the array', function() {
    expect(arr.pop() === 3).to.be.true;
  });

  it('should have a size of 2 when pop a value from the array', function() {
    arr.pop();
    expect(arr).to.has.lengthOf(2);
  });
})
