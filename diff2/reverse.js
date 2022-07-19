
// let shift = [2, 1, 6, 4, -7]
// shift.reverse();
// console.log(shift)

function reverse (arr){
    let reversed=[];
    for ( var i=arr.length-1; i>=0; i--){
        reversed.push(arr[i])
    }
    return reversed
}
console.log(reverse([2, -7, 1, 6, 9]))


