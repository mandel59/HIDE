(function () { "use strict";
var Presentation = function() { };
Presentation.main = function() {
	var geometry;
	var material;
	var init = function() {
		Presentation.renderer = new THREE.CanvasRenderer();
		Presentation.renderer.setSize(window.innerWidth,window.innerHeight);
		window.document.body.appendChild(Presentation.renderer.domElement);
		Presentation.camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,1,1000);
		Presentation.camera.position.z = 500;
		Presentation.scene = new THREE.Scene();
		geometry = new THREE.CubeGeometry(200,200,200);
		material = new THREE.MeshBasicMaterial({ color : 0, wireframe : true, wireframeLinewidth : 2});
		Presentation.mesh = new THREE.Mesh(geometry,material);
		Presentation.scene.add(Presentation.mesh);
	};
	init();
	Presentation.animate(null);
};
Presentation.animate = function(e) {
	window.requestAnimationFrame(Presentation.animate);
	Presentation.mesh.rotation.x = new Date().getTime() * 0.0005;
	Presentation.mesh.rotation.y = new Date().getTime() * 0.001;
	Presentation.renderer.render(Presentation.scene,Presentation.camera);
	return true;
};
var js = {};
js.three = {};
js.three.Renderer = function() { };
js.three.Three = function() { };
js.three.Three.requestAnimationFrame = function(f) {
	return window.requestAnimationFrame(f);
};
js.three.Three.cancelAnimationFrame = function(f) {
	window.cancelAnimationFrame(id);
};
js.three.Three.CullFaceNone = 0;
js.three.Three.CullFaceBack = 1;
js.three.Three.CullFaceFront = 2;
js.three.Three.CullFaceFrontBack = 3;
js.three.Three.FrontFaceDirectionCW = 0;
js.three.Three.FrontFaceDirectionCCW = 1;
js.three.Three.BasicShadowMap = 0;
js.three.Three.PCFShadowMap = 1;
js.three.Three.PCFSoftShadowMap = 2;
js.three.Three.FrontSide = 0;
js.three.Three.BackSide = 1;
js.three.Three.DoubleSide = 2;
js.three.Three.NoShading = 0;
js.three.Three.FlatShading = 1;
js.three.Three.SmoothShading = 2;
js.three.Three.NoColors = 0;
js.three.Three.FaceColors = 1;
js.three.Three.VertexColors = 2;
js.three.Three.NoBlending = 0;
js.three.Three.NormalBlending = 1;
js.three.Three.AdditiveBlending = 2;
js.three.Three.SubtractiveBlending = 3;
js.three.Three.MultiplyBlending = 4;
js.three.Three.CustomBlending = 5;
js.three.Three.AddEquation = 100;
js.three.Three.SubtractEquation = 101;
js.three.Three.ReverseSubtractEquation = 102;
js.three.Three.ZeroFactor = 200;
js.three.Three.OneFactor = 201;
js.three.Three.SrcColorFactor = 202;
js.three.Three.OneMinusSrcColorFactor = 203;
js.three.Three.SrcAlphaFactor = 204;
js.three.Three.OneMinusSrcAlphaFactor = 205;
js.three.Three.DstAlphaFactor = 206;
js.three.Three.OneMinusDstAlphaFactor = 207;
js.three.Three.DstColorFactor = 208;
js.three.Three.OneMinusDstColorFactor = 209;
js.three.Three.SrcAlphaSaturateFactor = 210;
js.three.Three.MultiplyOperation = 0;
js.three.Three.MixOperation = 1;
js.three.Three.AddOperation = 2;
js.three.Three.RepeatWrapping = 1000;
js.three.Three.ClampToEdgeWrapping = 1001;
js.three.Three.MirroredRepeatWrapping = 1002;
js.three.Three.NearestFilter = 1003;
js.three.Three.NearestMipMapNearestFilter = 1004;
js.three.Three.NearestMipMapLinearFilter = 1005;
js.three.Three.LinearFilter = 1006;
js.three.Three.LinearMipMapNearestFilter = 1007;
js.three.Three.LinearMipMapLinearFilter = 1008;
js.three.Three.UnsignedByteType = 1009;
js.three.Three.ByteType = 1010;
js.three.Three.ShortType = 1011;
js.three.Three.UnsignedShortType = 1012;
js.three.Three.IntType = 1013;
js.three.Three.UnsignedIntType = 1014;
js.three.Three.FloatType = 1015;
js.three.Three.UnsignedShort4444Type = 1016;
js.three.Three.UnsignedShort5551Type = 1017;
js.three.Three.UnsignedShort565Type = 1018;
js.three.Three.AlphaFormat = 1019;
js.three.Three.RGBFormat = 1020;
js.three.Three.RGBAFormat = 1021;
js.three.Three.LuminanceFormat = 1022;
js.three.Three.LuminanceAlphaFormat = 1023;
js.three.Three.RGB_S3TC_DXT1_Format = 2001;
js.three.Three.RGBA_S3TC_DXT1_Format = 2002;
js.three.Three.RGBA_S3TC_DXT3_Format = 2003;
js.three.Three.RGBA_S3TC_DXT5_Format = 2004;
js.three.Three.LineStrip = 0;
js.three.Three.LinePieces = 1;
Presentation.main();
})();

//# sourceMappingURL=Presentation.js.map