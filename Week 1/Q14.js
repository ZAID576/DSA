// write a function that returns the total number of negative numbers in an array

function findNegative(){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0 ){
            count++;
        }

    }
    return count

}

let arr = [1,-2, 3,-4, 5,-6, 7,-8, 9,-10]

let count = findNegative(arr)
console.log(count)