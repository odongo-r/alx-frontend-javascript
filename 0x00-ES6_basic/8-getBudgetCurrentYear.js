/**
 * Returns the current year.
 * @returns {number} The current year.
 */
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

/**
 * Creates a budget object for the current year.
 * @param {string} income - The income value.
 * @param {string} gdp - The GDP value.
 * @param {string} capita - The per capita value.
 * @returns {Object} The budget object for the current year.
 */
export default function getBudgetForCurrentYear(income, gdp, capita) {
  return {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };
}
