const nextRandom = (number) => (16807 * number) % 2147483647;
const generatePassword = (length, seed, options = {}) => {
     if (length <= 0) {
        return '';
    }
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
    let currentSeed = seed;
    for (let i = 0; i < length; i +=1) {
        currentSeed = nextRandom(currentSeed);
        const index = currentSeed % poolLength;
        result = `${result}${pool[index]}`;
    }
    return result;
}

const checkPassword = (password) => {
    const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
    const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const DIGITS = "0123456789";
    const SPECIAL = "!@#\$%^&*";

    let score = 0;

    if (password.length >= 8) {
        score += 1;
    }

    const chars = [...password];

    if (chars.some((char) => LOWERCASE.includes(char))) {
        score += 1;
    }

    if (chars.some((char) => UPPERCASE.includes(char))) {
        score += 1;
    }

    if (chars.some((char) => DIGITS.includes(char))) {
        score += 1;
    }

    if (chars.some((char) => SPECIAL.includes(char))) {
        score += 1;
    }

    let verdict = '';
    if (score <= 2) {
        verdict = 'Слабый';
    } else if (score === 3) {
        verdict = 'Средний';
    } else if (score === 4) {
        verdict = 'Надёжный';
    } else if (score === 5) {
        verdict = 'Очень надёжный';
    }

    return `${verdict} пароль (оценка ${score} из 5)`;
};

export { generatePassword, checkPassword };
