#version 330 compatibility

uniform float	uTime;
uniform bool	uEnableVert;
out vec2		vST;

const float PI	=	3.14;
const float AMP	=	0.2;		// amplitude
const float W	=	2.0;		// frequency

void
main( )
{ 
	vST = gl_MultiTexCoord0.st;
	vec3 vert = gl_Vertex.xyz;
	if(uEnableVert) {
		vert.x = gl_Vertex.x * cos(uTime*2*PI);
		vert.y = gl_Vertex.y * sin(uTime*2*PI);
	}
	else {
		vert.x = gl_Vertex.x;
		vert.y = gl_Vertex.y;
		vert.z = gl_Vertex.z;
	}
	gl_Position = gl_ModelViewProjectionMatrix * vec4( vert, 1. );
}