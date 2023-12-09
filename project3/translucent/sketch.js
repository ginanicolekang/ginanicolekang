// function setup() {
//   createCanvas(displayWidth,displayHeight);
//   background(0,0,0,0);
//   textSize(30);
//   rectMode(CENTER);

// }

// function draw() {
//   text('We believe in the multiplicity of identity, and the power of anonymity. As queer/hyphenated people, we share the ability to move between spaces in a fluid way, which can be used to our advantage.', 500, 500,[500],[500]);
//   noStroke();
//   // stroke(200, 20, 20);
//   fill(10,10,10,10);
//   ellipse(mouseX,mouseY,50,50);
// }

// function mousePressed(){
//     background(10,10,10,10);
// }



// function setup() {
//   createCanvas(200,200);
// }

// function draw() {
//   background(0);
//   fill(255,0,0);
//   rect(100,100,50,50);
// }



// function setup() {
//   createCanvas(windowWidth,windowHeight);
//   // bgColor = color( random(255), random(255), random(255) );
//   background(0,0,0,0);
//   // background(bgColor);
//   textSize(30);
//   textAlign(CENTER);


// }

// function draw() {

//   fill(10,10,10,10);
//   text('We believe in the multiplicity of identity, and the power of anonymity. As queer/hyphenated people, we share the ability to move between spaces in a fluid way, which can be used to our advantage.', 500, 500,[500],[500]);
//   noStroke();
//   // stroke(200, 20, 20);
//   fill(10,10,10,10);
//   fill( random(255), random(255), random(255),10);
//   ellipse(mouseX,mouseY,50,50);


// }

// function mousePressed(){
//     background(10,10,10,10);
// }

function setup() {
  createCanvas(displayWidth,displayHeight);
  bgColor = color( random(255), random(255), random(255),10 );
  background(0,0,0,0);
  // background(bgColor);
  textSize(30);
  textAlign(CENTER);
}

function draw() {
  fill(bgColor);
  text('We believe in the multiplicity of identity, and the power of anonymity. As queer/hyphenated people, we share the ability to move between spaces in a fluid way, which can be used to our advantage.', 500, 500,[500],[500]);
  noStroke();
  fill(bgColor,[10]);
  ellipse(mouseX,mouseY,50,50);
}

function mousePressed() {
  bgColor = color( random(255), random(255), random(255),10 );
}