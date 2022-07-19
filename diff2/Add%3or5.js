
//     var result = 0;
//     for (var i=200; i<=2700; i++){
//         if(i % 3 == 0 || i % 5 == 0){
//             result = i;
//         }
//         console.log(result)
//     }
    
// let shift = [2, 1, 6, 4, -7]
// shift.reverse();
// console.log(shift)


// var result = 0;
// for (let i = 1; i <=135; i++){
//     if (i % 3 == 0 & i % 5 == 0){
//         result = 'FizzBuzz'
//     } else if (i % 5 == 0){
//         result = 'Buzz'
//     }else if  (i % 3 == 0){
//         result = 'Fizz'
//     } else {
//         result = i;
//     }
//     console.log(result)
// } 


// let one = 0;
// let two = 1;

// for (let i = 1; i <= 29; i++) {
// 	let current = one + two;
	
// 	one = two;
// 	two = current;
	
// 	console.log(current);
// }

// var sequence = [0,1]; 
// for (var i = 0; i <29; i ++) {
//     sequence.push (sequence [i] + sequence [i + 1]); 
// } 
// console.log (sequence);

// let x = [1, -2, 4, 1];
// let result = [];
// for (let i=0; i<x.length; i++){
//     if (x[i]>0){
//         result.push(x[i])
//     } else continue
    
// }
// console.log(result)


function replace(arr){
    let result = [];
    for (let i =0 ; i < arr.length ; i++){
        if(arr [i] === 'Program'){
            result.push('*******')
        } else {
            result.push(arr[i])
        }
    }
    console.log(result)
}

let arr= ['Man','I','Love','The','Matrix','Program'];
replace(arr)
