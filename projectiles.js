class Projectile {
    constructor(x,y,radius,color, velocity){
        this.x= x
        this.y= y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }
    //DRAW PROJECTILE
    draw(){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius,0, Math.PI * 2, true)
        ctx.fillStyle = this.color
        ctx.fill()
    }

    update(){
        this.draw()
        this.x +=this.velocity.x
        this.y +=this.velocity.y
    }
}
