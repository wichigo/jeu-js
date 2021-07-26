function setup(){
    createCanvas(640, 480);
    posX = Math.floor(Math.random()* 640);
    posY = Math.floor(Math.random()* 480);
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
function draw(){
    background(220);
    updatePos();
    ellipse(posX,posY,50,50);
    numberVirus = 20;
}