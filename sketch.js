function setup(){
    createCanvas(640, 480);
    perdu = false;
    posX = Math.floor(Math.random()* 640);
    posY = Math.floor(Math.random()* 480);
    posVirus = [];
    virus(posVirus);
    vie = 1;
    timeRemain = millis();
    text('Milliseconds \nrunning: \n' + timeRemain, 5, 40);
    drawState = true;
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
function virus(arg){
    for (i = 0; i < 40; i++){
        ObstaclePosX = Math.floor(Math.random()* 640);
        ObstaclePosY = Math.floor(Math.random()* 480);
        arg.push(ObstaclePosX, ObstaclePosY);
    }
}
function createVirus(arg){
    for (i = 0; i < (arg.length / 2); i++){
        let f = i*2;
        fill('red');
        ellipse(arg[i], arg[f], 10, 10);
    }
}

function moveVirus(arg){
    for (i = 0; i < (arg.length / 2); i++){
        let f = i*2;
        let inverse = false;
        if (Math.random() * 10 <= 5){
            if (inverse){
                arg[i] += 1;
            }
            else{
                arg[i] -= 1
            }
        }
        else {
            if (inverse){
                arg[f] += 1;
            }
            else{
                arg[f] -= 1;
            }
        }
        if (arg[i] > 635){
            while (arg[i] > 5){
                inverse = true;
            }
        }
        else if (arg[i] < 5){
            while (arg[i] < 635){
                arg[i] +=1
            }
        }
        
    }
}
function distanceE(arg){
    for (i = 0; i < (arg.length / 2); i++){
        let f = i*2;
        distance = dist(posX, posY, arg[i], arg[f]);
        if (distance < 25){
            perdu = true;
        }
    }
}
function gameLose(){
    if (perdu  == true){
        if (vie > 0){
            vie--
            alert('vie : 0');
            perdu = false;
            posX = Math.floor(Math.random()* 640);
            posY = Math.floor(Math.random()* 640);

        }
        else {
            alert('perdu fdp');
            vie = 1;
            setup();
        }
    }
    
    
}
function createEllipse(){
    fill('white');
    ellipse(posX,posY,50,50);
}

function timeOut(){
    if (timeRemain >= 60000){
        alert('perdu');
    }
}
function draw(){
        background(220);
        gameLose();
        updatePos();
        testOutOfScreen();
        createVirus(posVirus);
        moveVirus(posVirus);
        distanceE(posVirus);
        createEllipse();
}