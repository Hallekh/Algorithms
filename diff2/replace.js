
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
