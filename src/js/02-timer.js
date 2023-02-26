import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { defaultStyle, styleTimePicker } from './style.js';

const refs = {
    startButton: document.querySelector('[data-start]'),
    dateInput: document.querySelector('#datetime-picker'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};
refs.startButton.disabled = true;

defaultStyle();
styleTimePicker();

const convertMs = ms => {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(
        Math.floor((((ms % day) % hour) % minute) / second)
    );

    return { days, hours, minutes, seconds };
};

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const currentDate = new Date().getTime();
        const selectedDate = selectedDates[0].getTime();
        const ms = selectedDate - currentDate;
        if (selectedDate > currentDate) {
            refs.startButton.disabled = false;
        } else {
            Notify.failure('Please choose a date in the future');
            refs.startButton.disabled = true;
        }
    },
};

const addLeadingZero = value => String(value).padStart(2, '0');

flatpickr('#datetime-picker', options);

const onStartButtonClick = e => {
    e.target.disabled = true;
    refs.dateInput.disabled = true;
    const currentDate = new Date(refs.dateInput.value).getTime();
    const timerId = setInterval(() => {
        const newDate = new Date().getTime();
        const ms = currentDate - newDate;
        if (ms >= 0) {
            refs.seconds.textContent = convertMs(ms).seconds;
            refs.minutes.textContent = convertMs(ms).minutes;
            refs.hours.textContent = convertMs(ms).hours;
            refs.days.textContent = convertMs(ms).days;
        } else {
            clearInterval(timerId);
            refs.dateInput.disabled = false;
            Notify.info('Сountdown is over!');
        }
    }, 1000);
};

refs.startButton.addEventListener('click', onStartButtonClick);
