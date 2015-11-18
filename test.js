var drone = require('./Drone');
var droneToCloud = require('./DroneToCloud');


droneToCloud.sendData();
droneToCloud.receiveData(function(data){
	console.log(data);
});
