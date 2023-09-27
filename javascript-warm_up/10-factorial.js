#!/usr/bin/node

function factorial (n) {
    if(isNaN(n)) {
        return 1;
    }
    else if (n == 0) {
        return 1;
    }
    else {
        return n * factorial(n
    }
}

const num = parseInt(process.a
const result = factorial(num);

console.log(result);
