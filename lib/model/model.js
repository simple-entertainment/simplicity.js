function Model()
{
	this.colorBuffer = undefined;
	this.indexBuffer = undefined;
	this.indexCount = 0;
	this.normalBuffer = undefined;
	this.texCoordBuffer = undefined;
	this.texture = undefined;
	this.transform = new simplicity.Matrix44();
	this.vertexBuffer = undefined;
}

module.exports = Model;
