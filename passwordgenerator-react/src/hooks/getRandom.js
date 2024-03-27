export function getRandomChracter(min,max) {
    const range = max - min + 1;
    const char = Math.floor(Math.random() * range) + min;
    return String.fromCharCode(char);
}

export function getRandomSymbol() {
    const pattern = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~'";
    return pattern[Math.floor(Math.random() * pattern.length)]
}