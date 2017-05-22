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

function ArrayWrapper(x) {
    this.array = x;
}

ArrayWrapper.prototype.generateRandom = function (itemsAmount) {
    for (var count = 0; count < itemsAmount; count++) {
        this.array.push(parseInt(Math.random() * 100 - 1));
        }
    return this.array;
};

ArrayWrapper.prototype.convertToString = function (delimeter) {
        return this.array.join(delimeter);
};

ArrayWrapper.prototype.getCount = function () {
        return this.array.length;
};

ArrayWrapper.prototype.getSourceArray = function () {
        return this.array.slice();
};

ArrayWrapper.prototype.initializeFrom = function (sourceArray) {
        return sourceArray.array;
};

ArrayWrapper.prototype.remove = function (index) {
        return this.array.splice(index, 1);
};

ArrayWrapper.prototype.add = function (item) {
        this.array.splice(0, 0, item);
        return this.array;
};

ArrayWrapper.prototype.contains = function (target) {
        return this.array.indexOf(target) !== -1;
};

ArrayWrapper.prototype.indexOf = function (item) {
        return this.array.indexOf(item);
};

ArrayWrapper.prototype.getAllOccurences = function (item) {
        var newArray = [];
        for(var count = 0; count < this.array.length; count++) {
            newArray.push(this.array.indexOf(item));
        }
        return newArray;
};

var arr = new ArrayWrapper([]);

arr.generateRandom(parseInt(prompt("Enter length of array:")));
arr.convertToString(prompt("Enter delimeter for elements:"));
arr.initializeFrom(new ArrayWrapper([]));
arr.remove(prompt("Enter index of element to remove:"));
arr.add(prompt("Enter new item of array:"));
arr.contains(prompt("Enter element to find:"));

console.log(arr.generateRandom());
console.log(arr.convertToString());
console.log(arr.getCount());
console.log(arr.getSourceArray());
console.log(arr.initializeFrom());
console.log(arr.remove());
console.log(arr.add());
console.log(arr.contains());
console.log(arr.indexOf());
console.log(arr.getAllOccurences());