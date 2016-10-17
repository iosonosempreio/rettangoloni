var n = 8,
    c1,
    c2,
    finalX = 200;

function setup() {
  createCanvas(800,600)
  rectMode(CENTER)
  c1 = color(170,222,173)
  c2 = color(238,222,173)
  noStroke()
}

function draw() {
  background(255)
  for (var i=0; i<=n; i++){
    fill(lerpColor(c1,c2, i/n ))
    var thisWidth = width - i/n*width
    var thisHeight = height - i/n*height
    var thisX = lerp(width/2,mouseX,i/n)
    var thisY = lerp(height/2,mouseY,i/n)
    
    fill(lerpColor(c1,c2, i/n ))
    rect(thisX,thisY,thisWidth,thisHeight)
  }
}