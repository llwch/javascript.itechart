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
        case "mercedes":
            modelArray = mercedesModels
            break;
        case "toyota":
            modelArray = toyotaModels
            break;
        case "lada":
            modelArray = ladaModels
            break;
        default:
    }

    for (i = 0; i < modelArray.length; i++) {
        var option = document.createElement('option');
        option.text = modelArray[i];
        option.value = modelArray[i];
        selectManufacturer.add(option);
    }
}
// global
var manuValue = document.getElementById("manu_list").value;
var modelValue = document.getElementById("model_list").value;
var tableLoc = document.getElementById("tableLocation");

//gen report
function genReport() {
    createTable(manuValue);
} 

// create table
function createTable(list) {
    
    var table = document.createElement('table');
    var tr = document.createElement('tr');
    var th = document.createElement('th');
    th.colSpan = "2";

    tableLoc.appendChild(table);
    table.appendChild(tr);
    tr.appendChild(th);
    th.appendChild(document.createTextNode(list));
}