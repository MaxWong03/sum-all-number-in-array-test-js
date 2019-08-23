/*
base case: if the item is not an array, simply add it to sum
recursive case: if the item is an array, apply the function to it

*/


const sumItems = (arr) => {
  // Sum all the numbers in the array
  let sum = 0;
  arr.forEach((el) => {
    if (Array.isArray(el)) { //recursive case 
      sum += sumItems(el);
    } else { //base case
      sum += el;
    }
  });
  return sum;
};

module.exports = sumItems;


// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [[1, 2, [[3], 4]], 5, []];
// const arr3 = [[[[[[[[[[[[[1]]]]]]]]]]]]];

// const assertEqual = (actual, expected) => {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);

//   }

// };


// assertEqual(sumItems(arr1), 15);
// assertEqual(sumItems(arr2), 15);
// assertEqual(sumItems(arr3), 1);
