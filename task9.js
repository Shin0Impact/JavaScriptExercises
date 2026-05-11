console.log(true && "hello");//hello 1 * 1
console.log(false && "hello");//false 0 * 1
console.log(0 || "default");//default 0 + 1
console.log("value" || "default");//value , because "value" is truthy and short-circuit send the first truthy value
console.log(null ?? "fallback"); // ?? is nullish coalescing//fallback, because null is nullish