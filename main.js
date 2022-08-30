const canvas = document.getElementById('canvas');

canvas.width = 200; 

const ctx = canvas.getContext('2d');

const road = new Road (canvas.width / 2, canvas.width * 0.9);
const cars = new Car(100, 100, 30, 50);
animate();


function animate() {
    cars.update(road.borders);
    canvas.height = window.innerHeight;
    ctx.save()
    ctx.translate(0, -cars.y+canvas.height*0.5)
    road.draw(ctx);
    cars.draw(ctx);
   
    ctx.restore();
    requestAnimationFrame(animate);

}