

let arr = ["a", "b"];

arr.push(function() {
  alert(this);
})

arr[2](); // * alert array arr
//a,b,arr.push(function() {
//   alert(this);
// })