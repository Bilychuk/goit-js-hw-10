import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import okIcon from "../img/check-circle.svg";
import errorIcon from "../img/x-octagon.svg";
import cautionIcon from "../img/exclamation-triangle.svg";

const form = document.querySelector('.form');

form.addEventListener('submit', promiseCreation);

function promiseCreation(event) {
    event.preventDefault();
    const delay = form.elements.delay.value.trim();
    const state = document.querySelector('input[name="state"]:checked');
    if (!delay || !state) {
        iziToast.warning({
          iconUrl: cautionIcon,
          title: "Caution",
          titleSize: '16px',
          titleColor: '#fff',
          theme: 'dark',
          backgroundColor: '#ffa000',
          messageColor: '#fff',
          position: 'topRight',
          progressBarColor: '#bb7b10',
          message: "You forgot important data",
    });
    return;
    }
    const promise = new Promise((resolve, reject) => {
        if (state.value === 'fulfilled') {
            setTimeout(() => {
                resolve(delay);
            }, delay)
            } else if (state.value === 'rejected'){
               setTimeout(() => {
                   reject(delay);
            }, delay)
            }
    })
    promise.then(value => {
        iziToast.success({
            iconUrl: okIcon,
            title: 'OK',
            titleColor: '#fff',
            titleSize: '16px',
            theme: 'dark',
            backgroundColor: '#59a10d',
            messageColor: '#fff',
            position: 'topRight',
            progressBarColor: '#326101',
            message: `Fulfilled promise in ${delay}ms`,
            timeout: delay,
        });
    })
        .catch(error => {
            iziToast.error({
            iconUrl: errorIcon,
            title: 'Error',
            titleColor: '#fff',
            titleSize: '16px',
            theme: 'dark',
            backgroundColor: '#ef4040',
            messageColor: '#fff',
            position: 'topRight',
            progressBarColor: '#b51b1b',
            message: `Rejected promise in ${delay}ms`,
            timeout: delay
         });
        })
    form.reset();
}






