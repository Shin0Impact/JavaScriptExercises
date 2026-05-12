for (let i = 2; i <= 50; i++) {
    for (let j = i; j > 0; j--) {
        if (i % j === 0 && j !== 1 && j !== i) {// if it divides by any number other than 1 and itself it's not prime
            break;
        } else if (j === 1) {
            console.log(i);
        }
    }
}