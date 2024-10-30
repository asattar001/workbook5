/**
 *
 * @param Function - function that does the filtering
 * @return Array - returns a filtered array
 */

// original array
let array = [1, 3, 5, 7, 3, 8, 9, 5, 2, 6];

// filer that takes a function
function myFilter(func) {
  //creates a new array
  let result = [];

  // loops through array ur filtering
  for (let i = 0; i < array.length; i++) {
    // passes 3 things into ur function
    //if it gives back an item we push it to the new array
    const elem = array[i];
    const isValid = func(elem, i, array);

    if (isValid) {
      result.push(elem);
    }
  }

  // return the new array we made
  return result;
}

// executing the filter function
// takes a function that we write
let newArray = myFilter(function (item, idx, arr) {
  // console.log(item)

    // send number back to filter if number is less than or equal to 5
  if (item <= 5) {
    return true;
  }
});

console.log(newArray);



// let array = [1, 3, 5, 7, 3, 8, 9, 5, 2, 6];


let newArray2 = array.filter( function (item) {
    if(item <= 5){
        return true;
    }
})

console.log(newArray2)