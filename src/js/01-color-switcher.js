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
  e.target.style.cursor = 'no-drop';
  e.target.style.backgroundColor = '#d8d8d8';
  buttonStop.disabled = false;
  buttonStop.style.backgroundColor = 'rgb(37, 33, 33)';
  buttonStop.style.cursor = 'pointer';
};

const onButtonStoptClick = e => {
  clearInterval(timerId);
  e.target.disabled = true;
  e.target.style.cursor = 'no-drop';
  e.target.style.backgroundColor = '#d8d8d8';
  buttonStart.disabled = false;
  buttonStart.style.backgroundColor = 'rgb(37, 33, 33)';
  buttonStart.style.cursor = 'pointer';
};

buttonStart.addEventListener('click', onButtonStartClick);
buttonStop.addEventListener('click', onButtonStoptClick);
