/**
 * Laundry Problem
 *
 * @param {number} noOfWashes
 * @param {number[]} cleanPile
 * @param {number[]} dirtyPile
 *
 * @returns {number}
 */
function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {
  let cleanObj = {};
  let dirtyObj = {};
  let count = 0;
  let resultObj = {};
  let paired = 0;
  cleanPile.map((clean) => (cleanObj[clean] = cleanObj[clean] + 1 || 1));
  dirtyPile.map((dirty) => (dirtyObj[dirty] = dirtyObj[dirty] + 1 || 1));
  for (let i = 0; i < dirtyPile.length; i++) {
    if (
      count < noOfWashes &&
      cleanPile.includes(dirtyPile[i]) &&
      cleanObj[dirtyPile[i]] % 2 !== 0
    ) {
      count++;
      cleanPile.push(dirtyPile[i]);
      dirtyPile.splice(i, 1);
      cleanObj[dirtyPile[i]] += 1;
    }
  }
  for (let m = 0; m < dirtyPile.length; m++) {
    if (dirtyObj[dirtyPile[m]] > 1 && count < noOfWashes) {
      count++;
      cleanPile.push([dirtyPile[m]]);
    }
  }
  cleanPile.map((clean) => {
    resultObj[clean] = resultObj[clean] + 1 || 1;
    if (resultObj[clean] % 2 == 0) {
      paired++;
    }
  });
  return paired;
}
module.exports = getMaxPairs;
