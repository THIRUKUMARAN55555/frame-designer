function preload(){

}

function setup(){
    canvas = createCanvas(850,700);
    canvas.position(250,350);
    video = createCapture(VIDEO);
    video.hide();
    tintcolor = "";
}

function draw(){
    image(video,80,70,650,500);
    fill(0,20,30);
    stroke(0,20,30);
    rect(60,40,700,20);
    rect(60,580,700,20);
    rect(50,40,20,560);
    rect(740,40,20,560);
    fill(145,255,210);
    stroke(145,255,210);
    circle(50,40,50);
    circle(760,40,50);
    circle(45,590,50);
    circle(765,590,50);
    
}

function take_snapshot(){
    save('Thirukumaran.png');
}

function filter_tint(){
    tintcolor = document.getElementById("color_name").value;
}