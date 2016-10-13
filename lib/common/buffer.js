function Buffer(forIndices)
{
	this.buffer = gl.createBuffer();
	this.forIndices = forIndices;
}

Buffer.prototype.bind = function()
{
	gl.bindBuffer(getGLBufferType(this.forIndices), this.buffer);
};

Buffer.prototype.setData = function(data)
{
	this.bind();
	gl.bufferData(getGLBufferType(this.forIndices), data, gl.STATIC_DRAW);
};

Buffer.prototype.unbind = function()
{
	gl.bindBuffer(getGLBufferType(this.forIndices), null);
};

module.exports = Buffer;

function getGLBufferType(forIndices)
{
	if (forIndices)
	{
		return gl.ELEMENT_ARRAY_BUFFER;
	}
	else
	{
		return gl.ARRAY_BUFFER;
	}
}
