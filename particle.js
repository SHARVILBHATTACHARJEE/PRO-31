class Particle{
    constructor(x,y,radius){
        this.body=Bodies.circle(x,y,radius)
        this.radius=radius
        World.add(world,this.body)
        this.color=color(random(0,255),random(0,255),random(0,255))
    }
    display(){
        fill(this.color)
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.radius)
    }
}