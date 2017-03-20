var angle;
var axiom = "F";
var sentence = axiom;
var len = 80;

var rules = []
rules[0] = {
    a: "F",
    b: "FF+[+F-F-F]-[-F+F+F]" //L-System algorithm used for this Fractal Tree sketch.
    //This algorithm makes up for the rules that divides the branches as the tree is generated. The rules govern the branches explained in the readme.
}


function generate(){ 
    len *= random(0.54,0.67); //Length of branches are randomly cut by 0.54 to 0.67 of their length pr. generation
    var nextSentence = "";
    for (var i = 0; i < sentence.length; i++) {
     var current = sentence.charAt(i);
     var found = false;
        for (var j = 0; j < rules.length; j++) {
        if (current == rules[j].a) {
            found = true;
         nextSentence += rules[j].b;
            break;
        }
     }
    if (!found) {
    nextSentence += current;
     }
 }
sentence = nextSentence; 
    createP(sentence);
    tree();
}

function tree() {
    background(48);
    resetMatrix();
    translate(width/2,height); //Translates the branch to the middle and bottom of the screen
    stroke(255, 100);
    for (var i = 0; i < sentence.length; i++) {
        var current = sentence.charAt(i);
        
        
//Rules for the tree branches following the algorithm in the top
        if (current == "F") {
            line(0,0,0,-len);
            translate(0,-len); //Translates to the end of the branch
        } else if (current == "+") {
            rotate(angle);  //Branches directions
        } else if (current == "-") {
            rotate(-angle);
        } else if (current == "[") {
            push(); 
        } else if (current == "]") {
            createLeaf(); //Adds a leaf to the end of a branch
            pop();
        }
    }
}

//A leaf function (adds to the end of the branches)
var leafW = len/10;
var leafH = 2*len/10;

function createLeaf() {
    fill(0,255,50,40);
    ellipse(0,0,leafW,leafH);
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    angle = radians(random(10,30)); //Angle of rotation follows random numbers for different results
    background(48);
        createP(axiom);
    tree();
    var button = createButton("generate");
    button.mousePressed(generate);
}

function draw() {
  
}