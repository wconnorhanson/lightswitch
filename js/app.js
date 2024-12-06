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

const switch1 = document.getElementById("switch1");
const switch2 = document.getElementById("switch2");
const body = document.getElementById("body");
const light = document.getElementById("lightStatus");
const border = document.getElementById("box");
const text = document.getElementById("text");

lightStatus();

function toggleClass() {
    body.classList.toggle("on");
    // text.classList.toggle("light");
    border.classList.toggle("blue");
    lightStatus();
};
switch1.addEventListener("click", toggleClass);
switch2.addEventListener("click", toggleClass);

function lightStatus() {
    if (body.classList.contains("on")) {
        light.innerHTML = "on"
    } else {
        light.innerHTML = "off"
    }
};