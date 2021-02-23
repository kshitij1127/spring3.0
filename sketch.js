let particles = [];
let springs = [];
let spacing = 20;
let gravity;
let k = 0.1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0,0.1)
  for (let i = 0; i < 20; i++) {
    particles[i] = new Particle(width/2, i * spacing);
    if (i !== 0) {
      let a = particles[i];
      let b = particles[i - 1];
      let spring = new Spring(k, spacing, a, b);
      springs.push(spring);
    }
  }

  particles[0].locked = true;
}

function draw() {
  background(112, 50, 126);

  for (let s of springs) {
    s.update();
    s.show();
  }

  beginShape()
  for (let p of particles) {
    p.applyForce(gravity);
    p.update();
    //p.show();
    vertex(p.position.x,p.position.y)
  }
  endShape()

  let tail = particles[particles.length - 1];

  if (mouseIsPressed) {
    tail.position.set(mouseX, mouseY);
    tail.velocity.set(0, 0);
  }
}

//comments
//spring.show();
//spring.update();
// bob.update();
// anchor.update();
//  bob.show();
//anchor.show();

/*

  //f = a
  velocity.add(force)
  velocity.add(gravity)
  bob.add(velocity)
  velocity.mult(0.99)
  */

//bob = new Particle(350, 300);
// anchor = new Particle(300, 0);
// spring = new Spring(0.01, 200, bob, anchor);
//gravity = createVector(0, 0.1);
