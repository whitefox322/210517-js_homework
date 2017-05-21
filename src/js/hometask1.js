/**Переписати програму зі створення обєктів машин
 (5 машин, model, brand, engineDisplacement)
 на використання класів (функцій-конструкторів)**/

function Car (firm, model, eg) {
    this["Firm Name"] = firm;
    this["Model Name"] = model;
    this["Engine Displacement"] = eg;
}

Car.prototype.print = function () {
    console.log(this["Firm Name"] + " " +  this["Model Name"] + ": " + this["Engine Displacement"]);
};

var arr = [];

for (var counter = 1; counter <= 5; counter++) {
    var firstValue = prompt("Enter firm name of the " + counter + " car:");
    var secondValue = prompt("Enter model name of the " + counter + " car:");
    var thirdValue = parseFloat(prompt("Enter engine displacement of the " + counter + " car:"));

    var car = new Car(firstValue, secondValue, thirdValue);

    arr.push(car);
}

for (var count = 0; count < 5; count++) {
    if (arr[count]["Engine Displacement"] > 2.0) {
        arr[count].print();
    }
}