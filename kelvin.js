//kelvin state is 293
const kelvin = 345;
// subtracting 273 from kelvin and storing in celsius
const celsius = kelvin - 273;
//conversion formula
let fahrenheit = celsius * (9/5) + 32;
//round off
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);