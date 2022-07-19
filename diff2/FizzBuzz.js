

var result = 0;
for (let i = 1; i <=135; i++){
    if (i % 3 == 0 & i % 5 == 0){
        result = 'FizzBuzz'
    } else if (i % 5 == 0){
        result = 'Buzz'
    }else if  (i % 3 == 0){
        result = 'Fizz'
    } else {
        result = i;
    }
    console.log(result)
} 


