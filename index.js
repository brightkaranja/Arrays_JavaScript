let arr1 = [3, 7, 34, 90, 12];
let lastElement = arr1[arr1.length-1];
console.log(lastElement);

let arr2 = [true, "green", "where", 12, 56];
let lastElement2 = arr2[arr2.length-1];
console.log(lastElement2)


let myPets = ["cow", "Bird", "Snake", "Dog"];
let petsString = myPets.join(", ");
console.log(petsString);


let arr3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
arr3.sort((a, b) => a-b);
console.log(arr3);

let arr = ["boy", "man", "girl", "school", "girl", "woman"];
let uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(uniqueArr);
let duplicateArr = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log(duplicateArr)


let arr5 = ["the", "way", "x", 4];
let searchWord = "food";

if (arr5.indexOf(searchWord) !== -1){
    console.log(searchWord);
} else {
    console.log("the search word was not found");
}

let word = "renniw";
let sortedWord = word.split("").sort().join("");
console.log(sortedWord)

let fruits = ["apple", "banana", "orange", "grape", "kiwi", "mango", "strawberry", "blueberry", "pineapple", "watermelon"];

if(fruits.length >= 5){
    fruits.splice(4, 0, "Tomato");
    console.log(fruits);
}else {
    console.log("Array too short to insert at index 5");
}