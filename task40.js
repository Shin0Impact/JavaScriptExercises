let n;
let step = 0;
function collatz(n){
    console.log(`collatz(${n}):`);
    console.log(`${n}`);
    while (n !== 1) {
    if (n % 2 === 0) {
        n = n / 2;
        step++;
    } else {
        n = 3 * n + 1;
        step++;
    }
    console.log(`${n}`);
}
    console.log(`— ${step} steps`);
}

collatz(6);