// сортування гнома
// Big O = O(n^2)
const arr =[5,3,6,6,9,8,1,4,7];
function gnomeSort (array){
    let i = 0;
    while (i < array.length){
        if (i === 0 || array[i] >= array[i-1]){
            i++;
        } else {
            [array[i], array[i-1]] = [array[i-1], array[i]];
            i--;
        }
    }
    console.log(array);
}
gnomeSort(arr);