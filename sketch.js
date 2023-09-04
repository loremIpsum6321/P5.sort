let width = 896;
let height = 400;
let bars = [];
let barWidth = 5;

function fillArray() {
  bars = []; 
  for (let i = 0; i < width / barWidth; i++) {
    bars.push(new Bar(i * barWidth, height, barWidth, -Math.floor(random(5, height))));
  }
}

function showBars(array) {
  for (let i = 0; i < array.length; i++) {
    array[i].show();
  }
}

function setup() {
  createCanvas(width, height);
  fillArray();
}

function draw() {
  background(20);
  fill(255);
  showBars(bars);
  sorter(bars);
}

function sorter(array) {
  let swapped = false;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i].h < array[i + 1].h) {
      let tempH = array[i].h;
      array[i].h = array[i + 1].h;
      array[i + 1].h = tempH;
      swapped = true;
    }
  }
  
  if (!swapped) {
    noLoop();
  }
}

class Bar {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  
  show() {
    if (this.h % 2 === 0) {
      fill(200, 100, 0);
    } else {
      fill(170, 155, 66);
    }
    rect(this.x, this.y, this.w, this.h);
  }
}