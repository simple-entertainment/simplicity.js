function Entity()
{
	this.components = [];
	this.transform = new sim.Matrix44();
}

module.exports = Entity;
