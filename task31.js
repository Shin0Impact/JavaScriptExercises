function greet(name, greeting = "Hello"){
    return `${greeting}, ${name}!`;
 }

console.log(greet("Omar", "Good morning,"));//Good morning, Omar!
console.log(greet("Sara"));//Hello, Sara!
