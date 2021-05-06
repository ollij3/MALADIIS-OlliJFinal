//Welcome to The Book of Maladiis!
//Here is your keyword key:
//1. coverpage
//2. contents
//3. pageone
//4. pagetwo
//5. pagethree
//6. pagefour
//7. pagefive
//8. glossary
//Enjoy + get better soon!


//VARIABLES
let background;
let coverpage;
let contents;
let pageone;
let pagetwo;
let pagethree;
let pagefour;
let pagefive;
let glossary;
let state = 0;
let typed = "";


//FUNCTION PRELOAD
function preload() {
  background = loadImage('background.JPG')
  coverpage = loadImage('coverpage.PNG')
  contents = loadImage('contents.PNG')
  pageone = loadImage('pageone.png')
  pagetwo = loadImage('pagetwo.png')
  pagethree = loadImage('pagethree.png')
  pagefour = loadImage('pagefour.png')
  pagefive = loadImage('pagefive.png')
  glossary = loadImage('glossary.png')
}

//FUNCTION SETUP
function setup() {
  createCanvas(900, 700);
}

//FUNCTION DRAW
function draw() {
  image(background, 0, 0);
  background.resize(width, height);

  //STATES
  if (state == 0) {
    image(coverpage, 0, 0);
    coverpage.resize(width, 0);
  } else if (state == 1) {
    image(contents, 0, 0);
    contents.resize(width, 0);
  } else if (state == 2) {
    image(pageone, 0, 0);
    pageone.resize(width, 0);
  } else if (state == 3) {
    image(pagetwo, 0, 0);
    pagetwo.resize(width, 0);
  } else if (state == 4) {
    image(pagethree, 0, 0);
    pagethree.resize(width, 0);
  } else if (state == 5) {
    image(pagefour, 0, 0);
    pagefour.resize(width, 0);
  } else if (state == 6) {
    image(pagefive, 0, 0);
    pagefive.resize(width, 0);
  } else if (state == 7) {
    image(glossary, 0, 0);
    glossary.resize(width, 0);
  }

  //TEXT- text size, fill, text 
  textSize(30);
  fill('white');
  text(typed, 420, 680);
}

//FUNCTION KEYTYPED
function keyTyped() {
  typed += key
  //COVERPAGE
  if (typed == 'coverpage') {
    state = 0;
    typed = "";
    //CONTENTS
  } else if (typed == 'contents') {
    state = 1;
    typed = "";
    //PAGEONE
  } else if (typed == 'pageone') {
    state = 2;
    typed = "";
    //PAGETWO
  } else if (typed == 'pagetwo') {
    state = 3;
    typed = "";
    //PAGETHREE
  } else if (typed == 'pagethree') {
    state = 4;
    typed = "";
    //PAGEFOUR
  } else if (typed == 'pagefour') {
    state = 5;
    typed = "";
    //PAGEFIVE
  } else if (typed == 'pagefive') {
    state = 6;
    typed = "";
    //GLOSSARY
  } else if (typed == 'glossary') {
    state = 7;
    typed = "";
  }
}

//KEYPRESSED
function keyPressed() {
  if (keyCode == BACKSPACE) {
    typed = "";
  }
}