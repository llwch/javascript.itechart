var heroes = ["Iron Man", "Deadpool", "Hulk", "Doctor Strange"];
console.log(heroes);
var heroid = heroes.indexOf('Hulk');
heroes.splice (heroid,1);
console.log(heroes);
document.write(heroes);