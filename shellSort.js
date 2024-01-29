// Сортування Шелла
// Big O = O(n^2)
function shellSort(arr) {
    const n = arr.length;
    let gap = Math.floor(n / 2); // змінна приймає значення середнього елемента масиву

    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            const temp = arr[i];
            let j = i;
            // коли виконується умова циклу, елементи arr[j] та arr[j - gap] змінюються місцями
            // умова виконується до того часу, поки елемент не встане на своє місце, або j не стане меншою за gap
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }
            arr[j] = temp;
        }
        //якщо вже пройшли по заданому циклу - зменшуємо змінну gap вдвічі 
        gap = Math.floor(gap / 2);
    }
    return arr; //повертаємо результат
}
const array = [3, 9, 1, 6, 2];
console.log("Sorted array:", shellSort(array));