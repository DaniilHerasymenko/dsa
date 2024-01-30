//Коктельне сортування
//Big O = O(n^2)
function cocktailSort(arr){
    let swapped = true; //змінна для позначення відсортованості
    let firstElement = 0;
    let lastElement = arr.length-1;
    //цикл працюватиме до того часу, поки не буде все відсортовано (тобто залишиться параметр swapped = false)
    while (swapped == true) {
        swapped = false;
        //прохід бульбашковим сортуванням з останнього елемента до першого
        for (let i = firstElement; i < lastElement; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]];
                swapped = true;
            }
        }
        //якщо нічого не відбулось у циклі, перериваємо його
        if (swapped == false)
            break;
        swapped = false;
        lastElement--;
        //прохід бульбашковим сортуванням з першого елемента до останнього
        for (let i = lastElement; i >= firstElement; i--) {
            if (arr[i] > arr[i + 1]) {
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]];
                swapped = true;
            }
        }
        firstElement++;
    }
    return arr;
}
let array = [5, 3, 6, 7, 8, 0, 4];
console.log(cocktailSort(array));