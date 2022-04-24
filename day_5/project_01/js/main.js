

// setting size of canvas
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

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
    for (var i = 0; i < 1000; i++) {
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

