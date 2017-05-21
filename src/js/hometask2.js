/**Написати клас ArrayWrapper.
 Це клас, який в конструктор приймає масив і надає наступні методи роботи з цим масивом:
 - generateRandom(itemsAmount) - генерує масив з випадкових чисел вказаної довжини
 - convertToString(delimeter) - обєднує всі елементи в строку розділені вказаним роздільником
 - getCount() - повертає кількість елементів
 - getSourceArray() - повертає копію масиву на базі якого він створений
 - initializeFrom(sourceArray) - ініціалізується з переданого масиву
 - remove(index) - видаляє елемент по індексу
 - add(item) - додає новий елемент
 - contains(target) - перевіряє чи такий елемент є
 - indexOf(item) - повертає індекс переданого елемента
 - getAllOccurences(item) - повертає масив індексів, під якими зустрічається переданий елемент**/

var arr = [];

function ArrayWrapper(itemsAmount, delimeter, sourceArray, index, item, target) {
    this.generateRandom = function () {
        for (var count = 0; count < itemsAmount; count++) {
            arr.push(parseInt(Math.random() * 100 - 1));
        }
        return arr;
    };
    this.convertToString = function () {
        return arr.join(delimeter);
    };
    this.getCount = function () {
        return arr.length;
    };
    this.getSourceArray = function () {
        return arr.slice();
    };
    this.initializeFrom = function () {
        return sourceArray;
    };
    this.remove = function () {
        return sourceArray.splice(index, 1);
    };
    this.add = function () {
        sourceArray.splice(sourceArray.length, 0, item);
        return sourceArray;
    };
    this.contains = function () {
        return sourceArray.indexOf(target) !== -1;
    };
    this.indexOf = function () {
        return sourceArray.indexOf(item);
    };
    this.getAllOccurences = function () {
        var newArray = [];
        for(var count = 0; count < itemsAmount; count++) {
            newArray.push(sourceArray.indexOf(item));
        }
        return newArray;
    }
}
var random = parseInt(prompt("Enter length of array:"));
var delim = prompt("Enter delimeter for elements:");
var id = prompt("Enter index of element to remove:");
var newItem = prompt("Enter new item of array:");
var findIt = prompt("Enter element to find:");

var array = new ArrayWrapper(random, delim, arr, id, newItem, findIt);
console.log(array.generateRandom());
console.log(array.convertToString());
console.log(array.getCount());
console.log(array.getSourceArray());
console.log(array.initializeFrom());
console.log(array.remove());
console.log(array.add());
console.log(array.contains());
console.log(array.indexOf());
console.log(array.getAllOccurences());