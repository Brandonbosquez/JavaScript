 "use strict";
let rolls = +prompt("How many times shall the dice be rolled?");
  let sum = 0
  for ( i = 1  ; i <= rolls ; i ++){
    document.write("Roll #"+i+"<br>");
    let dice = Math.floor(Math.random() * 6) + 1;
    document.write("Roll value: "+dice+"<br>");
    sum += dice ;
  }
  document.write("The sum of all rolls is: " + sum);