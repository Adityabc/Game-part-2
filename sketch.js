

function preload(){
 upload = new Upload();
}


function setup() { 
  createCanvas(windowWidth-20, windowHeight-30);

   back =new Backdrop();
   arrangment =new Arrangment();
  
}

function draw() {
  background(112,115,163);
	drawSprites();
	
	
}
