// 
// //var connectionString = 'HostName=SwarTestiOTHub.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=1WKmOCufqUgVy7agLeHqfwT7nlElRKLx8XsTY57XUrE=';
// 
// 
// 'use strict';
// 
// var device = require('azure-iot-device');
// //var connectionString = 'HostName=SwarTestiOTHub.azure-devices.net;DeviceId=droneTest;SharedAccessKey=DOb2u0dmU/FDuo8HfjoOxZQiR8D59ofqaeG3ftutReE=';
// var connectionString = 'HostName=SwarTestiOTHub.azure-devices.net;DeviceId=droneTest;SharedAccessKey=DOb2u0dmU/FDuo8HfjoOxZQiR8D59ofqaeG3ftutReE=';
// 
// 
// var client = device.Client.fromConnectionString(connectionString);
// console.log(client);
// 
// 
// 
// // Create a message and send it to the IoT hub every second
// setInterval(function () {
//   var windSpeed = 10 + (Math.random() * 4); // range: [10, 14]
//   var data = JSON.stringify({
//     deviceId: 'droneTest',
//     windSpeed: windSpeed
//   });
//   var message = new device.Message(data);
//   message.properties.add('Prop1', 'Val1');
//   console.log("Sending message: " + message.getData());
//   client.sendEvent(message, printResultFor('send'));
// }, 1000);
// 
// // Monitor messages from IoT Hub and print them in the console.
// setInterval(function () {
//   client.receive(function (err, msg, res) {
//     if (err) printResultFor('receive')(err, res);
//     else if (res.statusCode !== 204) {
//       console.log('Received data: ' + msg.getData());
//       client.complete(msg, printResultFor('complete'));
//     }
//   });
// }, 1000);
// 
// // Helper function to print results in the console
// function printResultFor(op) {
//   return function printResult(err, res) {
//     if (err) console.log(op + ' error: ' + err.toString());
//     if (res && (res.statusCode !== 204)) console.log(op + ' status: ' + res.statusCode + ' ' + res.statusMessage);
//   };
// }

var droneToCloud = require("./DroneToCloud");

setInterval(droneToCloud.sendData,1000);
