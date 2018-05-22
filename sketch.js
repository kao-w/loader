var video;
var angle = 0;
var isLoaded = false;

function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(32, 67, 242);
  initializeVideo();
}

function draw() {
  if(isLoaded==true){
    drawVideo();
  }
  else{
  drawLoading();
  }
}

function drawVideo() {
  image(video,0,0);

}

function initializeVideo(){
  video = createVideo('assets/centro.mov', videoLoaded);
  
}

function videoLoaded(){
  isLoaded=true;
  video.loop();
  video.hide();
}

function drawLoading() {
  background(32, 67, 242);
  translate(windowWidth / 2, windowHeight / 2);
  rotate(angle);
  strokeWeight(10);
  stroke(255);
  line(0, 0, 100, 100);
  angle += 0.1;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}