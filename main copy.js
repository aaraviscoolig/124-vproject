noseX=0;
noseY=0;
diffrence=0;
rightWristX=0;
leftWristX=0;
function preload(){

}
function setup(){
canvas=createCanvas(500,600);
canvas.position(650,300);
camara=createCapture(VIDEO);
camara.size(500,600);
poseNet=ml5.poseNet(camara,modelLoaded);
poseNet.on('pose',gotposes)
}
function modelLoaded(){
    console.log('PoseNet is loaded ')
}

function gotposes(results){
if(results.length >0)
{
    console.log(results)
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    diffrence= Math.floor(leftWristX-rightWristX);

}
}


function draw(){
    background('white')
    fill('#9bdeea');
    stroke('#051009');
    textSize(diffrence);
    text('Aarav',noseX,noseY)
}