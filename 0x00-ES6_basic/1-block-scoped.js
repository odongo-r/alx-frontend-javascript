/**
 * Demonstrates block-scoped variables.
 * @param {boolean} trueOrFalse - A boolean to trigger block scope.
 * @returns {Array} An array containing the values of task and task2.
 */
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // A new block-scoped variable task
    const task2 = false; // A new block-scoped variable task2
  }

  return [task, task2];
}
