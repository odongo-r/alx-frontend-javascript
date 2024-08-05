/**
 * Evaluates a condition to return an array with boolean values based on the condition.
 * @param {boolean} trueOrFalse - The condition to determine which values to return.
 * @returns {boolean[]} An array containing two boolean values based on the condition.
 */
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;

    if (task && task2) {
      return [task, task2];
    }
  }

  return [task, task2];
}