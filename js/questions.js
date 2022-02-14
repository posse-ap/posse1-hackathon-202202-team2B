'use strict';

const questions_main = document.getElementById('main');
const hint = document.querySelector('.questions_hint');

hint.addEventListener('click', function display_hint() {
    questions_main.style.display = 'none';
    document.querySelector('.hint_').style.display = 'block';
})