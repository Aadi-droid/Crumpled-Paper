class Paper
{

constructor(x, y, radius)
	{
		var options = {
			isStatic:false,
            restitution:0.3,
            friction:0,
		    density:1.2

			}
		this.x=x;
		this.y=y;
		this.radius=radius;
		this.body=Bodies.circle(x, y, (this.radius-20)/2, options);
        this.image = loadImage("paper.png");
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperPos=this.body.position;		
            push()
			translate(paperPos.x, paperPos.y);
			rotate(this.body.angle)
			imageMode(CENTER);
			image(this.image, 0, 0, this.radius, this.radius);
			pop()
			
	}

  }
