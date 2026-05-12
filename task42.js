let balance = 1000;
console.log("balance: " + getBalance());

function deposit(amount){
    if (amount <= 0) {
        console.log(`Deposit ${amount} FAILED -> ${balance}`);
        return;
    }
    balance += amount;
    console.log(`Deposit ${amount} -> ${balance}`);
}

function withdraw(amount){
    if (amount <= 0 || amount > balance) {
        console.log(`Withdraw ${amount} FAILED -> ${balance}`);
        return;
    }
    balance -= amount;
    console.log(`Withdraw ${amount} -> ${balance}`);
}


function getBalance(){
    return balance;
}

deposit(500);
withdraw(200);
withdraw(2000);