   'use strict';
let yearA = +prompt("Test a period of years! \nDefine Starting Year: ");
let yearB = +prompt("Test a period of years! \nDefine Ending Year: ");
let testyear = yearA ;
document.write('<ul>');
while (testyear <= yearB) {
    if (testyear % 4 == 0) {
        if (testyear % 100 == 0) {
            if (testyear % 400 == 0) {
                document.write(`<li> ${testyear} is a leap year </li>`);
            }
            else {

            }
        }
        else {
            document.write(`<li> ${testyear} is a leap year </li>`);
        }
    }
    else {
    }
    testyear++;
}
document.write('</ul>');