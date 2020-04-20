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