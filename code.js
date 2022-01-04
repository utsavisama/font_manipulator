function setup(){
canvas = createCanvas(410, 450)
canvas.position(1000, 100)
video = createCapture(VIDEO)
video.size(300, 450)
video.position(10, 100)

var posenet = ml5.poseNet(video, modelLoaded)
posenet.on('pose', gotResults)

}


function modelLoaded(){
    console.log("POSENET IS LOADED!")
}
function draw(){
}

function gotResults(results){
if(results.length>0){
    console.log(results)
}
}
