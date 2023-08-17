// ผลลัพธ์ในบรรทัด * มีค่าเป็นอะไรและเพราะอะไร
const arr = [1, 2, 4];
const newArr = arr;

arr[0] = 3;
console.log(newArr[0]); // ได้ 3 เพราะ ให้ค่าใหม่ index 0 = 3