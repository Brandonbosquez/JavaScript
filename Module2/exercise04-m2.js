'use strict';
let numberList = [];
let i = 0;
while(numberList[i-1] != 0){
    numberList[i] = +prompt("Give me a number, to stop the program insert 0");
    i++;
}
numberList.sort(function(a, b){return b - a });
for(let number of numberList){
    console.log(number);
}


