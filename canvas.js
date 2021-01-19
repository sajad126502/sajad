canvas = document.querySelector('.can');
parent=document.querySelector(".myphotodiv")
c = canvas.getContext('2d')
who=document.querySelector(".who")
canvas.width=parent.offsetWidth;
canvas.height=parent.offsetHeight;
who.style.marginTop=`${canvas.height}px`
/*for(i=0;i<100;i++)
{
    
    let x =Math.random()*50;
    c.fillRect(x,x,50,50)
}
c.beginPath();
c.lineWidth="10"
c.moveTo(10,10);
c.lineTo(200,10)
c.lineTo(200,100)
c.lineTo(15,100)
c.lineTo(15,10)
c.stroke()


c.strokeStyle="red"

*/
/*circle
c.arc(x,y,radius,start_angle,end_angle,anticlockwise?)
c.lineWidth="1"

setInterval(function(){
    let h=Math.random()*window.innerWidth
    let x=Math.random()*window.innerWidth
    let y=Math.random()*window.innerHeight
    c.strokeStyle=`rgb(${y*Math.random()},${x*Math.random()},${h*Math.random()})`;
    c.beginPath();
    c.arc(x,y,20,0,Math.PI*2,false)
    c.stroke()
},1

)
*/
var colobj={
    0:"#FFA500",
    1:"#800080",
    3:"#00FFFF",
    4:"#00FF00",
    5:"#800000"

}
var mypos = {
    mx: undefined,
    my: undefined
}

canvas.addEventListener('mousemove', function (event) {

    mypos.mx = event.layerX
    mypos.my = event.layerY
  
    console.log(event)
})
function circle(x, y, rad, dx, dy,col) {
    this.x = x;
    this.y = y;
    this.rad = rad
    this.dx = dx;
    this.dy = dy;
    this.col=col;

    this.makecircle = function () {
        
        c.beginPath()
        c.arc(this.x, this.y, this.rad, Math.PI * 2, false)
        c.fillStyle=`${col}`
        c.fill()
        c.strokeStyle=`${col}`
        c.stroke()
    }
    this.update = function () {

        if ((this.x + this.rad) > canvas.width|| (this.x - this.rad) < 0)
            this.dx = -this.dx
        this.x += -this.dx;
        if ((this.y + this.rad) > canvas.height || (this.y - this.rad) < 0)
            this.dy = -this.dy
        this.y += -this.dy;


        if (this.x - mypos.mx <50 && this.x - mypos.mx > -50 && this.y - mypos.my < 50 && this.y - mypos.my >-50) {
            if (this.rad < 30)
                this.rad+=2
        }
        else {
            if (this.rad > 5)
                this.rad-=2;
        }
     
    }


}
let arr = [];
for (let i = 0; i < 251; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let dx = (Math.random() - 0.6) * 1.5;
    let dy = (Math.random() - 0.6) * 1.5;
 let col=colobj[Math.ceil((Math.random()*(Object.keys(colobj).length)))]
    let rad = (Math.random()*3)+1;
    cir = new circle(x, y, rad, dx, dy,col)
    arr.push(cir);

}
function iter() {
    c.clearRect(0, 0, canvas.width, canvas.height);


    for (let i = 0; i < 251; i++) {

        arr[i].makecircle()
        arr[i].update()
    }


    requestAnimationFrame(iter);
    cir.makecircle();


}
window.addEventListener('resize',function(){
    canvas.width=parent.offsetWidth;
    canvas.height=parent.offsetHeight;
   // window.location.reload()
})
iter();

