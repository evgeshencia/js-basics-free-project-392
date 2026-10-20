const generatePassword = (length, options = {}) => {
    const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
    const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const DIGITS = "0123456789";
    const SPECIAL = "!@#$%^&*";
    let pool = LOWERCASE;
    const { useUppercase = true, useDigits = true, useSpecial = false } = options;
    if (useUppercase) {
        pool = `${pool}${UPPERCASE}`;
    }
    if (useDigits) {
        pool = `${pool}${DIGITS}`;
    }
    if (useSpecial) {
        pool= `${pool}${SPECIAL}`;
    }
    let result = '';
    const poolLength = pool.length;
    for (let i = 0; i<length; i +=1) {
        const index = i % poolLength;
        result = `${result}${pool[index]}`;
    }
    return result;
}
export { generatePassword }
