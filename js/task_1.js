// Задание 1
var salaries = {
    "Vasya": 4500,
    "Masha": 2000,
    "Olyaksandr": 2700
};
var maxSalary = 0;
var nameWithMaxSalary = null;
for (var name in salaries) {
    if (maxSalary < salaries[name]) {
        maxSalary = salaries[name];
        nameWithMaxSalary = name;
    }
}
console.log(nameWithMaxSalary || "нет сотрудников");
document.write(nameWithMaxSalary || "нет сотрудников");