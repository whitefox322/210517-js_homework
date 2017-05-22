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
        this.copiedArray = this.array.slice();
        return this.copiedArray;
};

ArrayWrapper.prototype.initializeFrom = function (sourceArray) {
        return sourceArray;
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

console.log(arr.generateRandom(7));
console.log(arr.convertToString(" "));
console.log(arr.getCount());
console.log(arr.getSourceArray());
console.log(arr.initializeFrom(arr.copiedArray));
console.log(arr.remove(2));
console.log(arr.add(23));
console.log(arr.contains(12));
console.log(arr.indexOf(23));
console.log(arr.getAllOccurences(23));