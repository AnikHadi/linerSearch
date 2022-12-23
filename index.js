const findValueIndex = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i
    }
  }
  return -1
}

const input = [3, 8, 9, 4, 6, 1, 11, 24, 28, 21];
console.log(findValueIndex(input, 88))