//Парне-непарне сортування
//Big O = O(n^2)
function oddEvenSort(array) {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 1; i < array.length - 1; i += 2) {
            if (array[i] > array[i + 1]) {
                [array[i],array[i+1]]=[array[i+1],array[i]];
                sorted = false;
            }
        }
        for (let i = 0; i < array.length - 1; i += 2) {
            if (array[i] > array[i + 1]) {
                [array[i],array[i+1]]=[array[i+1],array[i]];
                sorted = false;
            }
        }
    }
    console.log(array);
  }
  
  let arr = [4, 2, 7, 1, 9, 5, 3];
  oddEvenSort(arr);