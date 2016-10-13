function Camera()
{
	this.projection = new simplicity.Matrix44();
	this.projection.makeIdentity();
	this.view = new simplicity.Matrix44();
	this.view.makeIdentity();
}

Camera.prototype.getTransform = function()
{
	var transform = new simplicity.Matrix44();
	transform.load(this.projection);

	var invertedView = new simplicity.Matrix44(this.view);
	invertedView.invert();

	transform.multiply(invertedView);

	return transform;
};

module.exports = Camera;
