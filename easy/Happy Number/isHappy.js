/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n, counter = 0) => {
  result = false;

  if (counter < 8) {
    const array = n
      .toString()
      .split('')
      .map((n) => n * n);
    const sum = array.reduce((a, b) => a + b, 0);

    if (sum === 1) {
      result = true;
    } else {
      counter++;
      isHappy(sum, counter);
    }
  }

  return result;
};

module.exports = isHappy;
