function setup() {
  createCanvas(800, 600);
}

function draw() {

fill(170);
rect(0,0,width,height);
    
fill(222,214,161);
triangle(355, 405, 325, 360, 295, 405);    
    
fill(0,255,0);
triangle(350, 400, 325, 370, 305, 400);
    
fill(222,214,161);
rect(460,365,30,35);
fill(255,0,0);
rect(460,370,25,25);
    
fill(222,214,161);
ellipse(400,400,140,140);
fill(0);
ellipse(380,380,15,15);
fill(0);
ellipse(420,380,15,15);
line(375,420,425,420);


fill(110); // Trekanter
    rect(50,40,80,190);
    quad(50,230,50,40,30,30,30,210);
    quad(30,30,110,30,130,40,50,40);
fill(255,255,0);
    triangle(80,80,100,80,90,65);
    triangle(80,120,100,120,90,105);
    triangle(60,210,120,210,90,160);
    fill(0,255,0);

    
fill(110); // Firkanter
    rect(360,40,80,190);
    quad(360,40,440,40,420,30,380,30);
fill(0,255,0);
    rect(390,70,20,20);
    rect(390,110,20,20);
    rect(380,165,40,40);
    
fill(110); // Cirkler
    rect(650,40,80,190);
    quad(650,40,730,40,750,30,670,30);
    quad(730,40,750,30,750,210,730,230);
fill(255,0,0);
    ellipse(690,80,20,20);
    ellipse(690,120,20,20);
    ellipse(690,180,50,50);
    
}