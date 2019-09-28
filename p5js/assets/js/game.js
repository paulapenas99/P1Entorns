//declaració de variables
let num;
var angle;
var step;
var r;
var velCercle;
let cont;
let paint;
let colors_n = [];
let colors_c = [];
let c, col, rand;

// Funció que agafa el valor del numero i la velocitat de la url 
function getAtributes() {
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
    };
    num = getUrlParameter('num');
    velCercle = getUrlParameter('vel');
}

// p5.js functions
// Inicialitza tots els valors, les arrays de color i estableix on comença i quans cercles ha de dibuixar, a mes del frameRate
function setup() {
    cont = -1;
    getAtributes();
    paint = false;
    colors_n = [color('#FF9AA2'),color('#FFB7B2'),color('#FFDAC1'),color('#E2F0CB'),color('#B5EAD7'),color('#C7CEEA'),color('#50B89F'),color('#965A3E'),color('#2928FF'),color('#97FFFF')];
    colors_c = [color('#FE0000'),color('#FDFE02'),color('#0BFF01'),color('#011EFE'),color('#FE00F6'),color('#830303'),color('#FF00A9'),color('#00ABA9'),color('#A200FF'),color('#008000')];
    var myCanvas = createCanvas(800, 600);
    myCanvas.parent("numbers");
    stroke(0);
    strokeWeight(10);
    fill(0);
    angle = -3.12;
    r=200;
    step = TWO_PI/24;
    frameRate(int(velCercle));
}
//A partir del comptador estableix el número que ha de dibuixar, hi si l'ha de pintar o no
function draw() {
    if (cont > 0 && cont < 25){
        if(paint){
            rand = int(random(0,10));
            col = colors_n[rand];
            fill(col);
            stroke(col);
            strokeWeight(10);
        }
        switch (num) {
            case '1':
                create1();
                break;
            case '2':
                create2();
                break;
            case '3':
                create3();
                break;
            case '4':
                create4();
                break;
        }
        if (paint){
            rand = int(random(0,10));
            col = colors_c[rand];
            fill(col);
            stroke(col);
            strokeWeight(10);
        }
        cercle();
    }
    cont++;
}

