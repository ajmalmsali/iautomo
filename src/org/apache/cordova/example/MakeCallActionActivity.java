package org.apache.cordova.example;

import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;

public class MakeCallActionActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		Bundle b = getIntent().getExtras();
		String call = b.getString("call");

		try {
			Intent callIntent = new Intent(Intent.ACTION_CALL);
			callIntent.setData(Uri.parse("tel:" + call));
			startActivity(callIntent);
		} catch (ActivityNotFoundException activityException) {
			Log.d("helloandroid dialing example", "Call failed");
		}
		finish();
	}

}
