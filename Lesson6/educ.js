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

var arr10x10 = getMatrix(10);

//
//log Matrix
//
function displayMatrix(array){
	for (var i = 0; i < arr10x10.length; i++) {
		console.log(arr10x10[i]);
	};
}