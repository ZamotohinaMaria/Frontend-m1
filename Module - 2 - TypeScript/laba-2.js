//tsc src/laba-1.ts
//node src/laba-1.js
//метод, возврашающий минимальное число в в массиве вещественныых чисел
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("\nnumber 1");
var arr1 = new Array(5);
for (var i = 0; i < 5; i++) {
    arr1[i] = Math.random();
}
console.log(arr1);
function get_min(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min)
            min = arr[i];
    }
    return min;
}
console.log(get_min(arr1));
console.log("\nnumber 2");
var arr2 = [
    [0, 4, 5],
    [1, 0, 8],
    [2, 90, 0],
];
function count_null(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == 0)
                count++;
        }
    }
    return count;
}
console.log(count_null(arr2));
console.log("\nnumber 3");
var get_new_string = function (str1, str2, str3) {
    return str1 + str2 + str3;
};
var tuple = ["mama ", "mylya ", "ramy"];
console.log(get_new_string(tuple[0], tuple[1], tuple[2]));
console.log("\nnumber 4");
var Printer;
(function (Printer) {
    Printer["lazer"] = "HP-Lazer Pro";
    Printer["jet"] = "HP SmartTank 515";
    Printer["matrix"] = "Epson LX-350";
    Printer["sublimation"] = "Canon Shelphy CP1000";
})(Printer || (Printer = {}));
console.log(Printer.jet);
console.log("\nnumber 5");
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = "Some pet";
        this.age = -1;
    }
    Pet.prototype.speak = function () {
        return "No speak. I am fish!";
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "AngryHunter";
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return "Yaw-Gaw!";
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Barsik";
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return "Miyau!";
    };
    return Cat;
}(Pet));
function Print_Pet(pet) {
    console.log('\n' + pet.age);
    console.log(pet.name);
    console.log(pet.speak());
}
var cat = new Cat;
Print_Pet(cat);
var pet = new Pet;
Print_Pet(pet);
var dog = new Dog;
Print_Pet(dog);
console.log("\nnumber 6");
var printer = {
    name: "Printer-maniya",
    conut_of_printers: 1000,
    address: "Novo-Voksalnaya Street 10",
    type: Printer.lazer
};
var json_data = JSON.stringify(printer);
console.log(json_data);
