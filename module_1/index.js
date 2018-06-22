		//Задача № 1

let a = "it'sMe";
function itsMe(name) {
	console.log(a + ', ' + name);
}
itsMe("Alexpebbleclassic");

		//Задача № 2
	
function compare(first, second) {
		if (first > second) {
				console.log(first + ' > ' + second);
		} 
			else if (first < second){
				console.log(first + ' < ' + second);
			}
			else if (first == second) {
				console.log(first + ' == ' + second);
			}
	}

compare(4, 3);
compare(3, 4);
compare(3, 3);

		//Задача № 3

//????

		//Задача № 4

function fact(n) {
  return (n != 1) ? n * fact(n - 1) : 1;
}

console.log(fact(4));

		//Задача № 5


function matrixDiff(arr1, arr2) {
	 
	 for (let i = 0; i < arr1.length; i += 1) {
	 	console.log(arr1[i]);
	 }
	 
	
}
matrixDiff([[2, 3], [4, 5]]);


