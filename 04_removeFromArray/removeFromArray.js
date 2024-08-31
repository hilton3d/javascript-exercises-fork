// const removeFromArray = function() {
// };

// // Do not edit below this line
// module.exports = removeFromArray;

function removeFromArray(arr, remove) {
  const items = [];

  for (const item of arr) {
    if (item != remove) {
      items.push(item);
    }
  }

  console.log(items);
}

removeFromArray([1, 2, 3, 4], 3);

// let array = [8, 5, 6];
// console.log(array);
