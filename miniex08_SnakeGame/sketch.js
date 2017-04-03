var s;
var scl = 20;

var food;

var bgslider;

function setup() {
 createCanvas(600,600);
    s = new Snake();
    frameRate(10);
    pickLocation();
                
    //Create slider for altering background color
    bgslider = createSlider(0,255,40,50);
}
                        
function pickLocation() {
        var cols = floor(width/scl);
        var rows = floor(height/scl);
        food = createVector(floor(random(cols)), floor(random(rows)));
        food.mult(scl);
    }

function draw() {
    var bgval = bgslider.value();
    background(bgval);
    
    if (s.eat(food)) {
        pickLocation();
    }
        
    fill(255,random(0,150),100);
    rect(food.x, food.y, scl, scl);
    
    s.death();
    s.update();    
       s.show();

    }

function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        s.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        s.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        s.dir(-1, 0);
    }
}

