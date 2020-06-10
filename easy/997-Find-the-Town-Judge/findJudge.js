/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */

const findJudge = (N, trust) => {
  // create a record object;
  const record = {};

  // create an array of numbers up to N
  const array = Array.from(Array(N), (x, i) => i + 1);

  // assign each number with an array pair
  // the first number represents how many people the number trusts
  // the second number represents how many people trusts the number
  array.forEach((element) => (record[element] = [0, 0]));

  // iterate through the trust array pairs
  // for each pair, increment the trust numbers accordingly
  trust.forEach((pair) => {
    const trustor = pair[0];
    const trustee = pair[1];

    record[trustor] = [record[trustor][0] + 1, record[trustor][1]];
    record[trustee] = [record[trustee][0], record[trustee][1] + 1];
  });

  // create an entries array from record object
  const entries = Object.entries(record);

  // iterate through the record entries
  // find an array that contains [0, N - 1] as it's second element
  const found = entries.find(
    (entry) => entry[1][0] === 0 && entry[1][1] === N - 1
  );

  // return the number associated as the town judge if found, otherwise -1
  const result = found ? Number(found[0]) : -1;

  return result;
};

module.exports = findJudge;
