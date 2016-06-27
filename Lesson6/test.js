function randomInteger(min, max) {
	return Math.floor( min + Math.random() * (max + 1 - min) );
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

var arr10x10 = getMatrix(5);

//
//log Matrix
//
function displayMatrix(array){
	for (var i = 0; i < arr10x10.length; i++) {
		console.log(arr10x10[i]);
	};
}

displayMatrix(arr10x10);

function getRow (array, row, isDescending) {
	var arr =[];
	arr = array[row].slice();
	if(isDescending) {
		arr.reverse();
	}
	return arr;
}

function getColumn (array, column, isDescending) {
	var arr =[];
	var length = array.length;
	if(!isDescending) {
		for (var i = 0; i < length; i++) {
			arr.push(array[i][column]);
		};
	} else {
		for (var i = length - 1; i >= 0; i--) {
			arr.push(array[i][column]);
		};
	}
	return arr;
}

function getDiagonal (array, isMain, isDescending) {
	var arr = [];
	var length = array.length;
	for (var i = 0; i < length; i++) {
		for(var j = 0; j < length; j++){
			if (isMain && i === j) {
				arr.push(array[i][j]);
			} else if (!isMain && (i + j === length - 1)) {
				arr.push(array[i][j]);
			};
		};
	};
	if (isDescending) {
		arr.reverse();
	}
	return arr;
}

function getPerimeter (array, isClockwise) {
	var newArr = [], up =[], right = [], down = [], left = [];
	up = getRow(array, 0, !isClockwise);
	right = getColumn(array, array.length - 1, !isClockwise);
	down = getRow(array, array.length - 1, isClockwise);
	left = getColumn(array, 0, isClockwise);
	if(isClockwise){
		newArr = newArr.concat(up, right.slice(1), down.slice(1), left.slice(1, right.length - 1));
	} else {
		newArr = newArr.concat(left, down.slice(1), right.slice(1), up.slice(1, right.length - 1));
	}
	console.log(newArr);
	return newArr;
}

getPerimeter(arr10x10, true);
getPerimeter(arr10x10, false);