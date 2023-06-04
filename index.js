const canvas = document.querySelector('canvas');

canvas.width = innerWidth;
canvas.height = innerHeight;

const c =   canvas.getContext('2d');


// console.log(c);



class Player{
    constructor (x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        c.fillStyle = this.color;
        c.fill()
    }

};


var x = canvas.width/2;
var y = canvas.height/2;

const player = new Player(x, y,30, 'blue');
player.draw()
console.log(player);

