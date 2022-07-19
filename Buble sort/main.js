
function sorting (array){
    for (let i=0; i<array.length; i++){
        for (let j=0; j<array.length; j++){
            if (array[j] > array[j+1]){
                const temp = array[j];
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
    return array
}
const array = [100, 7, 3, 6, 2, 11, 1];
console.log(sorting(array))