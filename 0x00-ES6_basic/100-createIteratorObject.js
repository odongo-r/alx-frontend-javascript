/**
 * Creates an iterator object from a report.
 * @param {Object} report - The report object.
 * @returns {Array} An array of all employees.
 */
export default function createIteratorObject(report) {
  const allEmployees = [];
  for (const employees of Object.values(report.allEmployees)) {
    allEmployees.push(...employees);
  }
  return allEmployees;
}
