function isPalindrome(str){
    let Str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // i never used replace before and it was hard to undertand the syntax ai helped :p
    return Str === Str.split('').reverse().join('');
}

console.log(isPalindrome("racecar"));//true
console.log(isPalindrome("hello"));//false 
console.log(isPalindrome("Never odd or even"));//true