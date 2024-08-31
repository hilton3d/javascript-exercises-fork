// const convertToCelsius = function() {
// };

// const convertToFahrenheit = function() {
// };

// // Do not edit below this line
// module.exports = {
//   convertToCelsius,
//   convertToFahrenheit
// };

// https://forum.freecodecamp.org/t/help-needed-convert-celsius-to-fahrenheit/491553

// https://www.shecodes.io/athena/9670-convert-fahrenheit-to-celsius-in-javascript#:~:text=let%20fahrenheit%20%3D%20prompt(%22Enter,toFixed(2)%7D%60)%3B

function convertToFahrenheit(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32;
    console.log(fahrenheit);
}

convertToFahrenheit(30);

function convertToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    console.log(celsius.toFixed(1));
}

convertToCelsius(15);