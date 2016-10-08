function Model()
{
	this.colorBuffer = null;
	this.indexBuffer = null;
	this.indexCount = 0;
	this.normalBuffer = null;
	this.texCoordBuffer = null;
	this.texture = null;
	this.transform = new sim.Matrix44();
	this.vertexBuffer = null;
}

module.exports = Model;
