// const sumAll = function() {

// };

// // Do not edit below this line
// module.exports = sumAll;

function sumAll(num1, num2) {
  let total = 0;
  for (let i = num1; i <= num2; i++) {
    total += i;
  }
  console.log(total);
}

sumAll(1, 4);
