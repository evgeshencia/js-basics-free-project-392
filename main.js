import { generatePassword, checkPassword } from "./passwordGenerator.js";

console.log(checkPassword(generatePassword(12, 123)));
console.log(checkPassword(generatePassword(12, 123, { useSpecial: true })));
console.log(checkPassword(generatePassword(8, 1, { useUppercase: false, useDigits: false })));