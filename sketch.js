function setup(){
    createCanvas(640, 480);
    posX = Math.floor(Math.random()* 640);
    posY = Math.floor(Math.random()* 480);
    stroke('black');
    obstacle()
}

function updatePos(){
    if (keyIsDown(RIGHT_ARROW)){
        posX += 2;
    }
    else if(keyIsDown(LEFT_ARROW)){
        posX -= 2;
    }
    else if(keyIsDown(UP_ARROW)){
        posY -= 2;
    }
    else if(keyIsDown(DOWN_ARROW)){
        posY += 2;
    }
    else{
        console.log('Rick');
    }
    return posX, posY;
}

function testOutOfScreen(){
    if (posX > 615 || posX < 25){
        posX = Math.floor(Math.random()* 640);
    }
    else if (posY > 455 || posY < 25){
        posY = Math.floor(Math.random()* 480);
    }
    else{
    }
    strokeRed();
}

function strokeRed(){
    if (posX > 585 || posX < 55){
        stroke('red');
    }
    else if (posY > 425 || posY < 55){
        stroke('red');
    }
    else{
        stroke('black');
    }
}
function obstacle(){
    ObstaclePosX = Math.floor(Math.random()* 640);
    ObstaclePosY = Math.floor(Math.random()* 480);
    ellipse(ObstaclePosX, ObstaclePosY, 10, 10);
}
function draw(){
    background(220);
    updatePos();
    testOutOfScreen();
    ellipse(posX,posY,50,50);
    numberVirus = 20;
    for (i = 0; i < numberVirus; i++){
        obstacle();
    }
}