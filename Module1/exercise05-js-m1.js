let year = +prompt("Welcome to the Leap Year tester \nWhat year do you wish to test?")
  if (year % 4 == 0) {
      if (year % 100 == 0) {
          if (year % 400 == 0) {
              document.write("The year IS a leap year");
          }
          else {
              document.write("The year IS NOT a leap year");
              }
      }
      else {
         document.write("The year IS a leap year");
      }
  }
  else {
       document.write("The year IS NOT a leap year");
  }