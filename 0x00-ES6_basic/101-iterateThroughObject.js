/**
 * Iterates through an object and joins values with ' | '.
 * @param {Array} reportWithIterator - The report object with an iterator.
 * @returns {string} The joined string of values.
 */
export default function iterateThroughObject(reportWithIterator) {
  return reportWithIterator.join(' | ');
}
