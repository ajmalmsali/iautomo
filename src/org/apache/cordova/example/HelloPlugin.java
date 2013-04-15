package org.apache.cordova.example;

import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;

import android.content.Context;
import android.content.Intent;
import android.util.Log;

public class HelloPlugin extends Plugin {

	public static final String CREATE_ACTION_STRING = "createApp";
	public static final String UPDATE_ACTION_STRING = "updateApp";
	public static final String DELETE_ACTION_STRING = "deleteApp";
	public static final String LIST_ACTION_STRING = "listApp";
	public static final String SHOW_ACTION_STRING = "showApp";
	public static final String CREATE_PARAMETER = "create";
	public static final String UPDATE_PARAMETER = "update";
	public static final String DELETE_PARAMETER = "delete";
	public static final String LIST_PARAMETER = "list";
	public String appList;

	public PluginResult execute(String action, JSONArray data, String callbackId) {
		Log.d("HelloPlugin",
				"Hello, this is a native function called from PhoneGap/Cordova!");
		Context context = this.cordova.getActivity()
				.getApplicationContext();
					Intent intent = new Intent(context, SqlAccess.class);
					intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
					DbClass obj1= new DbClass(context);
					obj1.open();
		if (CREATE_ACTION_STRING.equals(action)) {
			/*
	String testJson="[{"
   +"\"title\": \"Turn ON WIFI at HOME\","
   + "\"desc\": \"This app turns on your wifi with trigger Location\","
   +"\"author\": \"ajmal\","
   +"\"Triggers\": ["
   +"{"
   +"\"type\": \"SMS\","
   +"\"name\": \"SMSCONTENT\","
   +"\"value\": \"qwe\","
   +"\"uiValue\": \"f1\""
   +"}"
   +"],"
   +"\"Actions\": ["
   +"{"
   +"\"type\": \"WIFI\","
   +"\"name\": \"WIFI\","
   +"\"value\": \"on\","
   +"\"uiValue\": \"f\""
   +"}"
   +"]"
   +"}]";*/
		/*	obj1.open();
			String dat = obj1.getData();
			obj1.close();
			Log.e("from db", dat);*/
	Log.e("jason data passed", data.toString());
			String pData= data.toString();
			obj1.close();
				intent.putExtra("json", pData);
				intent.putExtra("action", "create");
				context.startActivity(intent);		
				return new PluginResult(PluginResult.Status.OK,
						"Yay, Successfullly created!!!");
		} else if (UPDATE_ACTION_STRING.equals(action)) {
			Log.e("in for updation", data.toString());
			String pData = null;
			String appId = null;
			try {
				 appId = data.getString(0);
				pData ="["+ data.getString(1)+"]";
			} catch (JSONException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			Log.e("pData", pData);
			Log.e("appId", appId);
			intent.putExtra("json", pData);
			intent.putExtra("appId", appId);
			    intent.putExtra("action", "update");
			    obj1.close();
				context.startActivity(intent);
				return new PluginResult(PluginResult.Status.OK,
						"Yay, updated!!!");
			}
		else if (DELETE_ACTION_STRING.equals(action)) {
			String resultType = null;//appid used for deletion
			Log.d("passed data to delete", data.toString());
			try {
				resultType = data.getString(0);
			} catch (Exception ex) {
				Log.d("HelloPlugin delete exception", ex.toString());
			}				
			obj1.close();
				intent.putExtra("action", "delete");
				intent.putExtra("appId",resultType);
				context.startActivity(intent);
				return new PluginResult(PluginResult.Status.OK,
						"Yay, deleted!!!");
			
		}else if (LIST_ACTION_STRING.equals(action)) {
			   
				String dat = obj1.getData();
				obj1.close();
				Log.e("hello plugin data", dat);
				return new PluginResult(PluginResult.Status.OK,
						dat);
		}
		else if(SHOW_ACTION_STRING.equals(action)){
			String resultType = null;//appid used for deletion
			try {
				resultType = data.getString(0);
			} catch (Exception ex) {
				Log.d("HelloPlugin error", ex.toString());
			}				
			
			String dat = obj1.getData(Integer.parseInt(resultType));
			obj1.close();
			return new PluginResult(PluginResult.Status.OK,
					dat);
		}
		return null;
	}

}
