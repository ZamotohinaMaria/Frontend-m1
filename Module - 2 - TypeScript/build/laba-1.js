// номер в списке - 8; вариант - 2
//Реализуйте стрелочную функцию, возвращающую  
//строку, составленную из 3х строк (см. конкатенация), передаваемых 
//в качестве параметров.
const get_new_string = (str1, str2, str3) => { return str1 + str2 + str3; };
const new_string = get_new_string("Hello", ",", "wolrd!");
console.log(new_string);
const var1 = false;
const var2 = -12;
const var3 = [1, 3, 4];
const var4 = {
    id: 1
};
let var5 = {
    id: 5,
    e1: "one",
    e2: "two"
};
let var6 = true;
let var7 = 456;
let var8 = "4566";
const data = {
    id: 2,
    e1: "Поле 1",
    e2: "Поле 2",
};
const json_data = JSON.stringify(data);
console.log(json_data);
export {};
//# sourceMappingURL=laba-1.js.map