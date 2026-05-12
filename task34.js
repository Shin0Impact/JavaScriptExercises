function factorial(n){
    if (n === 0 || n === 1) {
        return 1;
    } else {
       for (let i = n - 1; i > 0; i--) {
            n *= i;
        }
        return n;
    }
}

console.log(`factorial(0)= ${factorial(0)}`);//1
console.log(`factorial(5)= ${factorial(5)}`);//120
console.log(`factorial(7)= ${factorial(7)}`);//5040