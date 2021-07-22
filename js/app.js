const toggle = document.getElementById('toggle'),
close = document.getElementById('close'),
open = document.getElementById('open'),
nav = document.querySelector('nav'),
modal = document.getElementById('modal');

// TOGGLE NAV 
toggle.addEventListener('click', () => document.body.classList.toggle('show-nav'));

// SHOW MODAL
open.addEventListener('click', () => {
    modal.classList.add('show-modal');
    if(document.body.className === 'show-nav'){
        document.body.classList.remove('show-nav');
    }
});

// HIDE MODAL
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// HIDE MODAL BY CLICKING ANYWHERE
window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false);

