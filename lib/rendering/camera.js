function Camera()
{
	this.projection = new J3DIMatrix4();
	this.projection.makeIdentity();
	this.view = new J3DIMatrix4();
	this.view.makeIdentity();
}

Camera.prototype.getTransform = function()
{
	var transform = new J3DIMatrix4();
	transform.load(this.projection);

	var invertedView = new J3DIMatrix4(this.view);
	invertedView.invert();

	transform.multiply(invertedView);

	return transform;
};

module.exports = Camera;
