// Your code here
class Polygon {
    constructor(arrayOfSideValues) {
        this.sides = arrayOfSideValues
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((a, b) => a + b)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.sides[0] + this.sides[1] <= this.sides[2] || this.sides[0] + this.sides[2] <= this.sides[1] || this.sides[1] + this.sides[2] <= this.sides[0]) {
            return false;
        }
        else {
            return true;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2] && this.sides[0] === this.sides[3]) {
            return true
        } else {
            return false
        }
    }

    get area() {
        return Math.pow(this.sides[0], 2)
    }
}