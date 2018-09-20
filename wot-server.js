// Final version
var httpServer = require('./servers/http'),
  wsServer = require('./servers/websockets'),
  resources = require('./resources/model');

// Internal Plugins
var ledsPlugin = require('./plugins/internal/ledsPlugin'), //#A
  pirPlugin = require('./plugins/internal/pirPlugin'), //#A
  dhtPlugin = require('./plugins/internal/DHT22SensorPlugin'); //#A

// Internal Plugins for sensors/actuators connected to the PI GPIOs
// If you test this with real sensors do not forget to set simulate to 'false'
var simulate = process.env.SIMULATE == "false" ? false : true;
console.log('Simulation set to: ' + simulate);

pirPlugin.start({'simulate': simulate, 'frequency': 2000}); //#B
ledsPlugin.start({'simulate': simulate, 'frequency': 10000}); //#B
dhtPlugin.start({'simulate': simulate, 'frequency': 10000}); //#B

// HTTP Server
var server = httpServer.listen(resources.pi.port, function () {
  console.log('HTTP server started...');

  // Websockets server
  wsServer.listen(server);

  console.info('Your WoT Pi is up and running on port %s', resources.pi.port);
});
