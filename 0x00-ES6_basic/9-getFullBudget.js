import getBudgetObject from './7-getBudgetObject.js';

/**
 * Creates a full budget object with methods for income formatting
 * @param {number} income - The income value
 * @param {number} gdp - The GDP value
 * @param {number} capita - The capita value
 * @returns {object} Full budget object with formatting methods
 */
export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}

