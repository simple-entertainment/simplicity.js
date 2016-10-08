var frameStartTime = undefined;
var requestId = undefined;

global.sim = global.simplicity =
{
	deltaTime: 0,
	engines: [],
	entities: [],
	play: function(now)
	{
		if (!now)
		{
			now = Date.now();
		}

		if (frameStartTime)
		{
			sim.deltaTime = now - frameStartTime;
		}

		frameStartTime = now;

		sim.engines.forEach(function(element, index)
		{
			element.advance();
		});

		requestId = window.requestAnimationFrame(sim.play);
	},
	stop: function()
	{
		if (requestId)
		{
			window.cancelAnimFrame(requestId);
			requestId = undefined;
		}
	},

	Buffer: require('./lib/common/buffer'),
	Camera: require('./lib/rendering/camera'),
	Entity: require('./lib/entity/entity'),
	Matrix44: require('./lib/math/matrix44'),
	Model: require('./lib/model/model'),
	ModelFactory: require('./lib/model/model-factory'),
	Pipeline: require('./lib/rendering/pipeline'),
	RenderingEngine: require('./lib/rendering/rendering-engine'),
	ScriptingEngine: require('./lib/scripting/scripting-engine'),
	Vector3: require('./lib/math/vector3')
};
