const generatePassword = (length) => {
    const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
    let result = '';
    for (let i = 0; i<LOWERCASE.length; i +=1) {
        result = `${result}${LOWERCASE[i]}`;
    }
    return result;
}