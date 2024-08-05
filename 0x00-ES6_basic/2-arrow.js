/**
 * Represents a list of neighborhoods and allows adding new ones.
 */
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  /**
   * Adds a new neighborhood to the list.
   * @param {string} newNeighborhood - The new neighborhood to add.
   * @returns {Array} The updated list of neighborhoods.
   */
  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}
