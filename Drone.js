var arDrone = require('ar-drone');
var client  = arDrone.createClient();
var Bancroft = require('bancroft');
var bancroft = new Bancroft();

client.config('general:navdata_demo','FALSE');
client.config('general:navdata_options',777060865);

var gpsData;
var magnetoData;

module.exports.Client = client;

client.on('navdata',function(data){
  console.log(data);
  magnetoData = data.magneto;
});
bancroft.on('location', function (location) {
        console.log(location);
        gpsData = location;
    });
    
    
// function getGpsData(){
//     bancroft.on('location', function (location) {
//         console.log(location);
//         gpsData = location;
//     });
// }

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



// module.exports.magnetodata = function(){
//     client.on('navdata', function(data){
//         return data.magneto;
//     });
// }

module.exports.droneData = function()
{
    if(gpsData == null || magnetoData == null)
    {
        return {gps:0, magneto:0};
    }
    return {gps : gpsData, magneto: magnetoData};
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

