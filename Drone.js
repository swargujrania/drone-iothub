var arDrone = require('ar-drone');
var client  = arDrone.createClient();
var Bancroft = require('bancroft');
var bancroft = new Bancroft();

bancroft.on('connect', function (data) {
  //console.log('connected', data);
});

client.config('general:navdata_demo','FALSE');
client.config('general:navdata_options',777060865);


module.exports.takeoff = function(){
    client.takeoff()
    .after(2000,function(){
        client.ftrim();
    });
}

module.exports.land = function(){
    client.stop();
    client.land();
}

module.exports.gpsdata = function(){
    bancroft.on('location', function (location) {
        return location;
    });
}

module.exports.magnetodata = function(cb){
    client.on('navdata', function(data){
		cb(data.magneto);
	});
}

module.exports.move = function(move){
    console.log(move);
    if(move.left){
	client.left(move.left);
	console.log(move.left);
    }
    if(move.left){
	client.left(move.left);
    }
    if(move.right){
	client.right(move.right);
    }
    if(move.up){
	client.up(move.up);
    }
    if(move.down){
	client.down(move.down);
    }
    if(move.front){
	client.front(move.front);
    }
    if(move.back){
	client.back(move.back);
    }
    if(move.left){
	client.left(move.left);
    }
    if(move.cwise){
	client.clockwise(move.cwise);
    }
    if(move.ccwise){
	client.counterClockwise(move.ccwise);
    }
}

module.exports.calibrate = function(){
    client.takeoff();
    client.after(2000,function(){
	this.calibrate(0);
    });
}

