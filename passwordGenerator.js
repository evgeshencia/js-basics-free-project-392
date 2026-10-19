const generatePassword = (length) => {
    const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
    let result = '';
    const alphabetLength = LOWERCASE.length;
    for (let i = 0; i<length; i +=1) {
        const index = i % alphabetLength;
        result = `${result}${LOWERCASE[index]}`;
    }
    return result;
}
export { generatePassword }
