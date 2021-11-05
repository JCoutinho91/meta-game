// VARIABLES
let projectiles = [] // STORING PROJECTILES
let enemies = [] // STORING ENEMIES
let animationID; // REFERENCE TO GAMELOOP
let score = 0; // SCORE ITERATION

endgame = () => {
    player = new Player(x,y,45, "black")
    projectiles = [];
    enemies = [];
    score = 0;
    scoreValue.innerHTML = score;
}

  const winner = () => {
        endgame()
        cancelAnimationFrame(animationID)
        canvas.style.display = "none";
        scoreDisplay.style.display = "none"
        winnerBoard.style.display = "flex"
    }

const startGame = () => {
    audio.play()
    startScreen.style.display = "none";
    canvas.style.display = "flex";
    scoreDisplay.style.display = "block"
    gameLoop()
    spawnEnemies()
  }

  const restartGame = () => {
    endgame()  
    gameoverScreen.style.display = "none";
    canvas.style.display = "flex";
    scoreDisplay.style.display = "block"
    winnerBoard.style.display = "none"
    gameLoop();
    spawnEnemies()
  }

  let gameOver = () => {
      gameOverScore.innerHTML = score
      endgame()
      cancelAnimationFrame(animationID)
      canvas.style.display = "none";
      scoreDisplay.style.display = "none"
      gameoverScreen.style.display = "flex";
    }


gameLoop = () => {
    animationID = requestAnimationFrame(gameLoop) 
    ctx.fillStyle = "rgba(255,255,255,0.1)"
    ctx.fillRect(0,0,canvas.width, canvas.height)
    player.draw()
    projectiles.forEach((projectile, idx2) => {
        projectile.update() //! PUSHING PROJECTILES TO THE ARRAY
            })
            enemies.forEach((enemy, idx) => {
            enemy.update() // ! PUSHING ENEMIES TO THE ARRAY


            const dist = Math.hypot(player.x - enemy.x,player.y - enemy.y)
            if(dist - enemy.radius - player.radius<1){  //!GAMEOVER
                gameOver()}


            projectiles.forEach((projectile,projectileIdx) => {  
            const dist = Math.hypot(projectile.x - enemy.x,projectile.y - enemy.y) //! HYPOT REFERS TO DISTANCE BETWEEN 2 POINTS (ENEMIES AND PROJECTILES)
            if(dist - enemy.radius - projectile.radius<1){ // ? ALWAYS SUBTRACT THE RADIUS TO AVOID BUGS (WHERE OBJECTS TOUCH)
                score += 1;
                scoreValue.innerHTML = score

                if(score ===50){
                    winner()
                }

                if(enemy.radius -10 > 5){ // WHEN PROJECTILES HITS AND THE SIZE IS GREATER THAN 10 WE REMOVE 10 
                    enemy.radius -= 10
                projectiles.splice(projectileIdx, 1) //! REMOVE PROJECTILE
                     }
                else { enemies.splice(idx, 1)  // ! REMOVES ENEMIES
                       projectiles.splice(projectileIdx, 1) //? REMOVES PROJECTILES
 }} })})}

        // ! LISTENERS
        startBtn.addEventListener("click", startGame)
        restartBtn.addEventListener("click", restartGame)
addEventListener("click", (event) => {

    const angle = Math.atan2(event.clientY - canvas.height/2, //*DISTANCE (ANGLE) BETWEEN CENTER AND THE MOUSE CLICK
                             event.clientX - canvas.width/2)
    const velocity = {
         x:Math.cos(angle)*5, //! COS REFERS TO THE AXIS OF X
         y:Math.sin(angle)*5 } //! SIN REFERS TO THE AXIS OF Y

    projectiles.push
    (new Projectile(canvas.width/2, canvas.height/2  //! CREATING NEW PROJECTILES ON CLICK
        ,5,
        "blue",
        velocity))
})
tryAgain.addEventListener("click", restartGame)