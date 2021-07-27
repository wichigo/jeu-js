function setup(){
    createCanvas(640, 480);
    perdu = false;
    posX = Math.floor(Math.random()* 640);
    posY = Math.floor(Math.random()* 480);
    posVirus = [];
    virus(posVirus);
    vie = 5;
    timeRemain = millis();
    text('Milliseconds \nrunning: \n' + timeRemain, 5, 40);
    drawState = true;
    questionCarambar = ["Quelle est la femelle du hamster ?", "Que dit un oignon quand il se cogne ?", "Quel est l'animal le plus heureux ?","Quelle est le fruit préféré de l'homme ?",  "Pourquoi le football c'est rigolo ?","Quel est le sport le plus fruité ?",  "Que se fait un Schtroumpf quand il tombe ?"," Quel est le comble pour un marin ?",  "Qu'est ce que les enfants usent le plus à l'école ?","Quel métier les chiens peuvent-ils exercer ?",  "Quel est le point commun entre un pêcheur et un mannequin ?","Quel est le sport le plus silencieux ?",  "Quel est le comble pour un joueur de bowling ?","Pourquoi ne faut-il jamais raconter d'histoires drôles à un ballon ?",  "Que chante le plombier ?","Quels sont les animaux qui sont souvent fatigués ?",  "Quel est l'animal le plus à la mode ?","Que fait une vache avec une radio ?",  "Qu'est ce qu'une carotte au milieu d'une flaque d'eau ?","De quelle couleur sont les parapluies quand il pleut ?",  "Comment appelle t-on une fleur qui prend sa graine à moitié ?","Quelle est l’étoile la plus sale ?",  "Quelle est la blague à deux balles ?","Un sucre tombe amoureux d’une cuillère. Que propose le sucre à la cuillère ?",  "A combien rouliez-vous ? demande le gendarme.","Pourquoi faut-il se méfier des sirènes au volant ?",  "Quel est le comble pour un professeur de géographie ?","Quel animal est sourd ?",  "Que disent les plongeur au nouvel an ?","Quelles sont les lettres que l’on boit au petit déjeuner ?",  "Quel est le comble pour un professeur de musique ?","Ce matin, j’ai voulu faire une blague sur le Super U...",  "Pourquoi Michaël ouvre la porte ?","Quel est le comble d’un juge ?",  "Un homme tombe de la Tour Eiffel. Ses cheveux ne tombent que dix minutes plus tard. Pourquoi ?","Où trouve-t-on des chats marrants ?",  "J’ai 3 têtes, 3 jambes, 1 bras et 6 doigts. Qui suis-je ?","Que dit un vitrier à son fils pour qu’il soit sage ?"];
    reponseCarambar = ["L’Amsterdam", "Aïe","Le hibou, parce que sa femme est chouette.",  "L’ananas","Parce que Thierry en rit",  "La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes.","un Bleu",  "Avoir le nez qui coule !","Le professeur !",  "Electrichien !","Ils surveillent leur ligne !",  "Le para-chuuuut !","C’est de perdre la boule !",  "Parce qu’il pourrait éclater de rire !","Un syphon font font les petites clés à molette !",  "Le dodo et le paresseux !","La taupe modèle !",  "De la meuhsique !","Un bonhomme de neige… Au printemps !",  "Ils sont tout verts !","Une migraine !",  "L’étoile d’araignée !","Pan Pan !",  "Nous pourrions peut-être nous rencontrer dans un café ?","A deux seulement, mais si vous voulez monter, il reste de la place",  "Parce qu’elles font des queues de poisson !","C’est de perdre le nord !",  "Le crapaud, car il fait « coâ, coâ » !","Bonne Apnée !",  "K.K.O","Mettre des mauvaises notes !",  "… mais elle n’a pas Supermarché !","Parce que Jack sonne. (Jackson)",  "Manger des avocats.","Parce qu’il utilise un shampooing qui ralentit la chute des cheveux !",  "Dans les livres car il y a des chats pitres !","Un menteur !",  "Tiens-toi à carreaux si tu veux une glace !"];
    
}

function randomNum(){
    let random = Math.floor(Math.random() * questionCarambar.length);
    console.log(random);
    return random;
}
function updatePos(){
    if (keyIsDown(RIGHT_ARROW)){
        posX += 5;
    }
    if(keyIsDown(LEFT_ARROW)){
        posX -= 5;
    }
    if(keyIsDown(UP_ARROW)){
        posY -= 5;
    }
    if(keyIsDown(DOWN_ARROW)){
        posY += 5;
    }
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
    for (i = 0; i < 30; i++){
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
            vie--;
            a = randomNum();
            alert(questionCarambar[a]);
            alert(reponseCarambar[a]);
            perdu = false;
            posX = Math.floor(Math.random()* 640);
            posY = Math.floor(Math.random()* 640);

        }
        else {
            alert('perdu');
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