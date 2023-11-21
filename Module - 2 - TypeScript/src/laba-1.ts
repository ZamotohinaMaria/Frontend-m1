// номер в списке - 8; вариант - 2
//Реализуйте стрелочную функцию, возвращающую  
//строку, составленную из 3х строк (см. конкатенация), передаваемых 
//в качестве параметров.

//import {analytics} from 'modules/analytisc.ts'

interface Entity {
    id: number;
   }

interface ToJsonStringify extends 
Entity {
e1: string;
e2: string;
}

const get_new_string = (str1: string, str2: string, str3?: string) => { return str1 + str2 + str3};
const new_string = get_new_string("Hello", ",", "wolrd!");
console.log(new_string);

const var1: boolean = false;
const var2: number = -12;
const var3: Array<Number> = [1, 3, 4];
const var4: Entity = {
    id: 1
};

let var5: ToJsonStringify = {
    id: 5,
    e1: "one",
    e2: "two"
};

let var6: boolean = true;

let var7: Number = 456;
let var8: string = "4566";

const data: ToJsonStringify = {
    id: 2,
    e1: "Поле 1",
    e2: "Поле 2",
}

const json_data: string = JSON.stringify(data);
console.log(json_data)
   



