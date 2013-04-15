 function callCreateAppPlugin( returnSuccess )
 {     
 	HelloPlugin.callCreateAppFunction( nativePluginResultHandler, nativePluginErrorHandler, returnSuccess ); 
 }
 
 function callUpdateAppPlugin( returnSuccess,jsondata )
 {     
 	HelloPlugin.callUpdateAppFunction( nativePluginResultHandler, nativePluginErrorHandler, returnSuccess,jsondata ); 
 } 
 
 function callDeleteAppPlugin( returnSuccess )
 {     
 	HelloPlugin.callDeleteAppFunction( nativePluginResultHandler, nativePluginErrorHandler, returnSuccess ); 
 } 
 
 function callMyAppPlugin( returnSuccess ,showMyListSync)
 {     
 	HelloPlugin.callMyAppFunction( showMyListSync, nativePluginErrorHandler, returnSuccess ); 
 }
  
 function callShowAppPlugin( returnSuccess ,createPageSync)
 {     
 	HelloPlugin.callShowAppFunction( createPageSync, nativePluginErrorHandler, returnSuccess ); 
 } 
 
 x="";
 function nativePluginResultHandler (result) 
 {  
 	x= result;
	return x; 
 }
 function nativePluginErrorHandler (error)
 {
  	alert("ERROR: \r\n"+error );
 }