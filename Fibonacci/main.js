
// let n1 = 0;
// let n2 = 1;
// let next;
// function fibonacci (n){
//     for (let i=0; i<=n; i++){
//         console.log(n1)
//         next = n1 + n2
//         n1 = n2
//         n2 = next

//     }
// }

// fibonacci(30)
 
function reverse(arr) {
    let result = [];

    for (let i = arr.length-1; i >= 0; i--) {
        result.push(arr[i])
    }
    console.log(result)
    
}
let x = [2, 7, 5, -7, 0]
reverse(x)





/*
i =  4;  i = 3, i =2; i = 1; i =0

        [2, 7, 5, -7, 0]
    result= [0, -7, 5, 7, 2 ]



index=   [0, 1, 2 , 3, 4]
         [2, 7, 5, -7, 0]
length=  [1, 2, 3 , 4, 5]
*/

