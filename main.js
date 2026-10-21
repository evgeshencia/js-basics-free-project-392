import { generatePassword, checkPassword } from "./passwordGenerator.js";

console.log(generatePassword(5));
console.log(generatePassword(30));
console.log(generatePassword(30, { useUppercase: false, useDigits: false }));