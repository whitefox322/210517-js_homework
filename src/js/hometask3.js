/**Написати клас Point, яка приймає в конструктор дві точки - "х" та "у".
 Цей клас повинен мати наступні методи:
 - add(otherPoint) - додає координати другої точки і повертає нову точку
 (наприклад, var a=  new Point(10, 10); var b = new Point(5, 5),
 то результатом виклику a.add(b) буде Point(15, 15))
 - subtract(otherPoint) - аналогічно до add, але робить віднімання
 - getX() - повертає X
 - getY() - повертає Y
 - equals(otherPoint) - повертає true, якщо дві точки мають одинакові координати
 (var a = new Point(10, 10); var b = new Point(10, 10) -> a.equals(b) === true)
 - toString() -> Point{x=10, y=10} - переопреділяє метод так, щоб вивід був, як в прикладі
 - valueOf - повертає суму двох точок**/

function Point(x, y) {
    this.firstPoint = x;
    this.secondPoint = y;
}

Point.prototype.add = function(otherPoint) {
    var
        x = this.firstPoint + otherPoint.firstPoint,
        y = this.secondPoint + otherPoint.secondPoint;
    return new Point(x, y);
};

Point.prototype.subtract = function(otherPoint) {
    var
        x = this.firstPoint - otherPoint.firstPoint,
        y = this.secondPoint - otherPoint.secondPoint;
    return new Point(x, y);
};

Point.prototype.getX = function() {
    return this.firstPoint;
};

Point.prototype.getY = function() {
    return this.secondPoint;
};

Point.prototype.equals = function(otherPoint) {
    return (this.firstPoint === otherPoint.firstPoint && this.secondPoint === otherPoint.secondPoint);
};

Point.prototype.toString = function() {
    return "Point {x=" + this.firstPoint + ", y=" + this.secondPoint + "}";
};

Point.prototype.valueOf = function() {
    return this.firstPoint + this.secondPoint;
};

var generalPoint = new Point(10, 10);
var secondPoint = new Point(6, 6);

console.log(generalPoint.add(secondPoint));
console.log(generalPoint.subtract(secondPoint));
console.log(generalPoint.getX());
console.log(generalPoint.getY());
console.log(generalPoint.equals(secondPoint));
console.log(generalPoint.toString());
console.log(generalPoint.valueOf());
