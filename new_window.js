(function(jwplayer){var minPlayerVersion='7.0',pluginName='new_window',pluginVersion='0.0.2b';var _T=function(s){return jwplayer._T(s,_);},_={eng:{new_window:'New window'},cht:{new_window:'在新視窗中播放'},chs:{new_window:'在新窗口中播放'}};var template=function(player,config,div){var images={new_window:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAQAAABuvaSwAAAAeklEQVR42r2Phw3FUAgD304sySws6V/uV55RohaTnpN1rOujbBMzWuqpI/QYVqiUyue1DKz4DnZc/5sBXZLvHS5e/s6glecO52YuwrOHmxjbGNiiKfEOMcAI4Mz/WYMVAxgFA3d3wLOwdjiWjW8uP3tzaIwRVM6zLskN/4V6x5JopH8AAAAASUVORK5CYII='};player.on('ready',function(){player.addButton(images.new_window,_T('new_window'),function(){player.pause(true);window.open(config.url);},'btn-new-window');});};jwplayer().registerPlugin(pluginName,minPlayerVersion,template);console.log('[JW Player] Plugin loaded: '+pluginName+' v'+pluginVersion);})(jwplayer);