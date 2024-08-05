/**
 * Creates a budget object.
 * @param {string} income - The income value.
 * @param {string} gdp - The GDP value.
 * @param {string} capita - The per capita value.
 * @returns {Object} The budget object.
 */
export default function getBudgetObject(income, gdp, capita) {
  return { income, gdp, capita };
}
