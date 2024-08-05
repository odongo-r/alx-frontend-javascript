/**
 * Creates a budget object with income, gdp, and capita properties
 * @param {number} income - The income value
 * @param {number} gdp - The GDP value
 * @param {number} capita - The capita value
 * @returns {object} Budget object with income, gdp, and capita
 */
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
