// сортування бульбашкою
// Big O = O(n^2)
const arr = [5,3,4,1,2];
function bubbleSort(array){
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if (array[j+1] < array[j]){
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    }
    console.log(array);
}
bubbleSort(arr);