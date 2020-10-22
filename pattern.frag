#version 330 compatibility

uniform float uTime;
uniform float uMin, uMax;
uniform bool uEnableFrag;
in vec2 vST;

const float PI	=	3.14;

void
main( )
{
	vec3 myColor = vec3(1.0, 0.68, 0.0);
	
	if(uEnableFrag) {		
		//If in the defined box
		if( vST.s >= uMin && vST.s <= uMax &&
			vST.t >= uMin && vST.t <= uMax) {

			//Set number of stripes
			float divider = (uMax - uMin) / 5*cos(uTime*2*PI);


			//Draw color in every other stripe
			int i;
			for(i = 1; i <= 9; i+=1) {
				if( vST.s >= uMin + divider*(i-1) && vST.s <= uMin + divider*i &&
					vST.t >= uMin && vST.t <= uMax) {
						myColor = vec3( 1.0, 0.1, 0.0);
				}
			}
		}
	}
	
	gl_FragColor = vec4( myColor,  1. );
}