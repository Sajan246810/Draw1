canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
colour = "yellow";

ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth = 3;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);
//mouse_x=0;
//mouse_y= 0;
function my_mousedown(e){
    colour=document.getElementById("color").value ;
    console.log(colour);

    mouse_x = e.clientX-canvas.offsetLeft;
    mouse_y = e.clientY-canvas.offsetTop;
    console.log("x= "+mouse_x+"y = "+ mouse_y);
    circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth = 3;
ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
ctx.stroke();
}
function clear_canvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}