package org.apache.cordova.example;

import org.apache.cordova.api.LOG;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;

public class ProximityIntentReceiver extends BroadcastReceiver {
	int length = DbClass.len;
	String Action1[][] = new String[length][4];
	String triggerValue = null, appState = "";
	String[] ActionType, ActionValue;
	// = new String[length];

	// ActionValue = "";
	String number = "", msgbody = "";

	@Override
	public void onReceive(Context context, Intent intent) {
		Bundle b = intent.getExtras();
		LOG.d("appId",b.getString("appId") );
		int appId = Integer.parseInt(b.getString("appId"));
		
		DbClass obj = new DbClass(context);
		obj.open();
		try{
		appState = obj.getAppState(appId);
		}catch(Exception e){
			e.printStackTrace();
		}
		if (appState.contentEquals("on")) {
			ActionType = new String[10];
			ActionValue = new String[10];
			ActionType = obj.getActionType(appId);
			int actTypeLen = DbClass.len;
			for (int i = 0; i < actTypeLen; i++) {
				if (ActionType[i].contentEquals("Send_SMS")) {
					number = obj.getDetails(appId, "send_msg_number");
					msgbody = obj.getDetails(appId, "send_msg_content");
					Intent call1 = new Intent(context, SendSMS.class);
					call1.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
					call1.putExtra("number", number);
					call1.putExtra("body", msgbody);
					context.startActivity(call1);

				} else {

					ActionValue = obj.getActionValue(appId);
					doAction(ActionType[i], ActionValue[i], context);

				}
			}
		}

	}

	// do action
	private void doAction(String actionType, String actionValue, Context context) {
		// TODO Auto-generated method stub
		if (actionType.contentEquals("Change_profile")) {
			Intent profile = new Intent(context,
					ChangeProfileActionActivity.class);
			profile.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
			profile.putExtra("profile", actionValue);
			context.startActivity(profile);
		} else if (actionType.contentEquals("Wifi")) {
			Intent wifi = new Intent(context, ChangeWifiActionActivity.class);
			wifi.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
			wifi.putExtra("wifi", actionValue);
			context.startActivity(wifi);

		} else if (actionType.contentEquals("Lock_phone")) {

			Intent lock = new Intent(context, DevicePolicyDemoActivity.class);
			lock.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
			lock.putExtra("lock", actionValue);
			context.startActivity(lock);

		} else if (actionType.contentEquals("Alert")) {
			Intent call1 = new Intent(context, NotificationActivity.class);
			call1.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
			call1.putExtra("alert", actionValue);
			context.startActivity(call1);

		} else if (actionType.contentEquals("Call")) {
			Intent call1 = new Intent(context, MakeCallActionActivity.class);
			call1.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
			call1.putExtra("call", actionValue);
			context.startActivity(call1);

		}
	}

}
