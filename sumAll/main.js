//create function
//create variable
//create new array to push new numbers after for loop
//create new variable sum to know result 


function sumAll(arr) {
    if (arr[0] > arr[1])
    arr.sort((a, b) => a - b)
    let sum = 0; 

    for (let i = arr[0]; i <= arr[1]; i++)
    sum = sum + i
    return sum
}
console.log(sumAll([10, 5]))





// sumAll([1, 4]) should return a number.
// sumAll([1, 4]) should return 10.
// sumAll([4, 1]) should return 10.
// sumAll([5, 10]) should return 45.