var r = 0;
var b = 0;
var g = 0;
var sizeX = 0;
var sizeY = 0;

var circle = { //bevægende cirkel
x: 0,
y: 260,
diameter: 50,
speed: 4
}

//Random color pr. bounce
var col = {
r: 0,
g: 200,
b: 0,
};

//Random "rain" ellipse
var rain = {
    x: 100,
    y: 50
}

//rain color
var raincol = {
    r: 255,
    g: 200,
    b: 0
}

function setup() {
    createCanvas(800,600);
}

function draw() {
background(r,g,b);
    
//ellipse "rain" here (looks a bit like rain, has random yellow nuances, produces random positioned ellipses on canvas)
    rain.x = random(0,width);
    rain.y = random(0,height);
    raincol.r = random(100,255);
    raincol.g = random(100,200);
    raincol.b = 0;
    fill(raincol.r,raincol.g,raincol.b);
    ellipse(rain.x,rain.y,10,25);
    
//Colormapping for mouseX&Y - changes the background with map function and cursorposition
r = map(mouseX,0,800,0,255);
b = map(mouseX,0,800,255,0);
g = map(mouseY,0,800,0,255);

noStroke();
    
//Moving circle, has random green colors.
if (circle.x > width || circle.x < 0) {
    circle.speed = circle.speed*-1;
}
if (circle.x > width || circle.x < 0) {

	col.r = random(200,255); //random values of red between the range (22, 222)
	col.g = random(100,255);
	col.b = 0;
}
    
fill(col.r,col.g,col.b);
    circle.x = circle.x + circle.speed;
    ellipse(circle.x,circle.y,50,50);
    
    
//Mapping circle - differs in size with cursor position
for (var i = 0;i <= width; i = i + 5) {
    fill(0,255,0,100);
    ellipse(mouseX,mouseY,sizeX,sizeY);
sizeX = map(mouseX,0,800,0,50);
sizeY = map(mouseY,0,600,50,0);
    
}

//Blue ellipses, random sizes (testing 'while' function)
var i = 0;
while (i <= width) {
    fill(0,200,255);
    ellipse(i,100,random(15,25),random(25,60));
    i = i + 35;
    
}
    
//Purple ellipses (Random transparency)
var o = 100;
for (var o = 0; o <= width; o = o + 20) { 
fill(150,0,100,random(0,100));
    ellipse(o,300,25,25);
}
}
