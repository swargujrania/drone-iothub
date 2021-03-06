var drone = require('./Drone');
var droneClient = drone.Client;
var droneToCloud = require('./DroneToCloud');


function parseCommand(move){
	if(move.Direction == 'left'){
		droneClient.left(move.thrust);
    	}
    	if(move.Direction == 'right'){
		droneClient.right(move.thrust);
    	}
    	if(move.Direction == 'up'){
		droneClient.up(move.up);
    	}
    	if(move.Direction == 'down'){
		droneClient.down(move.thrust);
    	}
    	if(move.Direction == 'forward'){
		droneClient.front(move.thrust);
    	}
    	if(move.Direction== 'backward'){
		droneClient.back(move.thrust);
    	}
   	if(move.Direction == 'left'){
		droneClient.left(move.thrust);
    	}
   	if(move.Direction == 'clock'){
		droneClient.clockwise(move.thrust);
    	}
    	if(move.Direction == 'counterClock'){
		droneClient.counterClockwise(move.thrust);
   	}
	droneClient
	.after(move.TimeInMilliSecond, function(){
		this.stop();
	});
}

function parseOtherCommand(type){
	console.log(type);
	if(type=='takeoff'){
		droneClient.takeoff();
	}
	else if(type=='land'){
		droneClient.land();
	}
	else if(type=='flattrim'){
		droneClient.ftrim();
	}
	else if(type=='stop'){
		droneClient.stop();
	}
}


var onReceive = function(data){
	console.log(data);
	if(data.Type=="move"){
		parseCommand(data);
	}
	else if(data.Type=="droneData"){
		droneToCloud.sendData();
	}
	else{
		parseOtherCommand(data.Type);
	}
}

droneToCloud.startReceiving(onReceive);
