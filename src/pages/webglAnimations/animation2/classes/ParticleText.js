import * as PIXI from 'pixi.js'
import Particle from './Particle';

export default class ParticleText{
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
		    // document.body.appendChild(canvas);
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