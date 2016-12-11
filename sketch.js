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

}

function keyPressed(){
    if(keyCode==LEFT_ARROW){
        mybat.dir(-1);
    }
    if(keyCode==RIGHT_ARROW){
        mybat.dir(1);
    }
    if(keyCode==UP_ARROW){
       myball.launched=true;
    }
}
