
var arr = [1, 3, 5, 7, 6, 32, 25];

for (var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
};

for (var i in arr){
	console.log(arr[i]);
}

arr.forEach(function (value, key) {
	console.log(value);
})

---------------------------------------------------
//
//indexOf
//

function getIndex (array, elem) {
	for (var i = 0; i < array.length; i++) {
		if(array[i] === elem)
			return i;
	}
	return -1;
};

function getIndexForeach (array, elem) {
	var i = -1;
	array.forEach(function(value, key){
		if(value === elem){
			i = key;
		}
	});
	return i;
};


function getIndexFrom (array, elem, index) {
	for (var i = (index + 1 || 0); i < array.length; i++) {
		if(array[i] === elem)
			return i;
	}
	return -1;
};

console.log('GetIndex from getIndex - ' + getIndex(arr, 6));

console.log('GetIndex from getIndexForeach - ' + getIndexForeach(arr, 6));

arr.push(6);
console.log('GetIndex from getIndexForeach - ' + getIndexFrom(arr, 6, 3));

-----------------------------------------------------

//
//lastIndexOf
//

function lastIndex (array, element) {
	var index = -1;
	for (var i = array.length - 1; i >= 0; i--) {
		if(array[i] === element)
			index = i;
	}
	return index;
}

console.log(lastIndex(arr, 6));

-----------------------------------------------------
//
//reverse
//

function revert (array) {
	for (var i = 0, j = array.length - 1; i < array.length/2; i++, j--) {
		var k = array[i];
		array[i] = array[j];
		array[j] = k;
	}
	return array;
}

console.log(revert(arr));

-----------------------------------------------------

//
//get multiple
//

function receiveMultiple (array, koef) {
	var newArr = [];
	array.forEach(function (value, key) {
		if(value%koef === 0)
			newArr.push(value);
	})
	return newArr;
}

console.log(receiveMultiple(arr, 1));