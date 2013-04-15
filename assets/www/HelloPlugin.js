var HelloPlugin = {     
callCreateAppFunction: function (success, fail, resultType) { 
      return cordova.exec( success, fail, "org.apache.cordova.example.HelloPlugin", "createApp", [resultType]);     
	  },
callUpdateAppFunction: function (success, fail, resultType,jsondata) { 
var myData = new Array();
myData[0] = resultType;
myData[1] = jsondata;
      return cordova.exec( success, fail, "org.apache.cordova.example.HelloPlugin", "updateApp", myData);     
	  },
callMyAppFunction: function (success, fail, resultType) { 
      return cordova.exec( success, fail, "org.apache.cordova.example.HelloPlugin", "listApp", [resultType]);     
	  },
 callShowAppFunction: function (success, fail, resultType) { 
      return cordova.exec( success, fail, "org.apache.cordova.example.HelloPlugin", "showApp", [resultType]);     
	  },
 callDeleteAppFunction: function (success, fail, resultType) { 
      return cordova.exec( success, fail, "org.apache.cordova.example.HelloPlugin", "deleteApp", [resultType]);     
	  }
 };