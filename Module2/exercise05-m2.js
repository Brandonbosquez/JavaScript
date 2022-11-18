'use strict';
let numList = [];
let i = 0;
let n = +prompt('Give me a number, repeat a number to stop');
do {
    numList[i] = n;
    n = +prompt('Give me a number, repeat a number to stop');
    i++;
}
while (numList.includes(n) == false);
window.alert("WOO! That number was already given. Check the console for all the numbers given arranged in ascending order")
numList.sort((a, b) => a - b);
for(let number of numList){
    console.log(number);
}

