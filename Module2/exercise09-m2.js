'use strict';
const numbers = [1,2,3,4,5,6,7,8,9,10]

function even(numbers){
    const evenNumbers = []
    for (let number of numbers){
        if (number % 2 == 0){
            evenNumbers.push(number)
        }
    }
    return evenNumbers;
}


let evenNumbers = even(numbers);
document.querySelector("#text-area").innerHTML = "<p>" + numbers + "</p>";
document.querySelector("#text-area2").innerHTML = "<p>" +  evenNumbers + "</p>";