//Dibuixa tots els cercles, un per un i quan acaba estableix que els següents seran pintats
function cercle() {
    translate(width/2,height/2);
    var x = r * sin(angle);
    var y = r * cos(angle);
    ellipse(x,y,5);
    angle = angle - step;
    if(cont >= 24 && !paint){
        cont = -3;
        paint = true;
    }
}
//Dibuixa el número 1, amb rectanges, primer de dos en dos i llavors de un en un
function create1() {
    switch (cont) {
        case 1:
            rect(275,300,20,10);
            rect(310,300,20,10);
            break;
        case 2:
            rect(290,275,20,10);
            rect(325,275,20,10);
            break;
        case 3:
            rect(305,250,20,10);
            rect(340,250,20,10);
            break;
        case 4:
            rect(320,225,20,10);
            rect(355,225,20,10);
            break;
        case 5:
            rect(335,200,25,10);
            rect(375,200,30,10);
            break;
        case 6:
            rect(360,175,15,10);
            rect(390,175,15,10);
            break;
        case 7:
            rect(390, 150,15,10);
            break;
        case 8:
            rect(390,225,15,10);
            break;
        case 9:
            rect(390,250,15,10);
            break;
        case 10:
            rect(390,275,15,10);
            break;
        case 11:
            rect(390,300,15,10);
            break;
        case 12:
            rect(390,325,15,10);
            break;
        case 13:
            rect(390,350,15,10);
            break;
        case 14:
            rect(390,375,15,10);
            break;
        case 15:
            rect(390,400,15,10);
            break;
        case 16:
            rect(390,425,15,10);
            break;
        case 17:
            rect(360,425,15,10);
            break;
        case 18:
            rect(420,425,15,10);
            break;
        case 19:
            rect(330,425,15,10);
            break;
        case 20:
            rect(450,425,15,10);
            break;
    }

}
//Dibuixa el número 2, amb rectanges de un en un
function create2() {
    switch (cont) {
        case 1:
            rect(310, 250, 30, 10);
            break;
        case 2:
            rect(325, 225, 30, 10);
            break;
        case 3:
            rect(345, 200, 30, 10);
            break;
        case 4:
            rect(385, 175, 30, 10);
            break;
        case 5:
            rect(425, 200, 30, 10);
            break;
        case 6:
            rect(445, 225, 30, 10);
            break;
        case 7:
            rect(455, 250, 30, 10);
            break;
        case 8:
            rect(462, 275, 30, 10);
            break;
        case 9:
            rect(435, 300, 30, 10);
            break;
        case 10:
            rect(410, 325, 30, 10);
            break;
        case 11:
            rect(385, 350, 30, 10);
            break;
        case 12:
            rect(360, 375, 30, 10);
            break;
        case 13:
            rect(335, 400, 30, 10);
            break;
        case 14:
            rect(310, 425, 30, 10);
            break;
        case 15:
            rect(360, 425, 30, 10);
            break;
        case 16:
            rect(410, 425, 30, 10);
            break;
        case 17:
            rect(462, 425, 30, 10);
            break;
    }
}
//Dibuixa el número 3, amb rectanges de un en un
function create3() {
    switch (cont) {
        case 1:
            rect(310, 250, 30, 10);
            break;
        case 2:
            rect(325, 225, 30, 10);
            break;
        case 3:
            rect(345, 200, 30, 10);
            break;
        case 4:
            rect(385, 175, 30, 10);
            break;
        case 5:
            rect(425, 200, 30, 10);
            break;
        case 6:
            rect(445, 225, 30, 10);
            break;
        case 7:
            rect(455, 250, 30, 10);
            break;
        case 8:
            rect(462, 275, 30, 10);
            break;
        case 9:
            rect(430, 300, 40, 10);
            break;
        case 10:
            rect(462, 325, 30, 10);
            break;
        case 11:
            rect(469, 350, 30, 10);
            break;
        case 12:
            rect(462, 375, 30, 10);
            break;
        case 13:
            rect(445, 400, 30, 10);
            break;
        case 14:
            rect(395, 425, 30, 10);
            break;
        case 15:
            rect(345, 400, 30, 10);
            break;
        case 16:
            rect(325, 375, 30, 10);
            break;
        case 17:
            rect(310, 350, 30, 10);
            break;
    }
}
//Dibuixa el número 4, amb rectanges 
function create4() {
    switch (cont) {
        case 1:
            rect(435, 300, 20, 10);
            break;

        case 2:
            rect(390, 300, 30, 10);
            break;
        case 3:
            rect(355, 300, 20, 10);
            break;

        case 4:
            rect(285, 300, 20, 10);
            rect(320, 300, 20, 10);
            break;
        case 5:
            rect(300, 275, 20, 10);
            rect(335, 275, 20, 10);
            break;
        case 6:
            rect(315, 250, 20, 10);
            rect(350, 250, 20, 10);
            break;
        case 7:
            rect(330, 225, 20, 10);
            rect(365, 225, 20, 10);
            break;
        case 8:
            rect(345, 200, 25, 10);
            rect(385, 200, 30, 10);
            break;
        case 9:
            rect(370, 175, 15, 10);
            rect(400, 175, 15, 10);
            break;
        case 10:
            rect(400, 150, 15, 10);
            break;
        case 11:
            rect(400, 225, 15, 10);
            break;
        case 12:
            rect(400, 250, 15, 10);
            break;
        case 13:
            rect(400, 275, 15, 10);
            break;
        case 14:
            rect(400, 325, 15, 10);
            break;
        case 15:
            rect(400, 350, 15, 10);
            break;
        case 16:
            rect(400, 375, 15, 10);
            break;
        case 17:
            rect(400, 400, 15, 10);
            break;
        case 18:
            rect(400, 425, 15, 10);
            break;
    }
}
//Estableix que quan es clica el ratolí, en la pantalla de l'animació torna enrere, primera pantalla
function mouseClicked() {
    window.history.back();
}
//Quan es fa shake amb el mobil torna a la pantalla anterior, es a dir la principal
function deviceShaken() {
    window.location.href ="https://paulapenas99.github.io/P1Entorns/p5js/";
}
