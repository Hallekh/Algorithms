// let f = 1;
// function factorialize(n) {
//     for(let i=1 ; i <= n ; i++){
//         f*=i;
//     }
//     return f
// }
// console.log(factorialize(5))

function factorialize (n){
    if(n ===0 || n === 1){
    return 1
    } else {
        return n*=factorialize(n-1)
    }
}
console.log(factorialize(5))