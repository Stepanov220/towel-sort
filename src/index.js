module.exports = function towelSort (matrix) {
  if (matrix == undefined) return [];
  return matrix.map((val, ind, arr) => {
    return ind % 2 == 0 ? val: val.reverse();
  }).flat()
}