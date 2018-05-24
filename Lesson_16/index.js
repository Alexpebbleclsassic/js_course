const n = 5;

let control_d = document.getElementById('control');
let control_but_1 = document.getElementById('start');
let control_but_2 = document.getElementById('pause');
let control_but_3 = document.getElementById('stop');
let second = document.getElementById('second');
// console.log();



for (let i = 1; i <= n; i += 1) {
	let span = document.createElement('span');
	span.setAttribute('id', `span${i}`);
	// span.innerHTML = `${i}`;
	let num = document.createTextNode(i);
	span.appendChild(num);
	value_n.insertBefore(span,value_n.children[i]);
		if (i >1) {
		value_n.insertBefore(document.createTextNode(', '), value_n.children[i]);

		}
		// console.log(span);
}

let num = 0;
let interval;

second.appendChild(document.createTextNode(num));

function count() {
	let interval = setInterval(function() {
		num += 1;
		second.innerHTML = num;
	}, 1000);
	control_but_1.setAttribute('disabled', 'true');

	control_but_3.addEventListener('click', function() {
		clearInterval(interval);
			control_but_1.removeAttribute('disabled');
				second.innerHTML = 0;
		})

	control_but_2.addEventListener('click', function() {
		clearInterval(interval);
			control_but_1.removeAttribute('disabled');
			
		})
}
control_but_1.addEventListener('click', count);
