let a = 5;
let b = 10;
// Using destructuring
[a, b] = [b, a];
console.log("After swapping using destructuring:");
console.log("a:", a);
console.log("b:", b);

// Reset
a = 5;
b = 10;
// Using arithmetic
a = a + b;
b = a - b;
a = a - b;
console.log("After swapping using arithmetic:");
console.log("a:", a);
console.log("b:", b);