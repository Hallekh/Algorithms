
// function largestOfFour (arr) {
//     let answer = [];
//     for (let i=0; i<arr.length; i++){
//         answer.push(Math.max(...arr[i]))
//     }
    
//     console.log(answer)
// }

// largestOfFour ([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])

let array = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
function largeArray (array) {
    let result = [];
    for (i=0; i<array.length; i++){
        let max = array[i][0];
        for (j=0; j<array[i].length; j++){
            let number = array[i][j];
            if(number>=max){
                max=number
            }
        }
        result.push(max)
    }
    return result
    
}
console.log(largeArray(array))
