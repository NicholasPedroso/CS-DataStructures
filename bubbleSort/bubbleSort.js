const bubbleSort = nArray => {
  const nArrayLength = nArray.length;

  for (let i = 0; i < nArrayLength; i++) {
    if (!nArray[i + 1]) break;
    if (nArray[i] <= nArray[i + 1]) continue;

    //Swap values
    [nArray[i], nArray[i + 1]] = [nArray[i + 1], nArray[i]];
    return bubbleSort(nArray);
  }
  return nArray;
};

console.log(bubbleSort([10, 9, 1, 3, 2, 5, 4, 7, 6, 8]));
