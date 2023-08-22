// variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 18;
let colidiu = false;

// placar do game

let placarjogador1 = 0;
let placarjogador2= 0;



// velocidade da bolinha
let velocidadeXBol = 8;
let velocidadeYBol = 8;

// raio da bolinha
let raio = diametro /2;

// variaveis do jogador 1
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

// variaveis do jogador 2

let xRaqueteJogador2 = 585;
let yRaqueteJogador2 = 150;
let velocidadeYJogador2;

// sons do game

let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}




function setup() {
  createCanvas(600, 400);
  trilha.loop();
}
// funções da bolinha, velocidade e borda
function draw() {
  background(0)
  bolinhaMaster();
  movimentaMaster();
  verificaColisaoBorda ();
  mostraRaquete(xRaquete,yRaquete);
  movimentaRaquete();
  verificaColisaoRaquete();
  colisaoMinhaRaqueteBiblioteca(xRaquete,yRaquete);
  mostraRaquete(xRaqueteJogador2,yRaqueteJogador2);
  movimentaRaqueteJogador2();
colisaoMinhaRaqueteBiblioteca(xRaqueteJogador2,yRaqueteJogador2);
  
  placardorjogadores();
  marcaplacar();   
 
}


function bolinhaMaster(){
  circle (xBolinha,yBolinha,diametro);
  
}

function movimentaMaster(){
  xBolinha += velocidadeXBol;
  yBolinha += velocidadeYBol;
  
}

function verificaColisaoBorda()
{
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBol *= -1;}
    
  
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBol *= -1;}
  
}
  
function mostraRaquete(x,y) {
    rect(x,y, raqueteComprimento, raqueteAltura);
}

function movimentaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -=10;
  }
  
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
    
  }
    
    
}

function verificaColisaoRaquete(){
  if (xBolinha -raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha +raio > yRaquete){
    velocidadeXBol *= -1;
    raquetada.play();
      
  }
    
}

function colisaoMinhaRaqueteBiblioteca(x,y){
   colidiu = collideRectCircle(x,y, raqueteComprimento, raqueteAltura, xBolinha,yBolinha,raio);
  if (colidiu){
    velocidadeXBol *= -1;
    raquetada.play();
    
    
  }  
}

function movimentaRaqueteJogador2(){
  if(keyIsDown(87)){
    yRaqueteJogador2 -=10;
  }
  
  if(keyIsDown(83)){
    yRaqueteJogador2 += 10;
    
  }
      
}

function  placardorjogadores(){
  stroke(255);
  textAlign(CENTER);
  textSize(19);
  fill(color(255,255,0));
  rect(150,10,40,20);
  fill(color(139,0,139));
  text(placarjogador1, 170,26)
  fill(color(255,255,0));
  rect(450,10,40,20);
  fill(color(139,0,139));
  text(placarjogador2, 470,26)
  
  
}

function marcaplacar(){
  if (xBolinha > 590){
    placarjogador1 += 1;
  }
  if (xBolinha < 10){
    placarjogador2 += 1;
  }   
}








