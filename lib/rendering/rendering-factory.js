var J3DI = require('./J3DI');

module.exports =
{
	createTexture: function(image)
	{
		return J3DI.loadImageTexture(gl, image);
	},
	isLoadingTextures: function()
	{
		return J3DI.g_loadingImages;
	}
};
