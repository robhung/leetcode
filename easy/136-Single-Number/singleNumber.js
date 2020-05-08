/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (array) => {
  let newArray = [];
  array.forEach((element) => {
    const filteredArray = array.filter((number) => number === element);

    if (filteredArray.length < 2) {
      newArray.push(filteredArray[0]);
    }
  });

  return newArray[0];
};

module.exports = singleNumber;
