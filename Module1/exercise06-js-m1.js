  const answer = confirm('Should I calculate the square root?');
  if (answer === true) {
    let number = +prompt("What number you want the square root of?");
    if (number < 0) {
      document.write("The square root of a negative number is not defined.");
    }
    else {
      document.write("The square root is: " + Math.sqrt(number) );
    }

  }
  else {
    document.write("The square root is not calculated.");
  }