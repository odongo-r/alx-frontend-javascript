/**
 * Returns an array with constant values based on the condition
 * @param {boolean} trueOrFalse - Condition to determine variable values
 * @returns {boolean[]} Array with two boolean values
 */
export default function taskBlock(trueOrFalse) {

  const defaultTask = false;
  const defaultTask2 = true;

  const conditionalTask = trueOrFalse ? true : defaultTask;
  const conditionalTask2 = trueOrFalse ? false : defaultTask2;

  return [conditionalTask, conditionalTask2];
}