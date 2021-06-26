canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
random_number=Math.floor(Math.random() * 5 );
console.log(random_number);
car1_width=100;
car1_height=90;
car2_width=100;
car2_height=90;
car1_image="car1.png";
car2_image="car2.jpeg";
rover_x=10;
rover_y=10;
background_image="racing.jpeg";
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBakground;
    background_imgTag.src=background_image;
    car1_imgTag=new Image();
    car1_imgTag.onload=uploadcar1;
    car1_imgTag.sr=background_image;
    car2_imgTag=new Image();
    car2_imgTag.onload=uploadcar1;
    car2_imgTag.sr=background_image;
}
function uploadBakground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, rcar2_width, car2_height);
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed == "38")
    {
        c1_up();
console.log("up");
    }
    if(keypressed == "40")
    {
        c1_down();
console.log("down");
    }
    if(keypressed == "37")
    {
        c1_left();
console.log("left");
    }
    if(keypressed == "39")
    {
        c1_right();
console.log("right");
    }
}
    {
        c2_up();
console.log("w");
    }
    if(keypressed == "87")
    {
        c2_down();
console.log("s");
    }
    if(keypressed == "83")
    {
        c2_left();
console.log("a");
    }
    if(keypressed == "68")
    {
        c2_right();
console.log("d");
    }
