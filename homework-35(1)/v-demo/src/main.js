import './style.scss'
//import javascriptLogo from './assets/javascript.svg'
let count = 0;
const btn = document.getElementById("clickBtn");
const display = document.getElementById("count");

btn.addEventListener("click", () => {
    count++;
    display.textContent = count;
});