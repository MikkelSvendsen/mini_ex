function Branch(begin, end) {
    this.begin = begin;
    this.end = end;
    this.finished = false;
    
    this.jitter = function() {
        this.end.x += random(-1,1);
        this.end.y += random(-1,1);
    }
    
    this.show = function() {
        stroke(255,125,65);
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }
    
this.branchA = function() { //HØJRE led
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(PI/random(2,6)); //Grenenes rotation
    dir.mult(random(0.55,0.74)); //De genererede grenes længde (tilfældige, mere ægte)
    var newEnd = p5.Vector.add(this.end, dir);
    var b = new Branch(this.end, newEnd);
    return b;
}

this.branchB = function() { //VENSTRE led
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(-PI/random(2,6));
    dir.mult(random(0.55,0.74));
    var newEnd = p5.Vector.add(this.end, dir);
    var b = new Branch(this.end, newEnd);
    return b;
}
}