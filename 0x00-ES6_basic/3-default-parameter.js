/**
 * Calculates the sum of an initial number and two expansions.
 * @param {number} initialNumber - The initial number.
 * @param {number} [expansion1989=89] - The expansion from 1989.
 * @param {number} [expansion2019=19] - The expansion from 2019.
 * @returns {number} The sum of the initial number and expansions.
 */
export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}
