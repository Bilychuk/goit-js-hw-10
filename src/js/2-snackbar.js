import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const input = document.querySelector('input[name="delay"]');

form.addEventListener('submit', promiseCreation);

function promiseCreation(event) {
    event.preventDefault();
    const delay = input.value;
    const state = document.querySelector('input[name="state"]:checked').value;
    const promise = new Promise((resolve, reject) => {
        if (state === 'fulfilled') {
            setTimeout(() => {
                resolve(delay);
            }, delay)
            } else if (state === 'rejected'){
               setTimeout(() => {
                   reject(delay);
            }, delay)
            }
    })
    promise.then(value => {
        iziToast.success({
            title: 'OK',
            titleColor: '#fff',
             titleSize: '16px',
            backgroundColor: '#59a10d',
                messageColor: '#fff',
                position: 'topRight',
                progressBarColor: '#b5ea7c',
         message: `Fulfilled promise in ${delay}ms`,
         timeout: delay
    });
    })
        .catch(error => {
        iziToast.error({
            title: 'Error',
            titleColor: '#fff',
            titleSize: '16px',
            backgroundColor: '#ef4040',
                messageColor: '#fff',
                position: 'topRight',
                progressBarColor: '#ffbebe',
         message: `Rejected promise in ${delay}ms`,
         timeout: delay
    });
        })
     input.value = "";
}






