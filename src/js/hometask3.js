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

function Point(x, y, otherPointX, otherPointY) {
    this.add = function () {
        return "Point {" + (x + otherPointX) + ", " + (y + otherPointY) + "}";
};
    this.subtract = function () {
        return "Point (" + (x - otherPointX) + ", " + (y - otherPointY) + ")";
    };
    this.getX = function () {
        return x;
    };
    this.getY = function () {
        return y;
    };
    this.equals = function () {
        return (x === otherPointX && y === otherPointY);
    };
    this.toString = function () {
        return "Point {x=" + x + ", y=" + y + "}";
    };
    this.valueOf = function () {
        return (x + otherPointX) + (y + otherPointY);
    }
}
var firstPoint = parseInt(prompt("Enter x-value of the first point:"));
var secondPoint = parseInt(prompt("Enter y-value of the first point:"));
var firstPoint2 = parseInt(prompt("Enter x-value of the second point:"));
var secondPoint2 = parseInt(prompt("Enter y-value of the second point:"));

var generalPoint = new Point(firstPoint, secondPoint, firstPoint2, secondPoint2);
console.log(generalPoint.add());
console.log(generalPoint.subtract());
console.log(generalPoint.getX());
console.log(generalPoint.getY());
console.log(generalPoint.equals());
console.log(generalPoint.toString());
console.log(generalPoint.valueOf());
