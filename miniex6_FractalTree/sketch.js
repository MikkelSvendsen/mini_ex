var tree = [];
var leaves = [];

var count = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    var a = createVector(width/2, height);
    var b = createVector(width/2, height-150);
    root = new Branch(a, b);
    
    tree[0] = root;
}

function mousePressed() { //Tryk mouse1 for progress
    for (var i = tree.length-1; i >= 0; i--) {
        if (!tree[i].finished) {
        tree.push(tree[i].branchA());
        tree.push(tree[i].branchB());
    }
        tree[i].finished = true;
    }
count++;
    
    if (count === 9) { //Blade dukker op ved 9. klik (9 led)
        for (var i = 0; i < tree.length; i++) {
                if (!tree[i].finished) { //Grene vises kun én gang
                var leaf = tree[i].end.copy(); //Blade
                    leaves.push(leaf);
      }
    }
}
}
function draw() {
    background(72);
    
for (var i = 0; i < tree.length; i++) {
    tree[i].show();
    }
    
for (var i = 0; i < leaves.length; i++) {
    fill(random(0,50),random(100,255),0,40);
    noStroke();
    ellipse(leaves[i].x, leaves[i].y, random(28,32), random(26,34));
}   
}