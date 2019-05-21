const insertionSort = nArray => {
  if (nArray.length < 2) return nArray;

  for (let i = 1, nArrayLength = nArray.length; i < nArrayLength; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nArray[i] >= nArray[j]) continue;

      //insert new value on sorted part of array
      [nArray[j], nArray[i]] = [nArray[i], nArray[j]];
      return insertionSort(nArray);
    }
  }

  return nArray;
};

console.log(insertionSort([5, 2, 3, 1, 4, 5, 8, 9, 8, 10, 200]));
