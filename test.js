var drone = require('./Drone');
var droneClient = drone.Client;
var droneToCloud = require('./DroneToCloud');


function parseCommand(move){
	if(move.type == 'left'){
		droneClient.left(move.thrust);
    	}
    	if(move.type == 'right'){
		droneClient.right(move.thrust);
    	}
    	if(move.type == 'up'){
		droneClient.up(move.up);
    	}
    	if(move.type == 'down'){
		droneClient.down(move.thrust);
    	}
    	if(move.type == 'front'){
		droneClient.front(move.thrust);
    	}
    	if(move.type == 'back'){
		droneClient.back(move.thrust);
    	}
   	if(move.type == 'left'){
		droneClient.left(move.thrust);
    	}
   	if(move.type == 'clockwise'){
		droneClient.clockwise(move.thrust);
    	}
    	if(move.type == 'counterclockwise'){
		droneClient.counterClockwise(move.thrust);
   	}
	droneClient
	.after(move.time, function(){
		this.stop();
	});
}

function parseOtherCommand(type){
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

parseOtherCommand('takeoff');
droneClient.after(5000, function(){
	this.stop();
	this.land();
});

//droneToCloud.sendData();

var onReceive = function(data){
	console.log(data);
	
	//if(data.type=="movement"){
	//	parseCommand(data);
	//}
	//else if(data.type=="droneData"){
		//
	//}
	//else{
	//	parseOtherCommand(type.type);
	//}
}

droneToCloud.startReceiving(onReceive);
