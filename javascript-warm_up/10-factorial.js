#!/usr/bin/node

unction factorial (n) {
 return n === 0 || isNaN(n) ? 1 : n * factorial(n - 1);
}
onsole.log(factorial(Number(process.argv[2])));
