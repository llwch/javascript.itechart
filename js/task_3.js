// Задание 3
var heroes = ["Iron Man", "Deadpool", "Hulk", "Doctor Strange"];
console.log(heroes);
var heroId = heroes.indexOf('Hulk');
heroes.splice(heroId, 1);
console.log(heroes);
document.write(heroes);