/**
 * Creates an object with a department name and list of employees.
 * @param {string} departmentName - The department name.
 * @param {Array} employees - The list of employees.
 * @returns {Object} The employees object.
 */
export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}
