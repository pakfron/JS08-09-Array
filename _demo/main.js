const log = console.log;
log("learn array");

// Declaration
// Array Leteral
// element : สมาชิก
const friends = ["Money", "Non", "Peakpoon", "Fon"];

//Array Constructor
const height = new Array(150, 160, 175);
log(height);

// Access,Modify,Add,Delete
// Bracket Notation with index
// Access
log(friends[0]);
// log(friends[-1]) //undefiendเพราะไม่มีข้อมูล

// Update
friends[0];
friends[0] = "Gold";
log(friends);

friends[1] = "Michael";
log(friends);

// // ถ้าพยายามอัพเดท index ที่ไม่มีอยู่จริง === add
// friends[-1] = "Pavit";
// log(friends);
// log(friends[-1])

// Add
log(friends[3]);
friends[4] = "Git";
log(friends);

// Delete
delete friends[2];
log(friends);
log(friends[2]);

//## 3. basic property and method of array
// <aar>.lenght
friends[friends.length] = "mix";
log(friends);
log(friends.length);

// for (let i = 0; i <= friends.length - 1; i++) {
//   console.log(i, friends[i]);
// }

// Method Crud Element

const animal = ["Spider", "Cat", "Elephant"];
// Immutable : ไม่เปลี่ยนแปลงค่า (ถ้าจะเปลี่ยนต้องเเขียนทับ)
// Mutable : เปลี่ยนแปลงค่าได้
// Push ทำให้ Arraay Mutate ไหม  ? Yes (ยาวขึ้น)
animal.push("Dog");
log(animal);

let s = animal.unshift("Snake", "Mountain Bird");
log(animal);
log(s);

let t = animal.pop();
log(animal);
log(t);

// for loop

for (let i = 0; i < animal.length; i++) {
  console.log(animal[i]);
}

//for in (มองarraay เป็น  obj ประเภทนึงได้)
//<key>:<value> =><index>:<value>
// const arr = {
//   0: "bird",
//   1: "cat",
//   2: "dog",
// };

for (let index in animal) {
  console.log(index, animal[index]);
}

// for ... of
for (let element of animal) {
  log(element);
}

// Aside Topic :highter order function
function add(x, y) {
  return x + y;
}
log(add(5, 6));

// Function Expression : FN as a value
const a = console.log;
// const b = alert;
// a('hi')
// b('hello')

// สร้าง Function รับ parameter  เป็น  function

// function addAndShow(x,y,showFn){
//     let result = x+y;
//     showFn(result)
//     return result
// }

// function show(result){
//     console.log(result)
// }

// addAndShow(5,10,show)

const items = ["Football", "Bag", "Dish"];

//4d : forEach <array>.forEach(FN)
//SYNTAX :<array>.forEach(FN)
// Higher order fn == forEach (รับพารามิเตอร์เป็น FN)

// items.forEach(function(){})

function iterateFn (a) {
    console.log(a)
}
items.forEach(iterateFn);

