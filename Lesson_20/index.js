// var foogty = { firstName: "Petya" };

// function sayHi() {
//   alert( this.firstName );
// }
// foogty.f = sayHi;
// foogty.f()

function Human (name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function (){
      console.log("Hello, my name is " + this.name + ", i am " + this.age + " years old");
    }
}
  let human = new Human("Aleksandr", 32);
  // human.sayHello()

  function AlevelStudent (name, age, marks) {
    this.name = name;
    this.age = age;
    
  }
  AlevelStudent.prototype = Object.create(Human.prototype);
    // this.sayHello = function (){
    //   console.log("Hello, my name is " + this.name + ", i am " + this.age + " years old");
    // }
    AlevelStudent.averageMark = function () {
      this.marks = marks;
      let sum = 0;
      for (let i = 0; i < arguments[i]; i++ ) sum += arguments[i];
      return sum == 0 ? sum : sum / arguments.length;
      
   }
   
  let alevelStudent = new AlevelStudent((1, 2, 3, 4, 5));
  
  Human.apply(this, human.sayHello())
  console.log((1, 2, 3, 4, 5)); 
  // AlevelStudent.averageMark()









  //   function AlevelStudent (name, age, marks) {
//     this.name = name;
//     this.age = age;
//     this.marks = marks;
//     this.sayHello = function (){
//       console.log("Hello, my name is " + this.name + ", i am " + this.age + " years old");
//     }
//     this.averageMark = function () {
//       var sum = 0;
//       for (var i = 0; i < arguments[i]; i++ ) sum += arguments[i];
//       return sum == 0 ? sum : sum / arguments.length;
//   }
//   console.log( (1, 2, 3, 4, 5) );
// }
//   let alevelStudent = new AlevelStudent("Aleksandr", 32, [1, 2, 3, 4, 5]);
//   alevelStudent.averageMark()

  //  Изменить или добавить еще одтн метод для этого плюс наследование