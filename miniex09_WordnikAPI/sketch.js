var api = 'https://crossorigin.me/api.wordnik.com:80/v4/word.json/';
var apiKey = '&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

// Use the definition, related words and
// frequency dataset for searched words.
var urldef = '/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false'; 
var urlrel = '/relatedWords?useCanonical=false&limitPerRelationshipType=10';
var urlfreq = '/frequency?useCanonical=false&startYear=1998&endYear=2012';

var words;
var wordFreq;
var wordTotal;

var input;
var input2;
var input3;

// Setup includes a background as kind of feedforward to the third input box
// which represents the frequency of a searched word
function setup() {
    createCanvas(600,300);
    background(60);
    
    var button = select('#submit');
    button.mousePressed(searchWord);
    
    input = select('#word');
    
    var button2 = select('#submit2');
    button2.mousePressed(searchRelated);
    
    input2 = select('#relatedword');
    
    var button3 = select('#submit3');
    button3.mousePressed(searchFreq);
    
    input3 = select('#freqword');
}

//Searches the word for definitions within Wordnik
function searchWord() {
    var url = api + input.value() + urldef + apiKey;
    loadJSON(url, gotDataDefinition);
}

//Searches the word for relations
function searchRelated() {
    var url = api + input2.value() + urlrel + apiKey;
    loadJSON(url, gotDataRelated);
}

//Searches the word frequency
function searchFreq() {
    var url = api + input3.value() + urlfreq + apiKey;
    loadJSON(url, gotDataFreq);
}

function gotDataDefinition(data) { //Handles Wordnik data of word definition
    var textDef = data;

//    I was experimenting with some random outputs but I kinda
//    like the full scope of definitions ruled out for me.
//    var index1 = floor(random(0, data.length));
//    textDef2 = data[index1].text;
    
//    Loop through data arrays for text definitions of
//    searched word in order to display it on page
    for (var i = 0; i < data.length; i++) {
        createP(textDef[i].text);
    }
    console.log(textDef);
}

function gotDataRelated(data) { //Handles Wordniks data of related words
    
    var wordRel = data;
    
    for (var i = 0; i < data.length; i++) {
        createElement('h1',wordRel[i].relationshipType);
        createP(wordRel[i].words);
    }
}

//      Below function handles Wordnik data of word frequency (origin is quite unknown 
//      but dates back to year 1800. I find theres several different articles and urls 
//      on Wordnik).
//      What I want to do here as well is make some kind of visual representation of  
//      the frequency of the requested word. My solution is to divide every five years into 
//      separate colors and constrain the search within the span of year 1998 to 2012.
function gotDataFreq(data) {
    var wordFreq = data.frequency;
    var wordTotal = data.totalCount;
    
    // These variables are for playing around with different colored
    // ellipses for different spans of five years interval.
    // wordYear1: 1998 - 2002 are RED 
    // wordYear2: 2003 - 2007 are GREEN 
    // wordYear3: 2008 - 2012 are BLUE
    // And I bet there are much smarter ways to do this but idc :D
    var wordYear1 = data.frequency[0].count+data.frequency[1].count+data.frequency[2].count+data.frequency[3].count+data.frequency[4].count;
    var wordYear2 = data.frequency[5].count+data.frequency[6].count+data.frequency[7].count+data.frequency[8].count+data.frequency[9].count;
    var wordYear3 = data.frequency[10].count+data.frequency[11].count+data.frequency[12].count+data.frequency[13].count+data.frequency[14].count+data.frequency[14].count;
    
    var sizeX = 10;
    var sizeY = 10;
    
    background(255);
    
    if (wordTotal); {
    for (var i = 0; i < data.frequency.length; i++) {
        createElement('h2',wordFreq[i].year);
        createP(wordFreq[i].count);
    }   
    //    This code would show the total frequency count as ellipses on the canvas.
    //    for (var j = 0; j < wordTotal; j++) {
    //        noStroke();
    //        fill(205,75);
    //        ellipse(random(width),random(height), 10, 10);
    //}
        
    // All below loops are drawing the ellipses representing the frequency count 
    // within every five year span. They are ordered so that red ellipses are
    // placed to the left, green in the middle and blue to the right.
        console.log(wordTotal);
        
            for (var r = 0; r < wordYear1; r++) {
        noStroke();
        fill(255,0,0,40);
        ellipse(random(0, 200),random(height),sizeX,sizeY);
    }
        console.log(wordYear1);
        
            for (var g = 0; g < wordYear2; g++) {
        noStroke();
        fill(0,255,0,40);
        ellipse(random(200,400),random(height),sizeX,sizeY);
    }
        console.log(wordYear2);
        
            for (var b = 0; b < wordYear3; b++) {
        noStroke();
        fill(0,0,255,40);
        ellipse(random(400,600),random(height),sizeX,sizeY);
    }
        console.log(wordYear3);
    }
}
