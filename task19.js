let n = 15;

if (n % 3 === 0 && n % 5 === 0) {
    console.log(`FizzBuzz (for n = ${n})`);
} else if (n % 3 === 0) {
    console.log(`Fizz (for n = ${n})`);
} else if (n % 5 === 0) {
    console.log(`Buzz (for n = ${n})`);
} else {
    console.log(`n = ${n}`);
}