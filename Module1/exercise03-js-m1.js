  let num1 = +prompt("Value for Integer 1: ");
  let num2 = +prompt("Value for Integer 2: ");
  let num3 = +prompt("Value for Integer 3: ");
  let sum = num1 + num2 + num3;
  let product = num1*num2*num3;
  let average = (num1*num2*num3)/3
  document.querySelector('#sum').innerHTML = "The sum of the three integers is: " + sum ;
  document.querySelector('#product').innerHTML = "The product of the three integers is: " + product ;
  document.querySelector('#average').innerHTML = "The average of the three integers is: " + average ;