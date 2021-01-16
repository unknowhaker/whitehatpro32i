class Poligon{
    constructor(x,y,radius){
        this.body = Matter.Bodies.circle(x,y,radius,{restitution:0.3, friction: 0.5, density:1.2});
        World.add(world,this.body);
        this.radius = radius;
        this.image = loadImage("polygon.png");
    }
    display(){
        //fill("red"),
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.radius*3,this.radius*3);
    }
}