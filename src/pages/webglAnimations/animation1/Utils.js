const getVertex = () => {
	return `
		attribute vec3 aPositionStart;
		attribute vec3 aPositionEnd;
		attribute vec3 aPosition;
		attribute float aPointSize;
		attribute float aDifference;
		attribute float aOffset;
		
		uniform mat4 uProjectionMatrix;
		uniform mat4 uModelMatrix;
		uniform mat4 uViewMatrix;
		uniform float uProgress;

		varying float vColor;
		
		mat4 rotationMatrix(vec3 axis, float angle) {
		    axis = normalize(axis);
		    float s = sin(angle);
		    float c = cos(angle);
		    float oc = 1.0 - c;
		    
		    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
		                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
		                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
		                0.0,                                0.0,                                0.0,                                1.0);
		}

		vec3 rotate(vec3 v, vec3 axis, float angle) {
			mat4 m = rotationMatrix(axis, angle);
			return (m * vec4(v, 1.0)).xyz;
		}


		void main(){
			gl_PointSize = 10.0 * aPointSize;
			float newp = sin(uProgress / 10.);

			float tProgress = clamp(aOffset - newp, 0., 1.);


			vColor = aDifference;
			vec3 rotatedPosition = rotate(aPosition, vec3(1.,1.,1.), tProgress * 6.28);
			vec3 newPosition = mix(aPositionStart, aPositionEnd, tProgress);
			// newPosition.z += fract(uProgress / 19.);
			gl_Position = uProjectionMatrix * uModelMatrix * uViewMatrix * vec4(newPosition + rotatedPosition, 1.);
		}
	`
}


const getFragment = () => {
	return `
		precision mediump float;

		varying float vColor;
		void main(){
			gl_FragColor = vec4(vColor,0.,0.,1.);
		}
	`
}

const getJavaScriptdescription = () => {
	return `
		import Phenomenon from 'phenomenon';

		const multiplier = 1000;

		// Create a renderer
		const phenomenon = new Phenomenon({
			canvas: document.querySelector('canvas'),
			settings: {
				clearColor: [1, 1, 1, 1],
				position: {x:0,y:0,z:1.5},
				shouldRender: true
			}
		});

		function r(val){
			return (Math.random() - 0.5)*2*val
		}

		function cubeGeometry(size) {
		  return [
		    { x: size, y: size, z: size },
		    { x: size, y: -size, z: size },
		    { x: size, y: size, z: -size },
		    { x: size, y: -size, z: size },
		    { x: size, y: -size, z: -size },
		    { x: size, y: size, z: -size },
		    { x: -size, y: size, z: -size },
		    { x: -size, y: -size, z: -size },
		    { x: -size, y: size, z: size },
		    { x: -size, y: -size, z: -size },
		    { x: -size, y: -size, z: size },
		    { x: -size, y: size, z: size },
		    { x: -size, y: size, z: -size },
		    { x: -size, y: size, z: size },
		    { x: size, y: size, z: -size },
		    { x: -size, y: size, z: size },
		    { x: size, y: size, z: size },
		    { x: size, y: size, z: -size },
		    { x: -size, y: -size, z: size },
		    { x: -size, y: -size, z: -size },
		    { x: size, y: -size, z: size },
		    { x: -size, y: -size, z: -size },
		    { x: size, y: -size, z: -size },
		    { x: size, y: -size, z: size },
		    { x: -size, y: size, z: size },
		    { x: -size, y: -size, z: size },
		    { x: size, y: size, z: size },
		    { x: -size, y: -size, z: size },
		    { x: size, y: -size, z: size },
		    { x: size, y: size, z: size },
		    { x: size, y: size, z: -size },
		    { x: size, y: -size, z: -size },
		    { x: -size, y: size, z: -size },
		    { x: size, y: -size, z: -size },
		    { x: -size, y: -size, z: -size },
		    { x: -size, y: size, z: -size }
		  ];
		}

		// instance buffer attribute
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
		]

		const uniforms = {
			uProgress:{
				type: 'float',
				value: 0
			}
		}
		const fragment = \`
			precision mediump float;

			varying float vColor;
			void main(){
				gl_FragColor = vec4(vColor,0.,0.,1.);
			}
		\`;

		const vertex = \`

			attribute vec3 aPositionStart;
			attribute vec3 aPositionEnd;
			attribute vec3 aPosition;
			attribute float aPointSize;
			attribute float aDifference;
			attribute float aOffset;
			
			uniform mat4 uProjectionMatrix;
			uniform mat4 uModelMatrix;
			uniform mat4 uViewMatrix;
			uniform float uProgress;

			varying float vColor;
			
			mat4 rotationMatrix(vec3 axis, float angle) {
			    axis = normalize(axis);
			    float s = sin(angle);
			    float c = cos(angle);
			    float oc = 1.0 - c;
			    
			    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
			                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
			                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
			                0.0,                                0.0,                                0.0,                                1.0);
			}

			vec3 rotate(vec3 v, vec3 axis, float angle) {
				mat4 m = rotationMatrix(axis, angle);
				return (m * vec4(v, 1.0)).xyz;
			}


			void main(){
				gl_PointSize = 10.0 * aPointSize;
				float newp = sin(uProgress / 10.);

				float tProgress = clamp(aOffset - newp, 0., 1.);


				vColor = aDifference;
				vec3 rotatedPosition = rotate(aPosition, vec3(1.,1.,1.), tProgress * 6.28);
				vec3 newPosition = mix(aPositionStart, aPositionEnd, tProgress);
				// newPosition.z += fract(uProgress / 19.);
				gl_Position = uProjectionMatrix * uModelMatrix * uViewMatrix * vec4(newPosition + rotatedPosition, 1.);
			}
		\`;

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
	`

}

function cubeGeometry(size) {
  return [
    { x: size, y: size, z: size },
    { x: size, y: -size, z: size },
    { x: size, y: size, z: -size },
    { x: size, y: -size, z: size },
    { x: size, y: -size, z: -size },
    { x: size, y: size, z: -size },
    { x: -size, y: size, z: -size },
    { x: -size, y: -size, z: -size },
    { x: -size, y: size, z: size },
    { x: -size, y: -size, z: -size },
    { x: -size, y: -size, z: size },
    { x: -size, y: size, z: size },
    { x: -size, y: size, z: -size },
    { x: -size, y: size, z: size },
    { x: size, y: size, z: -size },
    { x: -size, y: size, z: size },
    { x: size, y: size, z: size },
    { x: size, y: size, z: -size },
    { x: -size, y: -size, z: size },
    { x: -size, y: -size, z: -size },
    { x: size, y: -size, z: size },
    { x: -size, y: -size, z: -size },
    { x: size, y: -size, z: -size },
    { x: size, y: -size, z: size },
    { x: -size, y: size, z: size },
    { x: -size, y: -size, z: size },
    { x: size, y: size, z: size },
    { x: -size, y: -size, z: size },
    { x: size, y: -size, z: size },
    { x: size, y: size, z: size },
    { x: size, y: size, z: -size },
    { x: size, y: -size, z: -size },
    { x: -size, y: size, z: -size },
    { x: size, y: -size, z: -size },
    { x: -size, y: -size, z: -size },
    { x: -size, y: size, z: -size }
  ];
};

export {getFragment,getVertex,getJavaScriptdescription,cubeGeometry};