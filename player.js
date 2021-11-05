const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
canvas.width = innerWidth;
canvas.height = innerHeight;
let winnerBoard = document.querySelector("#WinnerMessage")
let gameOverScore = document.querySelector("#finalscore")
let scoreDisplay = document.querySelector("#Score");
let scoreValue = document.querySelector("#scoreValue")
let startScreen = document.querySelector("#start-screen");
let gameoverScreen = document.querySelector("#gameover-screen");
let startBtn = document.querySelector("#start-btn");
let restartBtn = document.querySelector("#restart-btn");
let tryAgain = document.querySelector("#winnerwinner");
const audio = new Audio("metamusic.mp3");

class Player {
    constructor(x,y,radius,color){
        this.playerImg = new Image()
        this.playerImg.src = "./zucc.png"
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }
//DRAW PLAYER
    draw(){
        const pattern = ctx.createPattern(this.playerImg, "repeat");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius,0, Math.PI * 2, true)
        ctx.fillStyle = pattern;
        ctx.fill()
    }
}

//variables to player
const x = canvas.width/2
const y = canvas.height/2

let player = new Player(x,y,45, "black")