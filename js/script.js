// NON DYNAMIC imports
// import { default as randomNumb, randomClr } from './utils.js';

// document.addEventListener('DOMContentLoaded', () => {
//     let main = document.querySelector('main');

//     let randNumbElem = document.createElement('p');
//     let todayDate = new Date().getDate();

//     randNumbElem.textContent = `Today's number is ${randomNumb(todayDate)}`;

//     let randClrElem = document.createElement('p');
//     let clr = randomClr();
//     randClrElem.style.color = clr;
//     randClrElem.textContent = `Today's color is ${clr}`;

//     main.append(randNumbElem, randClrElem);
// });

// =============================================================================

// DYNAMIC imports

// in dynamic imports we don't need import at the beggining

// document.addEventListener('DOMContentLoaded', () => {
//     let main = document.querySelector('main');

//     // dynamically importing file here after the DOM content has been loaded
//     // also doing the optional renaming of imported functions
//     import('./utils.js').then(( { default: rand, randomClr: randClr } ) => {

//         let randNumbElem = document.createElement('p');
//         let todayDate = new Date().getDate();

//         randNumbElem.textContent = `Today's number is ${rand(todayDate)}`;
//         main.append(randNumbElem);

//         let randClrElem = document.createElement('p');
//         let clr = randClr();
//         randClrElem.style.color = clr;
//         randClrElem.textContent = `Today's color is ${clr}`;

//         main.append(randClrElem);
//     }).catch(err => {
//         console.error('Failed to load utlis functions');
//     });
// });

// with dynamic imports we don't need "type="module"" in index.html file

// ===========================================================================

// CONDITIONAL import

// let CONDITION = false;
let CONDITION = true;

document.addEventListener('DOMContentLoaded', () => {
    let main = document.querySelector('main');

    if (CONDITION) {
        import('./utils.js')
            .then(( { default: rand, randomClr: randClr } ) => {

            let randNumbElem = document.createElement('p');
            let todayDate = new Date().getDate();
    
            randNumbElem.textContent = `Today's number is ${rand(todayDate)}`;
            main.append(randNumbElem);
    
            let randClrElem = document.createElement('p');
            let clr = randClr();
            randClrElem.style.color = clr;
            randClrElem.textContent = `Today's color is ${clr}`;
    
            main.append(randClrElem);
        }).catch(err => {
            console.error('Failed to load utlis functions');
        });
    }
});