function numbersToString(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            result.push('Turing')
        } else {
            result.push(array[i])
        }
    }
    console.log(result)
}
let x = [1, -4, 0, -1];
numbersToString(x);

// function transforms(number) {
//     var result = [];
//     for (var i = 0; i < number.length; i++) {
//         if (number[i] < 0) {
//             result.push('Turing')
//         } else {
//             result.push(number[i])
//         }
//     }
//     console.log(result)
// }
// var x = [1, -4, 0, -1];
// transforms(x);