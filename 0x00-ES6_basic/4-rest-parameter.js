/**
 * Returns the number of arguments passed.
 * @param {...*} args - The arguments to count.
 * @returns {number} The number of arguments.
 */
export default function returnHowManyArguments(...args) {
  return args.length;
}
