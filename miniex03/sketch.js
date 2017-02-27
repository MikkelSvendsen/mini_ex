//Throbber FORSØGES........................

function setup() {
createCanvas(500,500);
background(170);
frameRate(45);
}

function draw() {

//Tekst - bare fordi
fill(40);
textSize(25);
text("HER LOADES!", height/3, width/4);

//Baggrundshjælperen... Eller noget
fill(170,100);
rect(0,0,width,height);
noStroke();
drawThrobber(100);  //pass to another function, try changing this number
}

function drawThrobber(num) {
    
//Throbber 1 - Gul - små cirkler 1: Gul, 2: Lilla, 3: Turkis, 4: Grøn, 5: Rød, 6: Blå - PacMan fodder!
push();
translate(width/2,height/2);
var cir = 360/num*(frameCount%num); //360/num >> degree of each ellipse move. frameCount%num >> indicates the movement of the ellipse
rotate(radians(cir));
noStroke();    
fill(255,255,0); 
ellipse(20,40,10,10);  //the moving dot(s), the y is the distance from the center
pop();

//Throb 2 - Lilla
push();
translate(width/2,height/2);
var cir = 360/num*(frameCount%num); //360/num >> degree of each ellipse move. frameCount%num >> indicates the movement of the ellipse
rotate(radians(cir));
noStroke();    
fill(255,0,255); 
ellipse(40,20,10,10);  //the moving dot(s), the y is the distance from the center
pop();


//Throb 3 - Turkis    
push();
translate(width/2,height/2);
var cir = 360/num*(frameCount%num); //360/num >> degree of each ellipse move. frameCount%num >> indicates the movement of the ellipse
rotate(radians(cir));
noStroke();    
fill(0,255,255); 
ellipse(-20,-40,10,10);  //the moving dot(s), the y is the distance from the center
pop();

//Throb 4 - Grøn    
push();
translate(width/2,height/2);
var cir = 360/num*(frameCount%num); //360/num >> degree of each ellipse move. frameCount%num >> indicates the movement of the ellipse
rotate(radians(cir));
noStroke();    
fill(0,255,0); 
ellipse(-40,-20,10,10);  //the moving dot(s), the y is the distance from the center
pop();

//Throb 5 - Rød
push();
translate(width/2,height/2);
var cir = 360/num*(frameCount%num); //360/num >> degree of each ellipse move. frameCount%num >> indicates the movement of the ellipse
rotate(radians(cir));
noStroke();    
fill(255,0,0); 
ellipse(20,-40,10,10);  //the moving dot(s), the y is the distance from the center
pop();
    
//Throb 6 - Blå
push();
translate(width/2,height/2);
var cir = 360/num*(frameCount%num); //360/num >> degree of each ellipse move. frameCount%num >> indicates the movement of the ellipse
rotate(radians(cir));
noStroke();    
fill(0,0,255); 
ellipse(40,-20,10,10);  //the moving dot(s), the y is the distance from the center
pop();
    
//Throbber 2: PacMan forsøges her  
push();
translate(width/2,height/2);
var cir = 360/num*(frameCount%num);
rotate(radians(cir));
noStroke();
fill(255,255,0);
ellipse(-20,30,40,40);
pop();
    
//Throbber 2: PacMan øje
push();
translate(width/2,height/2);
var cir = 360/num*(frameCount%num);
rotate(radians(cir));
fill(255);
stroke(0);
ellipse(-30,30,7.5,7.5);
pop();
    
}