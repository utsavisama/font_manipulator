function setup(){
canvas = createCanvas(410, 450)
canvas.position(10, 100)
video = createCapture(VIDEO)
video.hide()
}

function draw(){
image(video, 0,0,550,450)
}