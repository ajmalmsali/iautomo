package org.apache.cordova.example;

import android.app.Activity;
import android.os.Bundle;
import android.telephony.SmsManager;
import android.util.Log;

public class SendSMS extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		Bundle b = getIntent().getExtras();
		String number = b.getString("number");
		String msgbody = b.getString("body");
		Log.d(number, msgbody);

		SmsManager sms = SmsManager.getDefault();

		sms.sendTextMessage(number, null, msgbody, null, null);

		Log.d("action", "sendingSms");
		finish();

	}

}
