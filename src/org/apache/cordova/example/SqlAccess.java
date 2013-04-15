package org.apache.cordova.example;



import org.apache.cordova.api.LOG;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

public class SqlAccess extends Activity{
	static DbClass obj;
	String data,action,appId;
	 @Override
	    public void onCreate(Bundle savedInstanceState) {
	        super.onCreate(savedInstanceState);
	      //  setContentView(R.layout.main);
	        obj= new DbClass(SqlAccess.this);
	         data= getIntent().getStringExtra("json");
	         action = getIntent().getStringExtra("action");
	        if(action.equals("create")){
	        create();
	        
	        }//closing of create 
	        else if(action.equals("delete")){
	        	appId=getIntent().getStringExtra("appId");
	        	delete();
	        }//closing of delete
	        else if(action.equals("myapps")){
	        	myApps();
	        }//closing of myapps
	        else if(action.equals("update")){
	        	appId=getIntent().getStringExtra("appId");
	        	
	        	update();
	        }//closing of update
	        
	        finish();
	 }
	private void update() {
		// TODO Auto-generated method stub
		delete();
		create();
		
	}
	private void myApps() {
		// TODO Auto-generated method stub
		
	}
	private void delete() {
		// TODO Auto-generated method stub
		obj.open();
		obj.deleteEntry(Integer.parseInt(appId));
		obj.close();
		
	}
	private void create() {
		// TODO Auto-generated method stub
		JSONArray x,triggers,actions;
        JSONObject xObj,yObj;
        Intent intent = null;
        boolean flag = false;
        long appId;
        String title,desc,author,type = null,name = null,value = null,uiValue;
        try {
        	obj.open();
        	
			 x=new JSONArray(data);
			 LOG.e("new json array", x.toString());
			 xObj = x.getJSONObject(0);
			 title = xObj.getString("title");
			 desc = xObj.getString("desc");
			 author = xObj.getString("author");
			 triggers = xObj.getJSONArray("triggers");
			 actions = xObj.getJSONArray("actions");
			 String state="on";
			 int trigLen = triggers.length();
			 int actLen = actions.length();
			 Log.d("trig len ->" +trigLen , "action length -> "+actLen);
			 //author inserted here instead of state
			 appId = obj.createAppEntry(0, title, desc, state);
			 String date = null,time = null,lat= null, lon = null;
			 
			 obj.close();
			 String[] dParts = null;
			 String[] tParts = null;
			 for(int i=0;i<trigLen;i++){
				 yObj = triggers.getJSONObject(i);
				 type = yObj.getString("type");
				 value = yObj.getString("value");
				 uiValue = yObj.getString("uiValue");
				 name = yObj.getString("name");
				 Log.e("name ->>", name+" type -->> "+type);
				 if(name.equals("time")){
					 time=value;
					 tParts = time.split(":");
					 Log.e("time -> ", tParts[0]+ ":" +tParts[1]);
				 }
				 if(name.equals("date")){
					 date=value;
					 dParts = date.split("/");
					 Log.e("date -> ", dParts[0]+ " /" +dParts[1]+ " / " + dParts[2]);
				 }
				 if(name.equals("latitude")){
					 lat = value;
				 }
				 if(name.equals("longitude")){
					 lon = value;
				 }				 
				 
				 obj.open();
				 obj.createTriggerEntry((int) appId, type, name, value, uiValue);
				 
				 obj.close();
				
			 }
			 if(type.equals("Time")){
				 flag = true;
				 Log.d("settingTime", "time");
				  intent = new Intent(getBaseContext(),AlarmExampleActivity.class);
				  Log.d("settingTimeActivity", "timeActivity");
					  
				 intent.putExtra("hour",tParts[0]);
				 intent.putExtra("minute",tParts[1]);
				 intent.putExtra("day",dParts[0]);
				 intent.putExtra("month",dParts[1]);
				 intent.putExtra("year",dParts[2]);
				 intent.putExtra("appId", ""+appId);
				 Log.d("settingTimeActivity", "setting the bundle");
				 
				// startActivity(intent);		
				 Log.d("settingTimeActivity", "calling the activity");
				  
					
			 }
			 if(type.equals("Location")){
				 flag = true;
				  intent = new Intent(getBaseContext(),ProxAlertActivity.class);
				 intent.putExtra("latitude",lat);
				 intent.putExtra("longitude",lon);
				 intent.putExtra("appId", ""+appId);
				// startActivity(intent);	
			 }
			 for(int i=0;i<actLen;i++){
				 yObj = actions.getJSONObject(i);
				 type = yObj.getString("type");
				 value = yObj.getString("value");
				 uiValue = yObj.getString("uiValue");
				 name = yObj.getString("name");
				 obj.open();
				 obj.createActionEntry((int) appId, type, name, value, uiValue);
				 obj.close();
				 
			 }
			
			 if(flag){
				 intent.putExtra("actionName", name);
				 Log.d("action name", name);
				 intent.putExtra("actionValue", value);
				 Log.d("action value", value);
				 startActivity(intent);
			 }
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			obj.close();
			e.printStackTrace();
		}
		
	}

}
