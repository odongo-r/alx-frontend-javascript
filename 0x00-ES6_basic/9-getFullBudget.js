import getBudgetObject from './7-getBudgetObject.js';

/**
 * Creates a full budget object with additional methods.
 * @param {string} income - The income value.
 * @param {string} gdp - The GDP value.
 * @param {string} capita - The per capita value.
 * @returns {Object} The full budget object.
 */
export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  return {
    ...budget,
    /**
     * Returns the income in dollars.
     * @param {string} income - The income value.
     * @returns {string} The income in dollars.
     */
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    /**
     * Returns the income in euros.
     * @param {string} income - The income value.
     * @returns {string} The income in euros.
     */
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };
}
