function calculate(a, operator, b){
    switch (operator) {
    case '+':
        console.log(a+b);
        break;
    case '-':
        console.log(a-b);
        break;
    case '*':
        console.log(a*b);
        break;
    case '/':
        if(b==0){
            return console.log("Error: division by zero");
            break;
        }
        console.log(a/b);
        break;
    default:
        console.log("Error: unknown operator");
 }
}

calculate(10, '+', 5);//15
calculate(10, '-', 4);//6
calculate(10, '*', 5);//50
calculate(10, '/', 0);//Error: division by zero