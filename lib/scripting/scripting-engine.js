function ScriptingEngine()
{
}

ScriptingEngine.prototype.advance = function()
{
	sim.entities.forEach(function(entity)
	{
		entity.components.forEach(function(component)
		{
			if (typeof component.execute === 'function')
			{
				component.execute();
			}
		});
	});
};

module.exports = ScriptingEngine;
