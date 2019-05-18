import React from 'react';
import * as PIXI from 'pixi.js'
import Particle from './classes/Particle';
import ParticleText from './classes/ParticleText';
import './Animation2.css';
import {getParticleCode, getParticleTextCode, getFirstTitle, getSecondsTitle} from './Utils';

const init = () => {
	let PT = new ParticleText();
}

class Animation2 extends React.Component {
	componentDidMount(){
		const canvas = document.getElementsByTagName('canvas')[0];
		canvas.style = 'width:100%; height:100%;';
		const destination = document.getElementsByClassName('Animation2')[0];
		destination.appendChild(canvas);
		// Tmp block starts
		const descOfAnimation = document.getElementsByTagName('pre')[0];
		destination.style = 'background-color:black;';
		descOfAnimation.style = 'overflow:scroll; width:50%; height:100%; position:absolute; right:0; color:white;';
		// Tmp block ends
	}
	render(){
		return(
				<div className="Animation2">
					<div>{init()}</div>
					<pre>`
						{getFirstTitle()}
						{getParticleCode()}
						{getSecondsTitle()}
						{getParticleTextCode()}
					</pre>
				</div>
			);
	}
}

export default Animation2;