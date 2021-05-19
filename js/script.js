import { default as randomNumb, randomClr } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    let main = document.querySelector('main');

    let randNumbElem = document.createElement('p');
    let todayDate = new Date().getDate();

    randNumbElem.textContent = `Today's number is ${randomNumb(todayDate)}`;

    let randClrElem = document.createElement('p');
    let clr = randomClr();
    randClrElem.style.color = clr;
    randClrElem.textContent = `Today's color is ${clr}`;

    main.append(randNumbElem, randClrElem);
});