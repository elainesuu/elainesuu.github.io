// // setup() is called once at page-load
// function setup() {
//     createCanvas(800,600); // make an HTML canvas element width x height pixels
// }

// // draw() is called 60 times per second
// function draw() {
//     let hr = hour();
//     let min = minute();
//     let sec = second();

//     background(225);
//     textSize(32);
//     fill(180);
//     text(hr, 10, 30);
//     fill(100);
//     text(min, 10, 60);
//     fill(0);
//     text(sec, 10, 90);
// }

var s = 30; // ellipse size
var minCount = 0

// setup() is called once at page-load
function setup() {
    createCanvas(400,400); // make an HTML canvas element width x height pixels
    
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();    
  
    background(50,40,50);
    translate(width/2, height/2);
    secRing(sec);
    minRing(min);
    hrRing(hr);
  
    // console.log(sec);
  
//     if (minCount % 360 == 0){
//         console.log(min);
        // 59 - 0
//     }
  
     countMin = null;
     if (sec == 0 && countMin != min){
        console.log(min);
        countMin = min;
     }
  
  
function circleSize(x) {
  return s - (x*0.4);
}
  
function secRing(numCircles) {
  for (var i = 0; i < numCircles; i++) {
	 push();
	 rotate((TWO_PI*i)/numCircles);
	 fill(153,204,255);
     let scaledSize = circleSize(numCircles);
     ellipse(170, 0, scaledSize);
     pop(); 
  }
}
  
function minRing(numCircles) {
  for (var i = 0; i < numCircles; i++) {
	 push();
	 rotate((TWO_PI*i)/numCircles);
	 fill(0,102,204);
     let scaledSize = circleSize(numCircles);
     ellipse(130, 0, scaledSize);
     pop(); 
  }
}
  
function hrRing(numCircles) {
  for (var i = 0; i < numCircles; i++) {
	 push();
	 rotate((TWO_PI*i)/numCircles);
	 fill(0,51,102);
     let scaledSize = circleSize(numCircles);
     ellipse(80, 0, scaledSize);
     pop(); 
  }
}
    

}