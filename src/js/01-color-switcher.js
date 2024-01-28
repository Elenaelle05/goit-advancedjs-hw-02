const elements = {
    start: document.querySelector('.data-start'),
    end: document.querySelector('.data-end')
};

let interval;

function changeColor() {
    const randomColor = getRandomHexColor();  
    document.body.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
};

elements.start.addEventListener('click', () => {
    elements.start.disabled = true; 
    interval = setInterval(() => {
        changeColor();
    }, 1000);
});

elements.end.addEventListener('click', () => {
    clearInterval(interval);
    elements.start.disabled = false;
});


