let a = prompt("Enter the number");
let b = a;
let sum = 0;
while (a > 0) {
  reminder = a % 10;
  sum = sum + reminder ** 3;
  a = a - reminder;
  a = a / 10;
}
console.log(sum);
if (sum == b) {
  console.log("The given number is a armstroing number");
} else {
  console.log("Its not a armstrong number");
}
