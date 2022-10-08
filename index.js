const secondHand = document.querySelector(".sec-hand")
const minHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const min = now.getMinutes();
    const hour = now.getHours();

    const secondsDegree = ((seconds/60)*360)+90;
    const minDegree = ((min/60)*360)+((seconds/60)*6)+90;
    const hourDegree = ((hour/12)*360) + ((min/60)*30) + 90;

    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    minHand.style.transform = `rotate(${minDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate,1000);