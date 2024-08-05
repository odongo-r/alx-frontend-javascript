/**
 * Appends a string to each value in an array.
 * @param {Array} array - The array to modify.
 * @param {string} appendString - The string to append.
 * @returns {Array} The modified array.
 */
export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const value of array) {
    newArray.push(appendString + value);
  }
  return newArray;
}
