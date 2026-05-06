module.exports = function towelSort(matrix) {
  if (!matrix || !Array.isArray(matrix)) {
    return [];
  }
  const myArr = [];
  matrix
    .map((array) =>
      matrix.indexOf(array) % 2 !== 0
        ? array.sort((a, b) => b - a)
        : array.sort((a, b) => a - b)
    )
    .map((elem) => {
      myArr.push(...elem);
      return myArr;
    });
  return myArr;
};
