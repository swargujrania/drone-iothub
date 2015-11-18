var settings = require("./Settings");
var device = require('azure-iot-device');
var drone = require('./Drone');

var configData = settings.getConfigData();
console.log(configData);

var client = device.Client.fromConnectionString(configData.deviceConnectionString);
console.log(client);

var gpsData = drone.gpsdata();//{latitude: 0, longitude: 0};//
var magnetoData = {mx:0, my:0, mz:0};//drone.magnetodata();
var data = {gps : gpsData, magneto: magnetoData};
console.log("Payload", data);
module.exports.sendData = function()
{
	var message = new device.Message(JSON.stringify(data));
	message.properties.add('Timestamp', new Date());
	console.log("Sending message: " + message.getData());
	client.sendEvent(message, printResultFor('send'));
}

module.exports.receiveData = function(cb){	
	client.receive(function (err, msg, res) {
     		if (err) printResultFor('receive')(err, res);
     		else if(res.statusCode){
			cb(msg);
       			console.log('Received data: ' + msg.getData());
      			client.complete(msg, printResultFor('complete'));
    		}
   	});
}


function printResultFor(op) {
  return function printResult(err, res) {
    if (err) console.log(op + ' error: ' + err.toString());
    if (res && (res.statusCode !== 204)) console.log(op + ' status: ' + res.statusCode + ' ' + res.statusMessage);
  };
}
