/**
 * Returns a string indicating a preference for const.
 * @returns {string} A string indicating a preference for const.
 */
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

/**
 * Returns a string ' is okay'.
 * @returns {string} A string ' is okay'.
 */
export function getLast() {
  return ' is okay';
}

/**
 * Combines two strings about variable declarations.
 * @returns {string} A combined string about using let and const.
 */
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}

