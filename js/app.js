// const button = document.getElementById('lightswitch');
// const body = document.getElementById('body');
// const lightStatus = document.getElementById('lightStatus');

// button.addEventListener('click', function() {
//     body.classList.toggle('on');

//     if (body.classList = 'on') {
//         lightStatus.innerHTML = 'on'
//     } else {
//         lightStatus.innerHTML = 'off'
//     }
// });

// const switch1 = document.getElementById("switch1");
// const switch2 = document.getElementById("switch2");

const lightswitches = document.querySelectorAll('.lightswitch');
const btnText1 = document.getElementById('lightAlt1');
const btnText2 = document.getElementById('lightAlt2');
const body = document.getElementById("body");
const lightStat = document.getElementById("lightStatus");
const border = document.getElementById("box");
const text = document.getElementById("text");

lightStatus();
btnUpdate();

lightswitches.forEach(lightswitches => {
    lightswitches.addEventListener('click', ()=> toggleClass())
    lightswitches.addEventListener('click', ()=> btnUpdate())
})

function toggleClass() {
    body.classList.toggle("on");
    border.classList.toggle("blue");
    lightStat.classList.toggle("on");
    lightStatus();
    btnUpdate();
};


function lightStatus() {
    if (body.classList.contains("on")) {
        lightStat.innerHTML = "on"
    } else {
        lightStat.innerHTML = "off"
    }
};

function btnUpdate() {
    if (body.classList.contains("on")) {
        btnText1.innerHTML = "off"
        btnText2.innerHTML = "off"
    } else {
        btnText1.innerHTML = "on"
        btnText2.innerHTML = "on"
    }btnText1
};