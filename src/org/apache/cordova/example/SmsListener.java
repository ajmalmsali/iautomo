package org.apache.cordova.example;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.telephony.SmsManager;
import android.telephony.SmsMessage;
import android.util.Log;
import android.widget.Toast;

public class SmsListener extends BroadcastReceiver {
	int appid;

	String TEXTCONTENT_KEY = "textcontent";
	String CONTACT_KEY = "contactkey";
	String str = "";
	String msg_org_address = "";
	String msg_content = "";
	SharedPreferences getp;
	SmsManager sms;
	SmsMessage[] messages;
	String Action = " ", Aparam1, Aparam2, State;

	public void onReceive(Context context, Intent intent) {
		int j = 0;

		//Toast.makeText(context, "hello", Toast.LENGTH_SHORT).show();
		int length = 0 ;//= DbClass.len;
		String Action1[][] = new String[10][4];

		Bundle bundle = intent.getExtras();

		if (bundle != null) {
			Object[] pdus = (Object[]) bundle.get("pdus");
			messages = new SmsMessage[pdus.length];

			messages[0] = SmsMessage.createFromPdu((byte[]) pdus[0]);
			msg_org_address = messages[0].getOriginatingAddress();
			msg_content = messages[0].getMessageBody().toString();
			Log.d("msgbody", msg_content);

		}

		String appState = null;
		DbClass get = new DbClass(context);
		get.open();
		//Log.d("query", "open");
		do {
			try {
				char tmp;
				String tmp2 = "";
				for (int i = 3; i < msg_org_address.length(); i++) {
					tmp = msg_org_address.charAt(i);
					tmp2 += tmp;
				}
				
				Action1 = get.getAction("SMS_from_a_number", tmp2);
				length = DbClass.len;
				Log.d("action",Action1[0][1]);
				appid = Integer.parseInt(Action1[j][0]);
				appState = get.getAppState(appid);

				if (appState.contentEquals("on")) {

					doAction(Action1[j][1], Action1[j][3], context);
				}
				Log.d("SMS_from_number Trigger", Action1[j][0] + "/"
						+ Action1[j][1] + "/" + Action1[j][2] + "/"
						+ Action1[j][3]);// action value
			} catch (Exception e) {
				e.printStackTrace();// TODO: handle exception
			}
			try {

				Action1 = get.getAction("SMS_with_content", msg_content);
				length = DbClass.len;
				appid = Integer.parseInt(Action1[j][0]);
				appState = get.getAppState(appid);
				if (appState.contentEquals("on")) {

					doAction(Action1[j][1], Action1[j][3], context);
					Log.d("Sms with content", Action1[j][0] + "/"
							+ Action1[j][1] + "/" + Action1[j][2] + "/"
							+ Action1[j][3]);// action value

				}

			} catch (Exception e) {
				e.printStackTrace();// TODO: handle exception
			}
			j++;

		} while (j < length);

		get.close();

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

			// Intent lock = new Intent(context,ChangeLockActionActivity.class);
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
