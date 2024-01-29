
   const  start = document.querySelector('button[data-start]');
   const stop = document.querySelector('button[data-stop]');


let interval;

function changeColor() {
    const randomColor = getRandomHexColor();  
    document.body.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
};

start.addEventListener('click', () => {
    start.disabled = true; 
    interval = setInterval(() => {
        changeColor();
    }, 1000);
});

stop.addEventListener('click', () => {
    clearInterval(interval);
    start.disabled = false;
});


