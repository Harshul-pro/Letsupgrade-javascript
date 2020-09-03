//Q1 - Program to search for a particular character in a string.

let subject = "javascript";
let index =subject.indexOf("i");
console.log(index);

let sub=subject.substr(0,4);
console.log(sub)

//Q2 - Program to convret minutes to seconds

let i = prompt("Minutes")
console.log("seconds:",i*60);

//Q3 - Program to serach for a elemenet in a array of strings

let course = ["html", "css", "javascript", "bootstrap", "angular", "python"]
let data = course.indexOf("javascript");
console.log(data);

//Q4 - Program to display only elements containing 'a' in them from array

function contains(arr,  element) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === element) {
            return true;
        }
    }
    return false;
}
arr= ["laptop", "bag", "school", "books", "grammer"];
console.log(contains(arr,"a"));


//Q5 - Print an array in reverse order
let fruits = ["Banana", "Apple", "Mango", "Pinapple", "Litchi"];
let fruit = fruits.reverse();
console.log(fruit);