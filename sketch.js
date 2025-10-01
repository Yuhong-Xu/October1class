let sillyCat;

function preload(){

  sillyCat = loadImage('sillyCat.gif');

}



function setup() {

  createCanvas(windowWidth, windowHeight);

}

function draw() {

  background(200, 200, 200);
  image(sillyCat, 0, 0);
  
}
