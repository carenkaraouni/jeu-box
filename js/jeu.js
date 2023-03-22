console.log('Jeu démarré');

let box = document.querySelector('.box');
console.log(box);
let click = 0;
let scroreElement = document.querySelector('#score');

let chrono = 30;
let chronoElement = document.querySelector('#chrono');


box.addEventListener("click", () => {
    console.log('click sur la box !');
    click += 1;
    scroreElement.innerHTML = click;
    chronoElement.innerHTML = chrono;
    
    let top = Math.floor(Math.random() * window.innerHeight);
    let left = Math.floor(Math.random() * window.innerWidth);

    // box.style.top = top + "px";
    box.style.top = `${top}px`;
    // box.style.backgroundColor = "red";
    box.style.left = `${left}px`;
});

setInterval(() => {
    console.log("timer");
    if (chrono != 0 && click!=0)  {
        chrono--;
        chronoElement.innerHTML = chrono;
    }

}, 1000)
/*if (chrono == 0) {
        clearInterval()
    }*/