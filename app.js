function AgeChecker(age) {
  console.log(age >= 18 ? "The user is Adult" : "The user is Minor");
}

AgeChecker(20);
AgeChecker(15);

function reverseNumber(num) {
  let reversed = 0;
  for (reversed; num != 0; num = (num / 10) | 0) {
    reversed = reversed * 10 + (num % 10);
  }
  return reversed;
}

let x = 532443;
console.log(reverseNumber(x));

let ar = [5, 3, 2, 4, 4, 3];
rev(ar);
function rev(ar) {
  let revarray = [];
  for (let i = ar.length - 1, j = 0; i >= 0; i--, j++) {
    revarray[j] = ar[i];
  }
  console.log(revarray);
}

for (let i = 0; i <= 15; i++) {
  if (i % 2 == 0) {
    console.log(i + " This Number is EVEN");
  } else if (i % 2 == 1) {
    console.log(i + " This Number is ODD");
  }
}

function evenDash(input) {
  let numberString = input.toString();
  let result = "";

  for (let i = 0; i < numberString.length; i++) {
    result += numberString[i];
    if (
      i < numberString.length - 1 &&
      parseInt(numberString[i]) % 2 === 0 &&
      parseInt(numberString[i + 1]) % 2 === 0
    ) {
      result += "-";
    }
  }

  return result;
}

let inputDash = "025468";
let outputDash = evenDash(inputDash);
console.log(outputDash);

function sortAlpha(input) {
  let lowercase = input.toLowerCase();
  let sortingString = lowercase.split("").sort().join("");

  return sortingString;
}

let input = "Orange";
let output = sortAlpha(input);
console.log(output);
