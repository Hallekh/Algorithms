let x = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
x.sort(function(a, b){
    return a - b;
})
console.log(x[x.length - 3])