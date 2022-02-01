console.log(`Running script...`);

const display = document.querySelector('.display');
const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.querySelector('#decrease')

const increase = () => display.textContent = Number(display.textContent)+1;

const decrease = () => display.textContent = Number(display.textContent) - 1;


increaseBtn.addEventListener('click', increase);
decreaseBtn.addEventListener('click', decrease);