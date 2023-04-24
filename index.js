let canvas;
let context;

const blockSize = 25;
const canvasTotalRow = 17;
const canvasTatalCol = 17;
const snakeBody = [];

let snakeX = blockSize * 5;
let snakeY = blockSize * 5;
let speedX = 0;
let speedY = 0;
let foodX;
let foodY;

let gameover = false;

window.onload = function () {
    canvas = document.getElementById("canvas");
    canvas.width = canvasTotalRow * blockSize;
    canvas.height = canvasTatalCol * blockSize;
    context = canvas.getContext("2d");

    generateFood();

    document.addEventListener("keyup", setDirection);

    setInterval(update, 1000 / 10);
};

function update() {
    if (gameover) {
        return;
    }

    context.fillStyle = "green";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if (snakeX === foodX && snakeY === foodY) {
        snakeBody.push([foodX, foodY]);
        generateFood();
    }

    context.fillStyle = "white";
    snakeX += speedX * blockSize;
    snakeY += speedY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
}

function generateFood() {
    foodX = Math.floor(Math.random() * canvasTotalRow) * blockSize;
    foodY = Math.floor(Math.random() * canvasTatalCol) * blockSize;

    console.log(foodX, foodY);
}

function setDirection(event) {
    if (event.code == "ArrowUp" && speedY != 1) {
        speedX = 0;
        speedY = -1;
    } else if (event.code == "ArrowDown" && speedY != -1) {
        speedX = 0;
        speedY = 1;
    } else if (event.code == "ArrowLeft" && speedX != 1) {
        speedX = -1;
        speedY = 0;
    } else if (event.code == "ArrowRight" && speedX != -1) {
        speedX = 1;
        speedY = 0;
    }
}
