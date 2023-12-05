// //tsc src/laba-2.ts
// //node src/laba-2.js
// //метод, возврашающий минимальное число в в массиве вещественныых чисел
// console.log("\nnumber 1")
// let arr1: Array<number> = new Array(5);
// for (let i = 0; i < 5; i++) {
//   arr1[i] = Math.random();
// }
// console.log(arr1);
// function get_min(arr: Array<Number>): Number {
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) 
//       min = arr[i];
//   }
//   return min;
// }
// console.log(get_min(arr1));
// console.log("\nnumber 2")
// let arr2: Array<Array<number>> = [
//   [0, 4, 5],
//   [1, 0, 8],
//   [2, 90, 0],
// ];
// function count_null(arr: Array<Array<number>>): Number {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] == 0) 
//         count++;
//     }
//   }
//   return count;
// }
// console.log(count_null(arr2));
// console.log("\nnumber 3")
// const get_new_string = (str1: string, str2: string, str3: string) => {
//   return str1 + str2 + str3;
// };
// let tuple: [string, string, string] = ["mama ", "mylya ", "ramy"];
// console.log(get_new_string(tuple[0], tuple[1], tuple[2]));
// console.log("\nnumber 4")
// enum Printer {
//   lazer = "HP-Lazer Pro",
//   jet = "HP SmartTank 515",
//   matrix = "Epson LX-350",
//   sublimation = "Canon Shelphy CP1000"
// }
// console.log(Printer.jet)
// console.log("\nnumber 5")
// class Pet {
//   name: string = "Some pet";
//   age: number = -1;
//   speak() {
//     return "No speak. I am fish!";
//   }
//   Print_Pet(){
//     console.log('\n' + this.age)
//     console.log(this.name)
//     console.log(this.speak())
// }
// }
// class Dog extends Pet {
//   name = "AngryHunter";
//   age = 8;
//   speak() {
//     return "Yaw-Gaw!";
//   }
// }
// class Cat extends Pet {
//   name = "Barsik";
//   age = 2;
//   speak() {
//     return "Miyau!";
//   }
// }
// let cat = new Cat;
// cat.Print_Pet();
// let pet = new Pet;
// pet.Print_Pet();
// let dog = new Dog;
// dog.Print_Pet();
// console.log("\nnumber 6")
// interface Prtinter_Shop{
//   name: string;
//   conut_of_printers: Number;
//   address: string;
//   type: string;
// }
// let printer: Prtinter_Shop = {
//   name: "Printer-maniya",
//   conut_of_printers: 1000,
//   address: "Novo-Voksalnaya Street 10",
//   type: Printer.lazer
// }
// const json_data: string = JSON.stringify(printer);
// console.log(json_data);
