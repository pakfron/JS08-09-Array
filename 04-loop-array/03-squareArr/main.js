const arr = [2, 3, 5, 7, 11];

arr.forEach(function (element, index, array) {
  return (array[index] = element ** 2);
});

console.log(arr)

// squareArr(arr); // [4, 9, 25, 49, 121]
