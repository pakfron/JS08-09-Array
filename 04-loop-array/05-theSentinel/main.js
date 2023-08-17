let input;
number = [];
summary = 0;

do {
  input = +prompt();
  //   input= Number(input)

  if (
    input == 0 ||
    input == "stop" ||
    input == "" ||
    input == isNaN(input)
  ) {
    continue;
  }number.push(input);

} while (
  input != 0 &&!isNaN(input)
  // ||input.trim()!==""|| !isNaN(input)
);
number.forEach((element,index,array)=>{
    summary=summary+element
});
