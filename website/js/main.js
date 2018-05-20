var mercedesModels = ["Mercedes 190", "Mercedes A-class", "Mercedes CLA", "Mercedes SLK", "Mercedes E-class", "Mercedes S-class"];
var toyotaModels = ["Avensis", "Camry", "Corolla", "Highlander", "Land Cruiser", "RAV 4"];
var ladaModels = ["XRAY", "Vesta VEDRO", "Kalina", "Vesta Cross", "Granta", "Priora"];

//switch dropdown 2
function showModels(manufacturer) {
    var selectManufacturer = document.getElementById('model_list');
    var ln = selectManufacturer.length - 1;
    while (ln > 0) {
        selectManufacturer.remove(1);
        ln--;
    }

    var modelArray;

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
        selectManufacturer.add(option);
    }
}
// global
var tableLoc = document.getElementById("tableLocation");

//gen report
function genReport() {
    var manuValue = document.getElementById("manu_list").value;
    var modelValue = document.getElementById("model_list").value;
    document.getElementById('tableLocation').innerHTML='';

    if (manuValue === ''){
        tableLoc.appendChild(document.createTextNode('Manufacturer is not selected !!!1111'));
        tableLoc.className = 'errors';
    }else{
            createTable(manuValue, modelValue, modelStatus());
        
    }
}
//create status
function modelStatus(currentModel) {
    var modelValue = document.getElementById("model_list").value;
    if (modelValue === '') {
        //placeholder for now
        tableLoc.appendChild(document.createTextNode('Model is not selected. Select it!'));
        tableLoc.className = 'errors';
    }else{
        for (var i = 0; i < modelValue.length; a++) {
            var modelNameL = modelValue.length % 2;
          
            if (modelNameL === 0) {
                var modelStatus = 'Not Available';
            }else{
                var modelStatus = 'Available';
           }
    return modelStatus;
       }
    }
}
// create table
function createTable(list, models, status) {
    
    var table = document.createElement('table');
    var tr = document.createElement('tr');
    var th = document.createElement('th');
    th.colSpan = "2";
    //manufacturer
    table.appendChild(tr);
    tr.appendChild(th);
    th.appendChild(document.createTextNode(list));
    tableLoc.appendChild(table);
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