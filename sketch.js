const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var ground,stand,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,poli,slingShot,score = 0;
let stand1,ub1,ub2,ub3,ub4,ub5,ub6,ub7,ub8,ub9,ub10,back;
function setup() {
    createCanvas(1200, 700);
    engine = Engine.create();
    world = engine.world;
    //1075,725,975,625
   ground = new Ground(600,680,1200,10);
    stand = new Ground(900,600,350,10);
    stand1 = new Ground(1000,300,350,10);
    
    ub1 = new Box(850,260,50,50);
    ub2 = new Box(900,260,50,50);
    ub3 = new Box(950,260,50,50);
    ub4 = new Box(1000,260,50,50);
    ub5 = new Box(1050,260,50,50);
    ub6 = new Box(1100,260,50,50);
    ub7 = new Box(1150,260,50,50);
    ub8 = new Box(900,210,50,50);
    ub9 = new Box(950,210,50,50);
    ub10 = new Box(1000,210,50,50);
    ub11 = new Box(1050,210,50,50);
    ub12 = new Box(1100,210,50,50);
    ub13 = new Box(950,160,50,50);
    ub14 = new Box(1000,160,50,50);
    ub15 = new Box(1050,160,50,50);
    ub16 = new Box(1000,110,50,50);
    
  
    box1 = new Box(750,560,50,50);
    box2 = new Box(800,510,50,50);
    box3 = new Box(850,510,50,50);
    box4 = new Box(900,510,50,50);
    box5 = new Box(950,510,50,50);
    box6 = new Box(1000,510,50,50);
    box7 = new Box(1050,560,50,50);
    box8 = new Box(800,560,50,50);
    box9 = new Box(850,560,50,50);
    box10 = new Box(900,560,50,50);
    box11 = new Box(950,560,50,50);
    box12 = new Box(1000,560,50,50);
    box13 = new Box(850,460,50,50);
    box14 = new Box(900,460,50,50);
    box15 = new Box(950,460,50,50);
    box16 = new Box(900,420,50,50);
    
    poli = new Poligon(50,200,20);
    //slingShot = new SlingShot(this.poli,{x:100,y:200});
    slingShot = new SlingShot(poli.body,{x:100,y:200});
}
  
function draw() {
    getBackgroundImage();
    if (back) {
        background(back);
    }
    background(220);
    Engine.update(engine);
    ground.display();
    stand.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box13.display();
    box12.display();
    box14.display();
    box15.display();
    box16.display();
    poli.display();
    stand1.display()
    slingShot.display();
    ub1.display();
    ub2.display();
    ub3.display();
    ub4.display();
    ub5.display();
    ub6.display();
    ub7.display();
    ub8.display();
    ub9.display();
    ub10.display();
    ub11.display();
    ub12.display();
    ub13.display();
    ub14.display();
    ub15.display();
    ub16.display();
}
function mouseDragged (){
    Matter.Body.setPosition(poli.body,{x:mouseX,y:mouseY});
}

function mouseReleased (){
    slingShot.fly();
}
function keyPressed() {
    if (keyCode===32) {
        Matter.Body.setPosition(poli.body,{x: 200,y: 50})
        slingShot.attach(poli.body);
    }
}
async function getBackgroundImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson = await response.json();
    var daytime = responseJson.datetime;
    var hour = daytime.slice(11,13);
    if (hour>=06&&hour<=18) {
        back="yellow";
    } else{
        back="black";
    }
}
