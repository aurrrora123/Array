
var dataOld = [34, true, "Peter", 1992]
var dataNew = []

for (i=0; i<dataOld.length; i++){

	dataNew[i] = dataOld[i]
}

console.log(dataNew)

var dataOld = [34, true, "Peter", 1992]
var dataNew = []

for (i = dataOld.length -1; i>= 0; i--){

	dataNew [dataOld.length -1 -i] = dataOld [i]
}

console.log(dataNew)


var dataOld = [34, true, "Peter", 1992]
var dataNew = [12, "Jack"]

for(i = 0; i < dataOld.length; i++){
	dataNew [dataNew.length] = dataOld [i]
}

console.log (dataNew)

var a = [12, 56, 32, 44, 69]
var b = [ 88, 7, 13]
var c = []

