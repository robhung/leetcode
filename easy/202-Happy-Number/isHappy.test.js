const isHappy = require('./isHappy');

describe('isHappy', () => {
  it('should return true', () => {
    expect(isHappy(1)).toBe(true);
    expect(isHappy(19)).toBe(true);
    expect(isHappy(133)).toBe(true);
    expect(isHappy(230)).toBe(true);
    expect(isHappy(365)).toBe(true);
    expect(isHappy(404)).toBe(true);
    expect(isHappy(536)).toBe(true);
    expect(isHappy(644)).toBe(true);
    expect(isHappy(739)).toBe(true);
    expect(isHappy(888)).toBe(true);
    expect(isHappy(932)).toBe(true);
    expect(isHappy(1000)).toBe(true);
  });
  it('should return false', () => {
    expect(isHappy(2)).toBe(false);
    expect(isHappy(88)).toBe(false);
    expect(isHappy(191)).toBe(false);
    expect(isHappy(270)).toBe(false);
    expect(isHappy(375)).toBe(false);
    expect(isHappy(465)).toBe(false);
    expect(isHappy(577)).toBe(false);
    expect(isHappy(643)).toBe(false);
    expect(isHappy(781)).toBe(false);
    expect(isHappy(845)).toBe(false);
    expect(isHappy(902)).toBe(false);
  });
});
