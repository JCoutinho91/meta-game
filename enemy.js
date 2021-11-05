class Enemy {
    constructor(x,y,radius,color, velocity){
        this.enemyImg = new Image()
        this.enemyImg.src = "fblogo.png"
        this.x= x
        this.y= y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }
// DRAW ENEMY
    draw(){

        const pattern2 = ctx.createPattern(this.enemyImg, 'repeat');
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius,0, Math.PI * 2, true)
                ctx.fillStyle = pattern2;
                ctx.fill();
                ctx.stroke();
        //ctx.fillStyle = this.color
       
    }
    update(){
        this.draw()
        this.x +=this.velocity.x
        this.y += this.velocity.y
    }

}

spawnEnemies = () => {
    //! INTERVAL TO CONTROL THE SPAWN QUANTITY
    setInterval(() => { 
        const radius = Math.random() * (30 -6) + 6 // AVOIDING SMALL ENEMIES

        let x
        let y

        if(Math.random() <0.5){   
        x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius       //? 0 BORDER(LEFT BORDER) OF OUR SCREEN - ENEMIES RADIUS CANVASWIDTH(RIGHTBORDER) //! RANDOM SPAWN POINTS
        y = Math.random() * canvas.height 
        } else{
        x = Math.random() * canvas.width                                 //! RANDOM SPAWN POINTS
        y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius

    }
        const color = `hsl(${Math.random()*360}, 50%, 50%)`
        const angle = Math.atan2(canvas.height/2 - y, canvas.width/2 - x) //! BACKWARDS BECAUSE IN COMING IN!!
        
        const velocity = {                  //! SAME AS PROJECTILES 
                                            //! USING ATAN2 AND COS SIN TO GET THE ENEMIES TO THE CENTER OF THE SCREEN
        x:Math.cos(angle)*2,
        y:Math.sin(angle)*2 
        }
        enemies.push(new Enemy(x,y,radius,color,velocity))
    }, 1300)
}