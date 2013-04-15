package org.apache.cordova.example;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.widget.Toast;

public class BatteryReceiver extends BroadcastReceiver {
	int lenght = DbClass.len;
	String Action1[][] = new String[lenght][4];
	int appid;

	@Override
	public void onReceive(Context context, Intent intent) {
		// TODO Auto-generated method stub
		int j = 0;

		Toast.makeText(context,
				"Battery Level" + intent.getIntExtra("level", 0),
				Toast.LENGTH_SHORT).show();
		DbClass get = new DbClass(context);
		get.open();
		Log.d("query", "open");
		do {
			try {

				Action1 = get.getAction("Battery",
						String.valueOf(intent.getIntExtra("level", 0)));
				appid = Integer.parseInt(Action1[j][0]);
				String appState = get.getAppState(appid);
				Log.d("querystate", appState);
				if (appState.contentEquals("on")) {

					doAction(Action1[j][1], Action1[j][3], context);
				}

			} catch (Exception e) {
				e.printStackTrace();// TODO: handle exception
			}
			j++;
		} while (j < lenght);

	}

	private void doAction(String actionType, String actionValue, Context context) {
		// TODO Auto-generated method stub
		Log.d("appId", appid + "");
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
				Log.d("cannot fetch msgbody or number", "error");
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
