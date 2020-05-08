const singleNumber = require('./singleNumber');

describe('singleNumber', () => {
  it('should return the integer that only appears once', () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
  });
});
