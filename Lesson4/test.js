
var arr = [1, 3, 5, 7, 6, 32, 25];

function receiveMultiple (array, koef) {
	var newArr = [];
	array.forEach(function (value, key) {
		if(value%koef === 0)
			newArr.push(value);
	})
	return newArr;
}

console.log(receiveMultiple(arr, 1));