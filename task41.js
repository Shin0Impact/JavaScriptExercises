function numberToWord(n){
    const words = [
        "", "one", "two", "three", "four", "five",
        "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen",
        "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"
    ];
    if (n >= 1 && n <= 20) {
        return words[n];
    } else {
        return "out of range";
    }
}

console.log(numberToWord(7));//seven
console.log(numberToWord(15));//fifteen
console.log(numberToWord(25));//out of range