const array = [29, 17, 13, 47, 23, 31];

sum = 0;
array.forEach(function (item) {
  return (sum = sum + item);
});
console.log(sum);
