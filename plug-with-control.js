var mqtt = require('mqtt');
var config = require('./config.json'); 
resources = require('./resources/model');

var thngId=config.thngId; 
var thngUrl='/thngs/'+thngId;
var thngApiKey=config.thngApiKey;

var pirModel = resources.pi.sensors.pir;
var tempModel = resources.pi.sensors.temperature;
var humiModel = resources.pi.sensors.humidity;
var led1Model = resources.pi.actuators.leds['1'];
var led2Model = resources.pi.actuators.leds['2'];

var status=false;
var updateInterval;

var client = mqtt.connect("mqtts://mqtt.evrythng.com:8883", {
  username: 'authorization',
  password: thngApiKey 
});

client.on('connect', function () {
  client.subscribe(thngUrl+'/properties/');
  client.subscribe(thngUrl+'/actions/all'); // #A
  updateProperty('livenow',true);
  // if (! updateInterval) updateInterval = setInterval(updateProperties, 5000);

  resources.observe(changes => {
    changes.forEach(change => {
      // if(checkModel(pirModel,change)){
      //   updateProperty ('pir',change.value);
      // }
      // else if(checkModel(tempModel,change)){
      //   updateProperty ('temp',change.value);
      // }
      // else if(checkModel(humiModel,change)){
      //   updateProperty ('humi',change.value);
      // }
      // else if(checkModel(led1Model,change)){
      //   updateProperty ('led1',change.value);
      // }
      // else if(checkModel(led2Model,change)){
      //   updateProperty ('led2',change.value);
      // }
    });
  });
});

function checkModel(model, change){
  if (change.type === 'update' && model === change.path.slice(0, -1).reduce((obj, i) => obj[i], resources)) {return true;}
  return false;
}

client.on('message', function(topic, message) {
  var resources = topic.split('/');
  if (resources[1] && resources[1] === "thngs"){ // #B
    if (resources[2] && resources[2] === thngId){  // #C
      if (resources[3] && resources[3] === "properties"){ //#D
        var property = JSON.parse(message);
        console.log('Property was updated: '+property[0].key+'='+property[0].value); 
      } else if (resources[3] && resources[3] === "actions"){ //#E
        var action = JSON.parse(message);
        handleAction(action); 
      }
    }
  }
  // if(property[0].key == "led1"){
  //   resources.actuators.leds['1'] = property[0].value;
  // }
  // else if(property[0].key == "led2"){
  //   resources.actuators.leds['2'] = property[0].value;
  // }

});

function handleAction(action) {
  switch(action.type) { // #F
    case '_setStatus':
      console.log('ACTION: _setStatus changed to: '+action.customFields.status); // #G
      status=Boolean(action.customFields.status);
      updateProperty ('status',status);
      /* Do something else too */
      break;
    case '_setLevel':
      console.log('ACTION: _setLevel changed to: '+action.customFields.level);
      break;
    default:
      console.log('ACTION: Unknown action type: '+action.type);
      break;
  }
}

//#A Subscribe to all actions on this thing
//#B Verify if the MQTT message is on a Thng
//#C Verify if the message is for the current Thng
//#D Check if a property was changed; if so display it
//#E Was it an action? If so call handleAction()
//#F Check the type of this action
//#G If action type is _setStatus, display the new value and do something with it


function updateProperties() {
  var voltage = (219.5 + Math.random()).toFixed(3); // #H
  updateProperty ('voltage',voltage);

  updateProperty ('test2','3');

  var current = (Math.random()*10).toFixed(3); // #I
  if (status==false) current = 0.001;
  updateProperty ('current',current);

  var power = (voltage * current * (0.6+Math.random()/10)).toFixed(3); // #J
  updateProperty ('power',power);
}

function updateProperty(property,value) {
  client.publish(thngUrl+'/properties/'+property, '[{"value": '+value+'}]');
}

process.on('SIGINT', function() { 
  updateProperty('livenow',false);
  clearInterval(updateInterval);
	client.end();
  process.exit();
});