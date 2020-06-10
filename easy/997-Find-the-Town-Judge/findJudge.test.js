const findJudge = require('./findJudge');

describe('findJudge', () => {
  it('should return the number that represents the town judge', () => {
    expect(findJudge(2, [[1, 2]])).toBe(2);
    expect(
      findJudge(3, [
        [1, 3],
        [2, 3],
      ])
    ).toBe(3);
    expect(
      findJudge(4, [
        [1, 3],
        [1, 4],
        [2, 3],
        [2, 4],
        [4, 3],
      ])
    ).toBe(3);
  });
  it('should return -1 as the town judge cannot be identified', () => {
    expect(
      findJudge(3, [
        [1, 3],
        [2, 3],
        [3, 1],
      ])
    ).toBe(-1);
    expect(
      findJudge(3, [
        [1, 2],
        [2, 3],
      ])
    ).toBe(-1);
  });
});
