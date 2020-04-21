/////////////////////////////
// Lecture: Function constructor

// var Person = function (name, yearOfBirth, job) {
//    this.name = name;
//    this.yearOfBirth = yearOfBirth;
//    this.job = job;
//    // this.calculateAge = function () {
//    //    console.log(2020 - this.yearOfBirth);
//    // }
// }

// Person.prototype.calculateAge = function () {
//    console.log(2020 - this.yearOfBirth);
// }

// var john = new Person('John', 1990, 'teacher');
// var mary = new Person('Mary', 1980, 'preacher');
// var diane = new Person('Diane', 1970, 'moocher');

// john.calculateAge();
// mary.calculateAge();
// diane.calculateAge();

// console.log(john, mary, diane);


// var Horse = function (name, carrotsEaten, personality) {
//    this.name = name;
//    this.carrotsEaten = carrotsEaten;
//    this.personality = personality;
// }

// Horse.prototype.carrotsAvailable = function () {
//    console.log(21 - this.carrotsEaten);
// }

// var ned = new Horse('Ned', 10, 'gregarious')
// var zed = new Horse('Zed', 12, 'gregarious')
// var sweetie = new Horse('Sweetie', 15, 'gregarious')

// console.log(ned, zed, sweetie);

// ned.carrotsAvailable();
// zed.carrotsAvailable();
// sweetie.carrotsAvailable();



// Object.create

// var personProto = {
//    calculateAge: function () {
//       console.log(2016 - this.yearOfBirth);
//    }
// };
// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';
// var jane = Object.create(personProto, {
//    name: {
//       value: 'Jane'
//    },
//    yearOfBirth: {
//       value: 1969
//    },
//    job: {
//       value: 'designer'
//    }
// });

/////////////////////////////
// Lecture: Primitives vs objects

// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);
// Objects
var obj1 = {
   name: 'John',
   age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);
// Functions
var age = 27;
var obj = {
   name: 'Jonas',
   city: 'Lisbon'
};

function change(a, b) {
   a = 30;
   b.city = 'San Francisco';
}
change(age, obj);
console.log(age);
console.log(obj.city);