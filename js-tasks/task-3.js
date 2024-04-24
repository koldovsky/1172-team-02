// Find the smallest integer in the array https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}

// Geometry Basics: Circle Circumference in 2D https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

const calculateCircleCircumference = (circle) => 2 * Math.PI * circle.radius;

// loop statement --for..in and for..of https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

function giveMeFive(obj) {
    const five = [];
    for (const key in obj) {
        if (key.length == 5) five.push(key);
        if (obj[key].length == 5) five.push(obj[key]);
    }
    return five;
}

// Understanding closures - the basics https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript

function buildFun(n) {

    let res = []

    for (let i = 0; i < n; i++) {
        (function (number) {
            res.push(function () {
                return number;
            })
        })(i)
    }
    return res
}

// Animals and Inheritance https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, 0, "shark", status);
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, 4, "cat", status);
    }
    introduce() {
        return super.introduce() + "  Meow meow!";
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, 4, "dog", status);
        this.master = master;
    }
    greetMaster() {
        return `Hello ${this.master}`;
    }
}