/**
 * Returns an array with block-scoped variables based on the condition
 * @param {boolean} trueOrFalse - Condition to determine variable values
 * @returns {boolean[]} Array with two boolean values
 */
export default function taskBlock(trueOrFalse) {
  let task = false;  // Block-scoped variable
  let task2 = true;  // Block-scoped variable

  if (trueOrFalse) {
    task = true;    // Updated within the block
    task2 = false;  // Updated within the block
  }

  return [task, task2];
}