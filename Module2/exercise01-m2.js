'use strict';
const numbers = []
for (let i = 0; i < 5; i++){
    numbers[i] = +prompt(`Give me number ${i+1}`);
}
document.querySelector('#text').innerHTML = numbers ;
for (let i = 4; i >= 0; i--){
    console.log(numbers[i]);
}