function Pipeline(vertexShader, fragmentShader)
{
	this.programs = [];
	this.addPass(vertexShader, fragmentShader);
}

Pipeline.prototype.addPass = function(vertexShader, fragmentShader)
{
	var program = simpleSetup(gl, vertexShader, fragmentShader, ["color", "normal", "position", "texCoord"], [0, 0, 0, 0], 10000);

	// Hard code the shader sampler to 0.
	gl.uniform1i(gl.getUniformLocation(program, "sampler"), 0);

	this.programs.push(program);
};

Pipeline.prototype.applyPass = function(pass)
{
	gl.useProgram(this.programs[pass]);
};

module.exports = Pipeline;
