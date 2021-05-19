export default function randomNumb(num) {
    // generate a random number between 1 and today's date
    return Math.floor(Math.random() * num) + 1;
}

export function randomClr() {
    // generate a random 6-digit HEX value string
    return `#${Math.random().toString(16).substr(2, 6)}`;
}