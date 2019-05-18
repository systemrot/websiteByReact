const getParticleCode = () => {
	return `
		import * as PIXI from 'pixi.js'

		export default class Particle {
			constructor(x, y, texture, size){
				this.x = x;
				this.y = y;

				this.sprite = new PIXI.Sprite(new PIXI.Texture(texture));
				this.sprite.texture.frame = new PIXI.Rectangle(x, y, size, size);
				// console.log(this)

				
				this.sprite.x = x;
				this.sprite.y = y;

				this.speedX = 0;
				this.speedY = 0;

				this.radius = 100;
				this.friction = 0.9;
				this.gravity = 0.01;

				this.maxGravity = 0.01 + Math.random() * 0.01;

				this.dirX = Math.random() - 0.5;
				this.dirY = Math.random() - 0.5;

			}

			update(mouse){
				let distanceX = mouse.x - this.sprite.x;
				let distanceY = mouse.y - this.sprite.y;

				let distance = Math.sqrt(distanceX**2 + distanceY**2);

				let normalX = distanceX / distance;
				let normalY = distanceY / distance;

				// pixels run away
				if(distance < this.radius){
					this.gravity *= this.friction;
					this.speedX -= normalX;
					this.speedY -= normalY;
					
				}else{
					this.gravity += 0.1*(this.maxGravity - this.gravity);
				}

				// pixels get back position
				let oDistX = this.x - this.sprite.x;
				let oDistY = this.y - this.sprite.y;
				this.speedX += oDistX * this.gravity;
				this.speedY += oDistY * this.gravity;

				this.speedX *= this.friction;
				this.speedY *= this.friction;

				this.sprite.x += this.speedX;
				this.sprite.y += this.speedY;
			}
		}
	`
}

const getParticleTextCode = () => {
	return `
		import * as PIXI from 'pixi.js'
		import Particle from './Particle';

		class ParticleText{
			constructor(){
				this.app = new PIXI.Application(window.innerWidth, window.innerHeight, {
					autoresize: true
				});
				document.body.appendChild(this.app.view);
				this.particleSize = 1;
				this.particles = [];
				this.rows = 260;
				this.cols = 1100;

				this.container = new PIXI.particles.ParticleContainer(100000);
				this.app.stage.addChild(this.container);
				this.addObjects();
			}

			addObjects(){
				// load the texture we need
				PIXI.loader.add('prev', 'myText.png').load((loader, resources) => {

				    const canvas = document.createElement('canvas');
				    document.body.appendChild(canvas);
				    const ctx = canvas.getContext('2d');
				    canvas.width = this.cols*this.particleSize;
				    canvas.height = this.rows*this.particleSize;
				    ctx.drawImage(resources.prev.data, 0, 0);

					function hasFill(x, y, size){
						    for (let i =  0; i < size; i+=1) {
								for (let j =  0; j < size; j+=1) {
									if(ctx.getImageData(x+i, y+i, 1, 1).data[2] > 0) return true;
								}
						    }
					}

				    for (let i =  0; i < this.cols; i+=1) {
						for (let j =  0; j < this.rows; j+=1) {
							if(hasFill(i*this.particleSize, j*this.particleSize, this.particleSize)){
								const p = new Particle(i*this.particleSize, j*this.particleSize, resources.prev.texture, this.particleSize);
								// console.log(p.sprite.texture.frame);
								this.particles.push(p);
								this.container.addChild(p.sprite);
							}

						}
				    }

				    this.animate()
				});
			}

			animate(){
				this.app.ticker.add(() => {
					this.mouse = this.app.renderer.plugins.interaction.mouse.global;
					this.particles.forEach(p => {
						p.update(this.mouse);
					});
				     // each frame we spin the prev around a bit
				    // this.prev.rotation += 0.01;
				});
			}
		}

		let PT = new ParticleText();

	`
}

const getFirstTitle = () => {
	return `
		########################
		### File Particle.js ###
		########################
	`
} 
const getSecondsTitle = () => {
	return `
		####################
		### File main.js ###
		####################
	`
}

export {getParticleCode, getParticleTextCode, getFirstTitle, getSecondsTitle};