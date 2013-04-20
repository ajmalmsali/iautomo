package org.apache.cordova.example;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.widget.Toast;

public class BootCompleteBroadcaste extends BroadcastReceiver {
	int length = DbClass.len;
	String Action1[][] = new String[length][4];
	int appid, j;

	@Override
	public void onReceive(Context context, Intent intent) {
		// TODO Auto-generated method stub
		j = 0;
		//Log.d("boot", "booted");

		//Toast.makeText(context, "helloBooted", Toast.LENGTH_SHORT).show();
		DbClass get = new DbClass(context);
		get.open();
		//Log.d("query", "open");
		do {

			

			try {

				Action1 = get.getAction("Boot", "Boot");
				appid = Integer.parseInt(Action1[j][0]);
				String appState = get.getAppState(appid);
				if (appState.contentEquals("on")) {

					doAction(Action1[j][1], Action1[j][3], context);
					//Log.d("Booted", Action1[j][0] + "/" + Action1[j][1] + "/"		+ Action1[j][2] + "/" + Action1[j][3]);// action
																	

				}

			} catch (Exception e) {
				e.printStackTrace();// TODO: handle exception
			}
			j++;

		} while (j < length);

	}

	private void doAction(String actionType, String actionValue, Context context) {
		// TODO Auto-generated method stub
		//Log.d("appId", appid + "");
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

		} else if (actionType.contentEquals("Send_SMS")) {
			String number = "", content = "";
			DbClass obj = new DbClass(context);
			obj.open();
			try {

				number = obj.getDetails(appid, "send_msg_number");
				content = obj.getDetails(appid, "send_msg_content");

			} catch (Exception e) {
				// TODO: handle exception
				//Log.d("cannot fetch msgbody or number", "error");
				obj.close();
			}
			obj.close();
			Intent call1 = new Intent(context, SendSMS.class);
			call1.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
			call1.putExtra("number", number);
			call1.putExtra("body", content);

			context.startActivity(call1);

		}

	}

}
