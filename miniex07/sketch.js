    //Select array used for the house foundation
var houseSelect = ["stone","planks","cement","gravel","water","iron","marble"];

    //Walls checkboxes
var cbox1;

    //Ceiling slider
var ceilsliders = [];

    //Rotated ceiling sliders
var rSliders = [];

    //Roof 'radio' buttons
var roofradio = [];

    //Cloud sliders array 
var cloudsliders = [];
var angle = 0;

function setup() {
createCanvas(800,600);
    
    //House foundation, made of select boxes
for (var i = 0; i < houseSelect.length; i++) { //Loop of select boxes: 7, because 7 options.
    
    var posx = i * 62 + 150;            //X positioning
    var posy = height/1.1;              //Y positioning
    
    //House foundation. I really wanted to make all these options in one line but I couldn't manage to do it.
    houseSelect[i] = createSelect();    //Creating selectboxes
    houseSelect[i].position(posx,posy); //Position of the select boxes
    houseSelect[i].option('stone');     //Simple text options
    houseSelect[i].option('planks');
    houseSelect[i].option('cement');
    houseSelect[i].option('gravel');
    houseSelect[i].option('water');
    houseSelect[i].option('iron');
    houseSelect[i].option('marble');
 //   houseSelect[i].changed(mySelectEvent); Didn't make it in time to implement such thing
}
    
    //Left walls, made of checkboxes
for (var i = 0; i < 12; i++) {              //for loop creating 14 checkboxes as left walls
    
    var posx = width/5.3;                   //Left walls X position
    var posy = i*15+365;                    //Left walls Y position
    
    cbox1 = createCheckbox('', true);       //Creates checkedboxes
    cbox1.position(posx, posy);      //Positioning and moving the boxes ontop of each other
}
    
    //Right walls, also checkboxes
for (var i = 0; i < 12; i++) {              //for loop creating 14 checkboxes as right walls
    
    var posx = width/1.41;                  //Right walls X position
    var posy = i*15+365;                    //Right walls Y position
    
    cbox1 = createCheckbox('', true);       //Creates checkedboxes
    cbox1.position(posx, posy);      //Positioning and moving the boxes ontop of each other
}
    //Ceiling sliders (BOTTOM)
for (var i = 0; i < 5; i++) {               //for loop creating 5 sliders as ceiling
    
    var posx = i*80+165;                    //Ceilingsliders X position
    var posy = height/1.7;                  //Ceilingsliders Y position
    
    ceilsliders[i] = createSlider(0,255,127);   //Creates ceilingslider
    ceilsliders[i].position(posx, posy);        //Sets position of sliders
    ceilsliders[i].size(80);                    //Size of ceilingsliders
    }
    ceilsliders[0].input(adjustCeilSliders);    //Adjust ceilingsliders further below
    
    //Rotated ceiling/roof sliders
for (var i = 0; i < 11; i++) { //Loops 11 sliders in the roof
    
    var posx = i*12+170;        //Sets the position and angle of rotation on the sliders
    var posy = i*-8+335;        //Sets the position and angle of rotation on the sliders
    var sliderSize = i*27+20    //Size of sliders, trying to scale with the frame of the roof
    
    rSliders[i] = createSlider(0,255,128); //Creates roofslider
    rSliders[i].position(posx, posy);      //Sets position
    rSliders[i].size(sliderSize);          //Sets size of roofsliders
    rSliders[i].style('rotate', 34.3);     //Rotates roofsliders
}
    
    //Roof of 'radio' buttons - leftside
for (var i = 0; i < 16; i++) {  //Loops the radio button (16 buttons)
    
    var posx = i*-13+320;       //Sort out the position and angle of the radio button loop
    var posy = i*15+140;        //Sort out the position and angle of the radio button loop
    
    roofradio[i] = createRadio();  //Creates the radio button
    roofradio[i].option();         //Creates the radio button
    roofradio[i].position(posx,posy);   //Set position
}
    //Roof made of 'radio' buttons - rightside
for (var i = 0; i < 16; i++) {  //Loops the radio button (16 buttons)
    
    var posx = i*19+320;        //Sort out the position and angle of the radio button loop
    var posy = i*13+170;        //Sort out the position and angle of the radio button loop
    
    roofradio[i] = createRadio();  //Creates the radio button
    roofradio[i].option();         //Creates the radio button
    roofradio[i].position(posx,posy);  //Set position
}
    
    //Windows and doors are required in a nice house.
var window = createElement('textArea');
    window.position(320,400);
    window.size(100,60);
    
var window1 = createElement('textArea');
    window1.position(450,400);
    window1.size(100,60);
    
var door = createElement('textArea');
    door.position(190,400);
    door.size(100,135);
   
    //"Cloud" sliders, following random position set in an upper position of the canvas
for (var i = 0; i < 200; i++) {
        
    var posx = random(0, width);                 //Positioning
    var posy = random(0, height/4);              //Positioning
    var csize = random(8,15);
    
    cloudsliders[i] = createSlider(0,100,50);    //Creating sliders
    cloudsliders[i].position(posx,posy);         //Positioning - random - trying to make a "cloud" of tiny zombie-sliders
    cloudsliders[i].size(csize);                    //Sliders size (Very small in this case)
    }
}

    //Adjust the ceiling sliders in relation to the first one in the array.
function adjustCeilSliders() {
    for (var i = 1; i < ceilsliders.length; i++) {
        ceilsliders[i].value(ceilsliders[0].value());
    }
}

    //Select event in relation to the house foundation - didn't get to implement anything in time but left it here
/* function mySelectEvent() {
    var item = houseSelect[i].value();
} */

function draw() {
    
    //Ceiling sliders control background RGB (3rd, 4th and 5th slider). 1st slider implicitly controls black/white level by controlling all sliders.
    var ceilvalr = ceilsliders[2].value();
    var ceilvalg = ceilsliders[3].value();
    var ceilvalb = ceilsliders[4].value();
        background(ceilvalr,ceilvalg,ceilvalb);
    
    //Roofsliders dance
    var rooffset = 0;
    for (var i = 0; i < rSliders.length; i++) {
        var x = map(sin(angle+rooffset), -1, 1, 0, 255);
        rSliders[i].value(x);
        rooffset += 0.45;
    }
    angle += 0.001;
    
    //Offset created in relation to the cloudsliders, making them zombie-sliders.
    var offset = 0;
    
    for (var i = 0; i < cloudsliders.length; i++) {
        var x = map(sin(angle+offset), -1, 1, 0, 255);
        cloudsliders[i].value(x);
        offset += 0.515;
    }
    angle += 0.1;
}