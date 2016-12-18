var scl=10;
function setup() {
    createCanvas(400,400);
    mybat = new Bat();
    myball = new Ball();
    mygrid = new Grid();
    mygrid.prepare();
    frameRate(15);
}

function draw() {
    background(51);
    mybat.show();
    myball.show();
    mygrid.show();
    myball.collide();
    myball.update();
    if(keyIsDown(LEFT_ARROW)){
        mybat.dir(-1);
    }
    if(keyIsDown(RIGHT_ARROW)){
        mybat.dir(1);
    }
}

function keyPressed(){
    if(keyCode==UP_ARROW){
       myball.launched=true;
    }
}
