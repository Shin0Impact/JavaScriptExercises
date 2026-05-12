function countVowels(str){
    let count = 0;
    for (let char of str.toLowerCase()) {
        if ('aeiou'.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Hello World"));//3