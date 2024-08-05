/**
 * Creates a report object from a list of employees.
 * @param {Object} employeesList - The list of employees.
 * @returns {Object} The report object.
 */
export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    /**
     * Returns the number of departments.
     * @returns {number} The number of departments.
     */
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };
}
