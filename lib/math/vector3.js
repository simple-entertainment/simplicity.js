require('./J3DIMath');

J3DIVector3.prototype.add = function(other)
{
	this[0] += other[0];
	this[1] += other[1];
	this[2] += other[2];
};

J3DIVector3.prototype.copyValues = function(other)
{
	this[0] = other[0];
	this[1] = other[1];
	this[2] = other[2];
};

J3DIVector3.prototype.equals = function(other)
{
	return this[0] === other[0] && this[1] === other[1] && this[2] === other[2];
};

J3DIVector3.prototype.multiply = function(multiplier)
{
	this[0] *= multiplier;
	this[1] *= multiplier;
	this[2] *= multiplier;
};

J3DIVector3.prototype.subtract = function(other)
{
	this[0] -= other[0];
	this[1] -= other[1];
	this[2] -= other[2];
};

module.exports = J3DIVector3;
