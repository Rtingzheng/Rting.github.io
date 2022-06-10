function setup() {
    initializeFields();
    createCanvas(700, 700);
}

var bx;

var by;

var N;

function draw() {
    background(color(0xFA, 0xD4, 0x6D));
    for (var y = 25; y < 700; y += 35) {
        line(0, y, 700, y);
    }
    for (var x = 25; x < 700; x += 35) {
        line(x, 0, x, 700);
    }
    fill(0);
    for (var i = 0; i < N; i++) {
        if (i % 2 == 0)
            fill(0);
        else
            fill(255);
        ellipse(bx[i], by[i], 30, 30);
    }
    if (N % 2 == 0)
        fill(0);
    else
        fill(255);
    ellipse(mouseX, mouseY, 30, 30);
}

function mousePressed() {
    bx[N] = mouseX;
    by[N] = mouseY;
    N++;
}

function initializeFields() {
    bx = new Array(1000);
    by = new Array(1000);
    N = 0;
}
