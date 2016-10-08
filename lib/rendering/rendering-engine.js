require('./J3DI');
require('./webgl-debug');
require('./webgl-utils');

function RenderingEngine(canvas)
{
	this.camera = undefined;
	this.canvas = canvas;
	this.pipeline = undefined;

	//canvas = WebGLDebugUtils.makeLostContextSimulatingCanvas(canvas);
	// tell the simulator when to lose context.
	//canvas.loseContextInNCalls(1);

	this.canvas.addEventListener('webglcontextlost', this.handleContextLost, false);
	this.canvas.addEventListener('webglcontextrestored', this.handleContextRestored, false);

	this.init();
}

RenderingEngine.prototype.init = function()
{
	global.gl = initWebGL(this.canvas.id);
	if (!gl)
	{
		console.error('Failed to initialize WebGL!');
		return;
	}

	gl.enable(gl.CULL_FACE);

	gl.enable(gl.DEPTH_TEST);
	gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

	gl.enableVertexAttribArray(0);
	gl.enableVertexAttribArray(1);
	gl.enableVertexAttribArray(2);
	gl.enableVertexAttribArray(3);

	this.onResize();
};

RenderingEngine.prototype.advance = function()
{
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	sim.entities.forEach(function(entity)
	{
		var components = entity.components;

		entity.components.forEach(function(component)
		{
			if (component instanceof Model)
			{
				this.render(entity, component);
			}
		});
	});
};

RenderingEngine.prototype.render = function(entity, model)
{
	var worldTransform = new sim.Matrix44();
	worldTransform.load(entity.transform);
	worldTransform.multiply(model.transform);

	gl.bindTexture(gl.TEXTURE_2D, model.texture);

	model.colorBuffer.bind();
	gl.vertexAttribPointer(0, 4, gl.FLOAT, false, 0, 0);

	model.normalBuffer.bind();
	gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 0, 0);

	model.vertexBuffer.bind();
	gl.vertexAttribPointer(2, 3, gl.FLOAT, false, 0, 0);

	model.texCoordBuffer.bind();
	gl.vertexAttribPointer(3, 2, gl.FLOAT, false, 0, 0);

	model.indexBuffer.bind();

	this.pipeline.programs.forEach(function(program, index)
	{
		this.pipeline.applyPass(index);

		this.camera.getTransform().setUniform(gl, gl.getUniformLocation(program, "cameraTransform"), false);
		worldTransform.setUniform(gl, gl.getUniformLocation(program, "worldTransform"), false);

		if (model.texture)
		{
			gl.uniform1i(gl.getUniformLocation(program, "samplerEnabled"), 1);
		}
		else
		{
			gl.uniform1i(gl.getUniformLocation(program, "samplerEnabled"), 0);
		}

		gl.drawElements(gl.TRIANGLES, model.indexCount, gl.UNSIGNED_BYTE, 0);
	});
};

RenderingEngine.prototype.handleContextLost = function(event)
{
	event.preventDefault();
	clearLoadingImages();

	sim.stop();
};

RenderingEngine.prototype.handleContextRestored = function()
{
	this.init();
};

RenderingEngine.prototype.onResize = function()
{
	gl.viewport(0, 0, this.canvas.width, this.canvas.height);
};

module.exports = RenderingEngine;
