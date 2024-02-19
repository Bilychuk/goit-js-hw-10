import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import ErrorIcon from "../img/x-octagon.svg";

let userSelectedDate;
let timerInterval;

const input = document.querySelector('#datetime-picker');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');
const startButton = document.querySelector('button[data-start]');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (!input.value) {
            return;
        }
        userSelectedDate = new Date(selectedDates[0]);
        if (userSelectedDate < new Date()) {
            iziToast.error({
                title: 'Error',
                iconUrl: ErrorIcon,
                iconColor: '#fff',
                titleColor: '#fff',
                theme: 'dark',
                message: 'Please choose a date in the future',
                backgroundColor: '#ef4040',
                messageColor: '#fff',
                position: 'topRight',
                progressBarColor: '#b51b1b',
            });
        } else {
            startButton.disabled = false;  
        }  
    },
};

startButton.disabled = true;

flatpickr(input, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function updateTimer() {
    const currentDate = new Date();
    const timeRemaining = userSelectedDate - currentDate;
    if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        return;
    }
    const { days, hours, minutes, seconds } = convertMs(timeRemaining);
    daysElement.textContent = addLeadingZero(days);
    hoursElement.textContent = addLeadingZero(hours);
    minutesElement.textContent = addLeadingZero(minutes);
    secondsElement.textContent = addLeadingZero(seconds);
}
startButton.addEventListener('click', startCountdown);

function startCountdown() {
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
     startButton.disabled = true;
    input.disabled = true;
}
