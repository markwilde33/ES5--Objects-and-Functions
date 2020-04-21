/////////////////////////////
// Lecture: Function constructor

var Person = function (name, yearOfBirth, job) {
   this.name = name;
   this.yearOfBirth = yearOfBirth;
   this.job = job;
   // this.calculateAge = function () {
   //    console.log(2020 - this.yearOfBirth);
   // }
}

Person.prototype.calculateAge = function () {
   console.log(2020 - this.yearOfBirth);
}

var john = new Person('John', 1990, 'teacher');
var mary = new Person('Mary', 1980, 'preacher');
var diane = new Person('Diane', 1970, 'moocher');

john.calculateAge();
mary.calculateAge();
diane.calculateAge();

console.log(john, mary, diane);

var Horse = function (name, carrotsEaten, personality) {
   this.name = name;
   this.carrotsEaten = carrotsEaten;
   this.personality = personality;
}

Horse.prototype.carrotsAvailable = function () {
   console.log(21 - this.carrotsEaten);
}

var ned = new Horse('Ned', 10, 'gregarious')
var zed = new Horse('Zed', 12, 'gregarious')
var sweetie = new Horse('Sweetie', 15, 'gregarious')

console.log(ned, zed, sweetie);

ned.carrotsAvailable();
zed.carrotsAvailable();
sweetie.carrotsAvailable();