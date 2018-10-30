/*

"From an array of numbers, find out the pair of numbers that has the largest product, and return the product."

*/

function maxProduct(numbers) {
  if (numbers.length < 2) {
    return "not enough numbers";
  } else if (numbers.length === 2) {
    return numbers[0] * numbers[1];
  }

  let sorted = numbers.slice().sort((a, b) => a - b);
  let [n1, n2] = sorted.slice(0, 2);
  let [p1, p2] = sorted.slice(-2);
  return Math.max(n1 * n2, p1 * p2);
}

module.exports = { maxProduct };
