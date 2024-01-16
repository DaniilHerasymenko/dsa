// Сортування вибором
// Big O = O(n^2)
const arr = [5,3,1,4,2];
function selectionSort (array){
    for (let i = 0; i < array.length - 1; i++){
        let jMin = i;
        for (let j = i+1; j < array.length; j++){
            if (array[j] < array[jMin]){
                jMin = j;
            }
        }
        if (jMin != i){
            [arr[i], arr[jMin]] = [arr[jMin], arr[i]];
        }
    }
    console.log(array);
}
selectionSort(arr);