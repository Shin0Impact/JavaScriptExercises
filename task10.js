//price = 120, quantity = 3, discountPercent = 10
const price = 120;
const quantity = 3;
const discountPercent = 10;

//subtotal (price × quantity)
const subtotal = price * quantity;
console.log("Subtotal:", subtotal);

//discountAmount (subtotal × discountPercent / 100)
const discountAmount = subtotal * (discountPercent / 100);
console.log("Discount Amount:", discountAmount);

//final total (subtotal - discountAmount)
const total = subtotal - discountAmount;
console.log("Total:", total);