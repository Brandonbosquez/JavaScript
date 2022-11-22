'use strict';
let name = ["Brandon","Joel","Bósquez","Gonzal"];

function concat(array){
    let concatenation = "";
    for (let name of array){
        concatenation = concatenation + name;
    }
    return concatenation
}

document.querySelector("#text-area").innerHTML = concat(name);
