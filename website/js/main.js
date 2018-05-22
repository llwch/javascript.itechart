var mercedesModels = ["Mercedes 190", "Mercedes A-class", "Mercedes CLA", "Mercedes SLK", "Mercedes E-class", "Mercedes S-class"];
var toyotaModels = ["Avensis", "Camry", "Corolla", "Highlander", "Land Cruiser", "RAV 4"];
var ladaModels = ["XRAY", "Vesta VEDRO", "Kalina", "Vesta Cross", "Granta", "Priora"];
var modelArray;

//switch dropdown 2
function showModels(manufacturer) {
    var selectModel = document.getElementById('model_list');
    var ln = selectModel.length - 1;
    while (ln > 0) {
        selectModel.remove(1);
        ln--;
    }

    switch (manufacturer) {
        case "Mercedes":
            modelArray = mercedesModels;
            break;
        case "Toyota":
            modelArray = toyotaModels;
            break;
        case "Lada":
            modelArray = ladaModels;
            break;
        default:
    }

    for (i = 0; i < modelArray.length; i++) {
        var option = document.createElement('option');
        option.text = modelArray[i];
        option.value = modelArray[i];
        selectModel.add(option);
    }
}
// global
var tableLoc = document.getElementById("tableLocation");

//gen report
function genReport() {
    tableLoc.innerHTML = "";
    var manuValue = document.getElementById("manu_list").value;
    var modelValue = document.getElementById("model_list").value;

    if (manuValue === '') {
        tableLoc.appendChild(document.createTextNode('ERROR: Manufacturer is not selected !'));
        tableLoc.className = 'errors';
    } else {
        if (modelValue === '') {
            //show all models if modellist is empty
            allModels = modelArray.sort();
            createHeader(manuValue);
            for (i = 0; i < allModels.length; i++) {
                createRows(allModels[i], modelStatus(allModels[i]));
            }
            //tableLoc.appendChild(document.createTextNode('Model is not selected. Select it!'));
            //tableLoc.className = 'errors';
        } else {
            createHeader(manuValue);
            createRows(modelValue, modelStatus(modelValue));
        }
    }
}
// create table
function createHeader(list) {
    //manufacturer
    var table = document.createElement('table');
    table.id = "mainTable";
    var tr = document.createElement('tr');
    var th = document.createElement('th');
    th.colSpan = "2";
    table.appendChild(tr);
    tr.appendChild(th);
    th.appendChild(document.createTextNode(list));
    tableLoc.appendChild(table);
}
//create rows with model and status
function createRows(models, status) {

    var table = document.getElementById('mainTable');
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
    td.className = status === 'Available' ? 'green' : 'red';
}
//create status
function modelStatus(currentModel) {
    var modelValue = document.getElementById("model_list").value;
    var modelNameL = currentModel.length % 2;

    if (modelNameL === 0) {
        var modelAvailable = 'Not Available';
    } else {
        var modelAvailable = 'Available';
    }
    return modelAvailable;
}