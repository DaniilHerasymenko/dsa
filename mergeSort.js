// l та r - відповідно початок та кінець масиву, r - кінець першого підмасиіу
function merge(arr, l, m, r){
	let amountFirstArray = m - l + 1;
	let amountSecondArray = r - m;
    let firstArr = new Array(amountFirstArray); 
	let secondArr = new Array(amountSecondArray);
	
	for (let i = 0; i < amountFirstArray; i++)
		firstArr[i] = arr[l + i];
	for (let j = 0; j < amountSecondArray; j++)
		secondArr[j] = arr[m + 1 + j];
	
	let i = 0, j = 0; // індекси 1 та 2 підмасивів
	var k = l; //індекс об'єднаного підмасиву

	while (i < amountFirstArray && j < amountSecondArray) {
		if (firstArr[i] <= secondArr[j]) {
			arr[k] = firstArr[i];
			i++;
		}
		else {
			arr[k] = secondArr[j];
			j++;
		}
		k++;
	}
	// копіювання елементів з першого масиву, що лишились
	while (i < amountFirstArray) {
		arr[k] = firstArr[i];
		i++;
		k++;
	}
	// копіювання елементів з другого масиву, що лишились
	while (j < amountSecondArray) {
		arr[k] = secondArr[j];
		j++;
		k++;
	}
}

function mergeSort(arr,l, r){
	if(l>=r){
		return;
	}
	let m = l+ parseInt((r-l)/2);
	mergeSort(arr,l,m);
	mergeSort(arr,m+1,r);
	merge(arr,l,m,r);
	return arr;
}

let arr = [12, 11, 13, 5, 6, 7];
let arr_size = arr.length-1;
console.log(mergeSort(arr,0,arr_size));