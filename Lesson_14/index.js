function add(first_arg) {
	let sum = 0;
	if (!first_arg) {
		first_arg = '♥🇺🇦';
	for ( i = 0; i < first_arg.length; i++){
		sum	+= first_arg.charCodeAt(i);
	}
		// console.log(sum / first_arg.length);
	} else {
	for (let i = 0; i < first_arg.length; i++) {
		sum += first_arg.charCodeAt(i);
	// console.log(first_arg.charCodeAt(i));	
		}
	// console.log(sum / first_arg.length);
	}
	return sum / (first_arg.length / 2);
}

// add()
// add("🍔😁")


function clearNumbers(mas1_mas2) {
	for (var mas1 = 0; mas1 < mas1_mas2.length; mas1++) {
		mas1_mas2[mas1]
		// console.log(mas1_mas2);
	
		for (var mas2 = 0; mas2 < mas1_mas2[mas1].length; mas2++) {
			mas1_mas2[mas2]
			// console.log(mas1_mas2);
			if (typeof mas1_mas2[mas1][mas2] !== "number") {
						mas1_mas2[mas1].splice(mas2, 2);
						// mas1_mas2[mas2].splice(mas1, 0);
			}
		}
	}
	return mas1_mas2;
	// console.log(mas1_mas2);
}

// clearNumbers([[130, "r", "i"], ["b", 2, 4], ["a", 5, 6], ["c", 7]])
// let clearNumbers = [[1], ["b"], [2], ["c"]];
	// for (var mas1 = 0; mas1 < clearNumbers.length; mas1++) {
// 		clearNumbers[mas1]
// 	}
// 	console.log(clearNumbers);
