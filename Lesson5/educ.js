//
//Count negative
//
function countNegative (array) {
	var count = 0;
	for (var i = 0; i < array.length; i++) {
		if(array[i] < 0){
			count++;
		}
	}
	return count;
}

var arr = [1, -5, 9, 6, -7, -8, 65];

console.log(countNegative(arr));

//
//Random
//

function randomInteger(min, max) {
  return Math.floor( min + Math.random() * (max + 1 - min) );
}

//
//array
//
function getArray (size) {
	var array = [];
	for (var i = 0; i < size; i++) {
		array[i] = randomInteger(-100, 100);
	};
	return array;
}

//
//Matrix
//
function getMatrix (size) {
	var array = [];
	var subArray = [];
	for(var i = 0; i < size; i++){
		for(var j = 0; j < size; j++){
			subArray[j] = randomInteger(-100, 100);
		}
		array[i] = subArray.slice();
	}
	return array;
}

var arr10 = getArray(10);
var arr10x10 = getMatrix(10);

//
//log Matrix
//
function displayMatrix(array){
	for (var i = 0; i < arr10x10.length; i++) {
		console.log(arr10x10[i]);
	};
}

console.log(arr10);
console.log('``````````');
displayMatrix(arr10x10);
