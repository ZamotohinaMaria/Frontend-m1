// номер в списке - 8; вариант - 2
//Реализуйте стрелочную функцию, возвращающую  
//строку, составленную из 3х строк (см. конкатенация), передаваемых 
//в качестве параметров.

const get_new_string = (str1: string, str2: string, str3: string) => str1 + str2 + str3
const new_string = get_new_string("Hello", ",", "wolrd!")
console.log(new_string
    )