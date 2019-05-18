import React from 'react';
import Phenomenon from 'phenomenon';
import './Animation1.css';
import {getVertex, getFragment, getJavaScriptdescription, cubeGeometry} from './Utils.js';

class Animation1 extends React.Component {
	componentDidMount() {
	    const phenomenon = new Phenomenon({
	    	canvas: document.querySelector('canvas'),
	    	settings: {
	    		clearColor: [1, 1, 1, 1],
	    		position: {x:0,y:0,z:1.5},
	    		shouldRender: true
	    	}
	    });
	    const multiplier = 10000;

	    function r(val){
	    	return (Math.random() - 0.5)*2*val
	    };

	    const attributes = [
	    	{
	    		name: 'aPositionStart',
	    		data: (index,total) => {
	    			return [
	    				r(1),
	    				r(1),
	    				r(1)
	    			]
	    		},
	    		size:3
	    	},
	    	{
	    		name: 'aPositionEnd',
	    		data: (index,total) => {
	    			return [
	    				r(1),
	    				r(1),
	    				r(1)
	    			]
	    		},
	    		size:3
	    	},
	    	{
	    		name: 'aDifference',
	    		data: (index,total) => {
	    			return [Math.random()]
	    		},
	    		size:1
	    	},
	    	{
	    		name: 'aPointSize',
	    		data: (index,total) => {
	    			return [Math.random() * 10];
	    		},
	    		size: 1
	    	},
	    	{
	    		name: 'aOffset',
	    		data: (index,total) => {
	    			return [Math.random() * 0.4];
	    		},
	    		size: 1
	    	}
	    ];
	    

	    const uniforms = {
	    	uProgress:{
	    		type: 'float',
	    		value: 0
	    	}
	    }
	    const fragment = getFragment();

	    const vertex = getVertex();

	    // Add an instance
	    phenomenon.add("particles", {
	    	 attributes,
	    	 multiplier,
	    	 uniforms,
	    	 vertex,
	    	 fragment,
	    	 mode: 4,
	    	 geometry: { vertices: cubeGeometry(0.01) },
	    	 onRender: instance => {
	    	 	instance.uniforms.uProgress.value += 0.05;
	    	 }
	    });
	}
	render(){
		return(
				<div className="Animation1">
					<canvas style={{width: 960 + 'px', height: 540 + 'px',marginTop: 1 + 'em'}}></canvas>
					<div className="description">
						<pre>
							{getJavaScriptdescription()}
						</pre>
					</div>
				</div>
			);
	}
}

export default Animation1;