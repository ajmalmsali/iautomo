package org.apache.cordova.example;

import android.app.Activity;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.location.LocationManager;
import android.os.Bundle;
import android.util.Log;

public class ProxAlertActivity extends Activity {

	private static final long POINT_RADIUS = 3000; // in Meters

	private static final long PROX_ALERT_EXPIRATION = -1;

	private static final String PROX_ALERT_INTENT =

	"org.apache.cordova.example.ProxAlertActivity";

	private LocationManager locationManager;
	double lat, log;

	@Override
	public void onCreate(Bundle savedInstanceState) {

		super.onCreate(savedInstanceState);
		Bundle b = getIntent().getExtras();
		Log.e("id,lat,lon",
				b.getString("appId") + b.getString("latitude")
						+ b.getString("longitude"));
		int appId = Integer.parseInt(b.getString("appId"));
		double lat = Double.parseDouble(b.getString("latitude"));
		double longitude = Double.parseDouble(b.getString("longitude"));
		locationManager = (LocationManager) getSystemService(Context.LOCATION_SERVICE);
		addProximityAlert(lat, longitude, appId);
		finish();

	}

	private void addProximityAlert(double latitude, double longitude, int appId) {

		Intent intent = new Intent(PROX_ALERT_INTENT);
		intent.putExtra("appId", appId + "");

		PendingIntent proximityIntent = PendingIntent.getBroadcast(this, appId,
				intent, 0);

		locationManager.addProximityAlert(

		latitude, // the latitude of the central point of the alert region

				longitude, // the longitude of the central point of the alert
							// region

				POINT_RADIUS, // the radius of the central point of the alert
								// region, in meters

				PROX_ALERT_EXPIRATION, // time for this proximity alert, in
										// milliseconds, or -1 to indicate no
										// expiration

				proximityIntent // will be used to generate an Intent to fire
								// when entry to or exit from the alert region
								// is detected

				);

	//	IntentFilter filter = new IntentFilter(PROX_ALERT_INTENT);

	//	registerReceiver(new ProximityIntentReceiver(), filter);

	}

}
