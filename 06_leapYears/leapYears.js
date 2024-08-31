// const leapYears = function() {

// };

// // Do not edit below this line
// module.exports = leapYears;

function ISLP(y) {
  if (y % 400 == 0 || (y % 100 != 0 && y % 4 == 0)) {
    console.log(`Yes, ${y} is a leap year.`);
  } else {
    console.log(`No, ${y} is not a leap year.`);
  }
}

ISLP(1981);