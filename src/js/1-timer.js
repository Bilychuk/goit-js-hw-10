import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const input = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button[data-start]');
let userSelectedDate = {};
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= new Date()) {
            window.alert('Please choose a date in the future');
            startButton.disabled = true;
        } else {
            startButton.disabled = false;
            userSelectedDate = selectedDates[0];
        }        
    },
};
// console.log(userSelectedDate)
flatpickr("#datetime-picker", options);


