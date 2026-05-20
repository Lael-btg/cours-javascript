
const unTitle = document.querySelector('h2');
let isClicked = false;


// mainTitle.addEventListener('click',()=>{
//     console.log('Ok le titre est clickable');
//     mainTitle.innerText = isClicked  ? '😄' : 'Hello World'
//     isClicked = !isClicked;
// });

const add = document.querySelector('.btn.btn-primary');

    add.addEventListener('click', () => {
        console.log('ok le boutton est clickable');
        unTitle.classList.add('maclasse')
    });


const remove = document.querySelector('.btn.btn-secondary');

    remove.addEventListener('click', () => {
        console.log('ok le boutton 2 est clickable');
    });

const toggle = document.querySelector('.btn.btn-accent.btn-outline');

    toggle.addEventListener('click', () => {
        console.log('ok le boutton 3 est clickable');
    });
