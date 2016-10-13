function Entity()
{
	this.components = [];
	this.transform = new simplicity.Matrix44();
}

module.exports = Entity;
