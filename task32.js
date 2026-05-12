function maxOfThree(a, b, c){
    return(a >= b && a >= c) ? a : (b >= c ? b : c);
}

console.log(maxOfThree(3, 17, 9));//17