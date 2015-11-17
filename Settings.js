var configData = {
	iotHubConnectionString: "HostName=SwarTestiOTHub.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=1WKmOCufqUgVy7agLeHqfwT7nlElRKLx8XsTY57XUrE=",
	
	deviceId: "droneTest",
	deviceConnectionString: "HostName=SwarTestiOTHub.azure-devices.net;DeviceId=droneTest;SharedAccessKey=DOb2u0dmU/FDuo8HfjoOxZQiR8D59ofqaeG3ftutReE=",
	generationId: "635833416899465529",
	authentication : {
		symmetricKey:{
			primaryKey: "DOb2u0dmU/FDuo8HfjoOxZQiR8D59ofqaeG3ftutReE=",
			secondaryKey: "MpIlrd3aQBOeJ1MzK+PsP9r4to2qyuO7aobFxqdf89A="
			}
		},		
	 };
	 
	 module.exports.getConfigData = function()
	 {
		 return configData;
	 }