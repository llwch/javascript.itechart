var salaries = {"Vasya": 4500, "Masha": 2000, "Olyaksandr": 2700};
var maxsalary = 0;
var nameWithMaxSalary = null;
for (var name in salaries) {
    if (maxsalary < salaries[name]) {
        maxsalary = salaries[name];
        nameWithMaxSalary = name;
    }
  }
console.log (nameWithMaxSalary || "нет сотрудников" );
document.write (nameWithMaxSalary || "нет сотрудников" );