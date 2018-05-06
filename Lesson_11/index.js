let a = 3;
let b = 2;
let operation = "mult";
		// “add” соответствует добавлению числа “a” к числу “b”
		// “sub” соответствует отниманию числа “a” от числа “b”
		// “mult” соответствует умножению числа “a” на число “b”
		// “div” соответствует делению числа “a” на число “b”
		// “pow” соответствует возведению числа “a” в степень “b”

switch (operation) {
  case "add":
    console.log(a + b);
    break;

  case "sub":
    console.log(a - b);
    break;

  case "mult":
    console.log(a * b);
    break;

  case "div":
    console.log(a / b);
    break;

  case "pow":
    console.log(Math.pow(a, b));
    break;
    
  default:
    console.log("Не верная команда !!");
}

if (b == 0) {
  console.log('Это невозможно !!');
}
