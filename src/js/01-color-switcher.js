import { defaultStyle, styleBodyColor } from './style.js';

defaultStyle();
styleBodyColor();

const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
};

const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');

let timerId;

const onButtonStartClick = e => {
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    e.target.disabled = true;
    buttonStop.disabled = false;
    buttonStop.classList.add('button-allowed');
};

const onButtonStoptClick = e => {
    clearInterval(timerId);
    e.target.disabled = true;
    buttonStart.disabled = false;
};

buttonStart.addEventListener('click', onButtonStartClick);
buttonStop.addEventListener('click', onButtonStoptClick);
