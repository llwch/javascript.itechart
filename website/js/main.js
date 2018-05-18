var mercedesModels = ["Mercedes 190", "Mercedes A-class", "Mercedes CLA", "Mercedes SLK", "Mercedes E-class", "Mercedes S-class"];
var toyotaModels = ["Avensis", "Camry", "Corolla", "Highlander", "Land Cruiser", "RAV 4"];
var ladaModels = ["XRAY", "Vesta VEDRO", "Kalina", "Vesta Cross", "Granta", "Priora"];

//switch dropdown 2
function showManu(manufacturer) {
    var selectManufacturer = document.getElementById('model_list');
    var ln = selectManufacturer.length - 1;
    while (ln > 0) {
        selectManufacturer.remove(1);
        ln--;
    }

    var modelArray;

    switch (manufacturer) {
        case "Mercedes":
            modelArray = mercedesModels
            break;
        case "Toyota":
            modelArray = toyotaModels
            break;
        case "Lada":
            modelArray = ladaModels
            break;
        default:
    }
    var sortModels = modelArray.sort();

    for (i = 0; i < modelArray.length; i++) {
        var option = document.createElement('option');
        option.text = modelArray[i];
        option.value = modelArray[i];
        selectManufacturer.add(option);
    }
}
// global
var tableLoc = document.getElementById("tableLocation");

//gen report
function genReport() {
    tableLoc.innerHTML = "";
    var manuValue = document.getElementById("manu_list").value;
    var modelValue = document.getElementById("model_list").value;
    createTable(manuValue,modelValue,'Whut?');
} 

// create table
function createTable(list,models,status) {
    
    var table = document.createElement('table');
    var tr = document.createElement('tr');
    var th = document.createElement('th');
    th.colSpan = "2";
    //manufacturer
    tableLoc.appendChild(table);
    table.appendChild(tr);
    tr.appendChild(th);
    th.appendChild(document.createTextNode(list));
    //model
    tr = document.createElement('tr');
    table.append(tr);
    td = document.createElement('td');
    tr.appendChild(td);
    td.appendChild(document.createTextNode(models));
    //status
    td = document.createElement('td');
    tr.appendChild(td);
    td.appendChild(document.createTextNode(status));
}