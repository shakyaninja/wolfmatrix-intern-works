// var myGameComponent;

// function startGame() {
// 	myGame.start();
//   	myGameComponent = new component(20,20,"red",10,100);
// }

// var myGame = {
//     canvas : document.createElement("canvas"),
//     start : function() {
//         this.canvas.width = 90%;
//         this.canvas.height = 80%;
//         this.context = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//     }
// }

// function component(width, height, color, x, y) {
//     this.width = width;
//     this.height = height;
//     this.x = x;
//     this.y = y;    
//     ctx = myGame.context;
//     ctx.fillStyle = color;
//     ctx.fillRect(this.x, this.y, this.width, this.height);
// }

// code for getting mouse position
    // function writeMessage(canvas, message) {
    //         var context = canvas.getContext('2d');
    //         context.clearRect(0, 0, canvas.width, canvas.height);
    //         context.font = '18pt Calibri';
    //         context.fillStyle = 'black';
    //         context.fillText(message, 10, 25);
    //       }
    //       function getMousePos(canvas, evt) {
    //         var rect = canvas.getBoundingClientRect();
    //         return {
    //           x: evt.clientX - rect.left,
    //           y: evt.clientY - rect.top
    //         };
    //       }

    //       var canvas = document.getElementById('myCanvas');
    //       var context = canvas.getContext('2d');

    //       canvas.addEventListener('mousemove', function(evt) {
    //         var mousePos = getMousePos(canvas, evt);
    //         var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
    //         writeMessage(canvas, message);
    //       }, false);

// setting size of canvas
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillStyle = 'rgba(255,0,0,0.5)';
// c.fillRect(100,100,100,100);
// c.fillStyle = 'rgba(0,255,0,0.5)';
// c.fillRect(250,250,100,100);
// c.fillStyle = 'rgba(0,0,255,0.5)';
// c.fillRect(400,400,100,100);
// c.fillStyle = 'rgba(50,200,100,0.5)';
// c.fillRect(550,550,100,100);

console.log(canvas);

// line drawings
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.lineTo(100,400);
// c.strokeStyle = "#000000";
// c.stroke();

// arc/particle section
//SYNTAX: c.arc(x:int,y:int,r:int,startAngle: float(radian), EndAngle: float(radian),drawCounterClockwise:Bool);
// for (var i = 0; i <= 100; i++) {
//     var x = Math.random() *window.innerWidth;
//     var y = Math.random() *window.innerHeight;
//     // random integers from 1 to 10
//     var k = Math.floor(Math.random() * 10) + 1;
//     console.log(k);
//     c.beginPath();
//     c.arc(x,y,30,0,Math.PI*2,false);
//     switch(k){
//         case 1:
//         c.strokeStyle = 'red';
//         break;
//         case 2:
//         c.strokeStyle = 'yellow';
//         break;
//         case 3:
//         c.strokeStyle = 'cyan';
//         break;
//         case 4:
//         c.strokeStyle = 'black';
//         break;
//         case 5:
//         c.strokeStyle = 'green';
//         break;
//         case 6:
//         c.strokeStyle = 'blue';
//         break;
//         case 7:
//         c.strokeStyle = 'orange';
//         break;
//         case 8:
//         c.strokeStyle = 'pink';
//         break;
//         case 9:
//         c.strokeStyle = 'brown';
//         break;
//         case 10:
//         c.strokeStyle = 'red';
//         break;
//     }
//     c.stroke();
//     }

// mouse 
var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 30;
var minRadius = 2;

// colors 
var colorArray = [
    '#2C3E50','#E74C3C','#ECF0F1','#3498DB','#2980B9',
];


// var background = new Image();
// background.src = "https://image.freepik.com/free-photo/abstract-pool-water-surface-background-with-sun-light-reflection_74190-8510.jpg";

// // Make sure the image is loaded first otherwise nothing will draw.
// background.onload = function(){
//     c.drawImage(background,0,0);   
// }

// event listner
window.addEventListener('load',init);
window.addEventListener('mousemove',
    function(event){
        // console.log(event); for seeing the event return value
        mouse.x = event.x;
        mouse.y = event.y;
    })

// resizing browser event listner
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();    //called for the dynamically generation when resized
})


// object oriented JS OOP implementation
function particle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)]; //for random color choosing
   
    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI *2, false);
        c.fillStyle = this.color;
        c.fill();
    }
    this.update = function(){
        if(this.x+this.radius > innerWidth|| this.x-this.radius < 0){
            this.dx=-this.dx;
        }
        if(this.y+this.radius >innerHeight|| this.y-this.radius < 0){
            this.dy=-this.dy;
        }
        this.x+=this.dx;
        this.y+=this.dy;

        // interactivity acts
       if( mouse.x - this.x < 50 && mouse.x - this.x > -50
            && mouse.y - this.y <50 && mouse.y - this.y > -50){
            if(this.radius < maxRadius){
                this.radius += 1;
            }    
       }
        else if(this.radius > this.minRadius){
            this.radius -= 1;
       }

        this.draw();
    }
}

var particleArray = []; //define an array of particles or geometry you want to display 

function init(){ //loads all the geometries into array
    particleArray = []; 
    for (var i = 0; i <800; i++) {
        var radius = (Math.random() * 3) + 1;
        // spanning particle in only inside the border
        var x = Math.random() * (window.innerWidth - radius*2) + radius; //specifies x co-ordinate for center of particle spanning
        var y= Math.random() * (window.innerHeight - radius*2) + radius; //specifies y co-ordinate for center of particle spanning
        var dx =(Math.random() - 0.5)*4;
        var dy = (Math.random() - 0.5)*4;
        // every time pushes the random generated element of array to the object with specified arguements for generating 2D particle 
        particleArray.push(new particle(x,y,dx,dy,radius));
    };
}
// animate function makes initiation of all work after init function
    function animate(){
        requestAnimationFrame(animate);
        c.clearRect(0,0,innerWidth,innerHeight);
        for (var i = 0; i < particleArray.length; i++) {
            particleArray[i].update();
        };
    }

    animate();

// static implementation

// var x = Math.random() * window.innerWidth;
// var y= Math.random() * window.innerHeight;
// var dx =(Math.random() - 0.5)*10;
// var dy = (Math.random() - 0.5)*10;
// var radius = 80;
//     function animate(){
//         requestAnimationFrame(animate);
//         c.clearRect(0,0,innerWidth,innerHeight);
//         c.beginPath();
//         c.arc(x,y,radius,0,Math.PI*2,false);
//         c.strokeStyle = "rgba(0,0,255,0.5)";
//         c.stroke();
//         c.fillStyle = "rgba(0,0,255,0.5)";
//         c.fill();
//         if(x+radius > innerWidth|| x-radius < 0){
//             dx=-dx;
//         }
//         if(y+radius >innerHeight|| y-radius < 0){
//             dy=-dy;
//         }
//         x+=dx;
//         y+=dy;
//     }

//     animate();