const inpEmail = document.getElementById("email");
const inpPhone = document.getElementById("phone");
// textarea
const content = document.getElementById("content");
const emailListBtn = document.getElementById("search");
const list = document.querySelector("ol");
const noEmailFound = document.getElementById("noEmailFound");

// validation
const phoneCheck = /^\+38(\(0\d\d\)|0\d\d)\d{3}[ _]?\d{2}[ _]?\d{2}$/;
// const emailCheck = /^[\w][\w\D]{2,}[\w]\@(([a-z\d][\w-]+[a-z\d])|(\[[A-z\d\:\.]+\]))\.[a-z]{2,4}$/;
const emailCheck = /^[\w][\w-\.]{2,}[\w]\@(([a-z\d][\w-]+[a-z\d])|(\[[A-z\d\:\.]+\]))\.[a-z]{2,4}$/;
const textEmailsCheck = /[\w][\w-\.]{2,}[\w]\@(([a-z\d][\w-]+[a-z\d])|(\[[A-z\d\:\.]+\]))\.[a-z]{2,4}/;


function inpValidation(input, pattern){
	let label = document.querySelector(`label[for="${input.id}"]`);
	if (!input.value){
		input.style.border = "2px solid grey";
		label.style.display = "none";

	} else if(pattern.test(input.value)){
		input.style.border = "2px solid limegreen";
		label.style.display = "none";

	} else {
		input.style.border = "2px solid red";
		label.style.display = "block";
	}
}

inpEmail.addEventListener("blur", (e) =>{
	inpValidation(e.target, emailCheck)
});

inpPhone.addEventListener("blur", (e) =>{
	inpValidation(e.target, phoneCheck)
});

emailListBtn.addEventListener("click", () => {
	let str = content.value;
	let step, cutStr;
	let result = {};
	for (let i = 0; i < str.length; i++) {
		if (textEmailsCheck.exec(str)) {
			result[textEmailsCheck.exec(str)[0]] = true;
			step = textEmailsCheck.exec(str).index + textEmailsCheck.exec(str)[0].length;
			cutStr = str.split("").splice(step).join("");
			str = cutStr;
		} else {
			break;
		}	
	}
	
	let arr = Object.keys(result);
	if (arr.length === 0) {
		noEmailFound.style.display = "block";

	} else {
		noEmailFound.style.display = "none";
	}

	for (let j = 0; j < arr.length; j++){
		const li = document.createElement("li");
		li.setAttribute("id", arr[j]);
		li.textContent = arr[j];
		list.appendChild(li);
	}
	emailListBtn.setAttribute("disabled", true);
});

content.addEventListener("focus", () => {
	noEmailFound.style.display = "none";
	arrOfLi = document.querySelectorAll("li");
	if (this.arrOfLi.length) {
		for (let i = 0; i < arrOfLi.length; i++) {
			list.removeChild(arrOfLi[i]);
		}
	}

	emailListBtn.removeAttribute("disabled");
});