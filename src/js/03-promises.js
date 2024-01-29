import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const firstDelay = Number(event.target.elements['delay'].value);
  const delayStep = Number(event.target.elements['step'].value);
  const amount = Number(event.target.elements['amount'].value);

  for (let i = 0; i < amount; i++) {
    const delay = firstDelay + i * delayStep;
    const position = i + 1;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        iziToast.success({
          title: 'OK',
          message: `✅ Fulfilled promise ${position} in ${delay}ms`,
      })
      })
      .catch(({ position, delay }) => {
        iziToast.warning({
          title: 'Caution',
          message: `❌ Rejected promise ${position} in ${delay}ms`,
      })
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}