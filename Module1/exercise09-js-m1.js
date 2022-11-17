/* exercise09-js-m1 */
let into = +prompt('What number do you wish to test? ');
if (into > 2) {
    for (let i = 2; i < into; i++) {
        if (into % i == 0) {
            document.write(`${into} IS NOT A PRIME NUMBER :C`);
            break;
        }
        else if (i == (into - 1)) {
            document.write(`OF COURSE ${into} IS A PRIME NUMBER :D`);
        }
    }

}
else {
    document.write(`OF COURSE ${into} IS A PRIME NUMBER :D`);
}