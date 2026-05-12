function isEven(n){
    return n % 2 === 0;
}

function isOdd(n){
    return !isEven(n);
}

console.log(`isEven(4) -> ${isEven(4)}`);//true
console.log(`isOdd(7) -> ${isOdd(7)}`);//true
console.log(`isEven(3) -> ${isEven(3)}`);//false