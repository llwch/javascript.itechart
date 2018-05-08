// Задание 2
var user1 = {name: "Vasya", age: 25},
user2 = {name: "Masha", age: 18 },
user3 = {name: "Olyaksandr", age: 56 }; 
var userArray = [user1,user2,user3];
console.log(userArray.sort(function (a, b){return a.age - b.age}));