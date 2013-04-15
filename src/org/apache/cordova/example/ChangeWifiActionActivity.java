package org.apache.cordova.example;

import android.app.Activity;
import android.content.Context;
import android.net.wifi.WifiManager;
import android.os.Bundle;
import android.widget.Toast;

public class ChangeWifiActionActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		Bundle b = getIntent().getExtras();
		String wifiMode = b.getString("wifi");
		if (wifiMode.contentEquals("on")) {
			WifiManager wifiManager = (WifiManager) getBaseContext()
					.getSystemService(Context.WIFI_SERVICE);
			wifiManager.setWifiEnabled(true);
			Toast.makeText(getBaseContext(), "Wifi ON", Toast.LENGTH_LONG)
					.show();

		} else if (wifiMode.contentEquals("off")) {

			WifiManager wifiManager = (WifiManager) getBaseContext()
					.getSystemService(Context.WIFI_SERVICE);
			wifiManager.setWifiEnabled(false);
			Toast.makeText(getBaseContext(), "Wifi OFF", Toast.LENGTH_LONG)
					.show();

		}
		finish();
	}

}
