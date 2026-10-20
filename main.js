import { generatePassword } from "./passwordGenerator.js";

console.log(generatePassword(8, 1));
console.log(generatePassword(12, 123));
console.log(generatePassword(12, 123, { useSpecial: true }));
console.log(generatePassword(8, 1, { useUppercase: false, useDigits: false }));