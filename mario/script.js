const mario = document.getElementById("mario");
const champinion = document.getElementById("champinion");

function onMarioJumped() {
    mario.removeEventListener('animationend', onMarioJumped);
    mario.classList.remove("jump");
}

function jump() {
    mario.addEventListener('animationend', onMarioJumped);
    if (!mario.classList.contains("jump")) {
        mario.classList.add("jump")
    }
}

function tick() {
    let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue("top"));
    let champinionLeft = parseInt(window.getComputedStyle(champinion).getPropertyValue("left"));

    if (champinionLeft < 140 && champinionLeft > 20 && marioTop >= 230) {
        alert("Oh no! Try again!!!");
    }
    window.requestAnimationFrame(tick);
}

document.addEventListener("keydown", jump);

window.requestAnimationFrame(tick);































