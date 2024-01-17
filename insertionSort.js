// сортування вставкою
// Big O = O(n^2)
const arr = [5,6,3,1,2,8,7,4];
function insertionSort (array){
    for (let i = 1; i < array.length; i++){
        let j = i;
        while (j>0 && arr[j-1]>arr[j]){
            [arr[j-1], arr[j]] = [arr[j],arr[j-1]];
            j--;
        }
    }
    console.log(array);
}
insertionSort(arr);