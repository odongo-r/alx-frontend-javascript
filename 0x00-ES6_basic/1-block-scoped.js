/**
 * Returns an array with block-scoped variables
 * @param {boolean} trueOrFalse - Condition to determine variable values
 * @returns {boolean[]} Array with two boolean values
 */
export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}