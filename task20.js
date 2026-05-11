let password = "Hello1!";


if (password.length >= 10) {
    console.log(`Strong (length = ${password.length})`);
} else if (password.length >= 6) {
    console.log(`Medium (length = ${password.length})`);
} else {
    console.log(`Weak (length = ${password.length})`);
}