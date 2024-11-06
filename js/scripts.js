//Selecionar elementos
const clockElement = document.querySelector(".clock");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");

//Função

function updateClock(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");//sempre ter dois numeros
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
}

setInterval(updateClock, 1000)//1000 milissegundos = 1s