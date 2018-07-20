let n = 4;
let arr = [{ className: 'class', attributes: { 'data-name': 'Anatoliy', surname: "Bondar" }, content: 'Text' }];


let button = document.getElementById("btn");

function init(arr, n){
	let list = document.createElement("ul");
	document.body.insertBefore(list, button);

	let li = document.createElement("li");
	for (obj of arr) {
		li.className = obj.className; /*присвоить класс*/

		for (key in obj.attributes){
			li.setAttribute(key, obj.attributes[key]); /*присвоить аттрибут и его значение*/
		}

		li.textContent = obj.content; /*присвоить текст*/

		for (let i = 1; i <= n; i++){
			list.appendChild(li.cloneNode(true));
		}
	}
}
init(arr, n)

function listen(){
	button.addEventListener("click", del);
	let list = document.querySelector("li");
	if (list) {
		return true;
	}
	else {
		return false;
	}
}

function del(){
	let list = document.querySelector("ul");
	list.parentElement.removeChild(list);
}
