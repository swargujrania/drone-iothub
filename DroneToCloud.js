var settings = require("./Settings");
var device = require('azure-iot-device');
//var drone = require('Drone');

var configData = settings.getConfigData();
console.log(configData);

var client = device.Client.fromConnectionString(configData.deviceConnectionString);
console.log(client);

var gpsData = {latitude: 0, longitude: 0};//drone.gpsdata();
var magnetoData = {mx:0, my:0, mz:0};//drone.magnetodata();
var data = {gps : gpsData, magneto: magnetoData};

module.exports.sendData = function()
{
	var message = new device.Message(JSON.stringify(data));
	message.properties.add('Timestamp', new Date());
	console.log("Sending message: " + message.getData());
	client.sendEvent(message, printResultFor('send'));
}

function printResultFor(op) {
  return function printResult(err, res) {
    if (err) console.log(op + ' error: ' + err.toString());
    if (res && (res.statusCode !== 204)) console.log(op + ' status: ' + res.statusCode + ' ' + res.statusMessage);
  };
}
