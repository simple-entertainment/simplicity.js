module.exports =
{
	createRectangle: function(halfWidth, halfHeight, color)
	{
		var rectangle = new sim.Model();

		if (color === undefined)
		{
			color = [0, 0, 0, 1];
		}

		var colors = new Float32Array(16);
		colors[0] = color[0];
		colors[1] = color[1];
		colors[2] = color[2];
		colors[3] = color[3];
		colors[4] = color[0];
		colors[5] = color[1];
		colors[6] = color[2];
		colors[7] = color[3];
		colors[8] = color[0];
		colors[9] = color[1];
		colors[10] = color[2];
		colors[11] = color[3];
		colors[12] = color[0];
		colors[13] = color[1];
		colors[14] = color[2];
		colors[15] = color[3];

		rectangle.colorBuffer = new sim.Buffer();
		rectangle.colorBuffer.bind();
		rectangle.colorBuffer.setData(colors);
		rectangle.colorBuffer.unbind();

		var indices = new Uint8Array([	0, 1, 2,
						0, 2, 3]);

		rectangle.indexBuffer = new sim.Buffer(true);
		rectangle.indexCount = indices.length;
		rectangle.colorBuffer.bind();
		rectangle.colorBuffer.setData(indices);
		rectangle.colorBuffer.unbind();

		var normals = new Float32Array([0, 0, 1,
						0, 0, 1,
						0, 0, 1,
						0, 0, 1]);

		rectangle.normalBuffer = new sim.Buffer();
		rectangle.colorBuffer.bind();
		rectangle.colorBuffer.setData(normals);
		rectangle.colorBuffer.unbind();

		var texCoords = new Float32Array([	1, 0,
							0, 0,
							0, 1,
							1, 1]);

		rectangle.texCoordBuffer = new sim.Buffer();
		rectangle.colorBuffer.bind();
		rectangle.colorBuffer.setData(texCoords);
		rectangle.colorBuffer.unbind();

		var vertices = new Float32Array([	halfWidth, halfHeight, 0,
							-halfWidth, halfHeight, 0,
							-halfWidth,-halfHeight, 0,
							halfWidth,-halfHeight, 0]);

		rectangle.vertexBuffer = new sim.Buffer();
		rectangle.colorBuffer.bind();
		rectangle.colorBuffer.setData(vertices);
		rectangle.colorBuffer.unbind();

		return rectangle;
	},
	createSquare: function(halfExtent, color)
	{
		return this.createRectangle(halfExtent, halfExtent, color);
	}
};
