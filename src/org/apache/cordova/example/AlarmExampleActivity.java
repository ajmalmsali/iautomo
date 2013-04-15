package org.apache.cordova.example;

import java.util.Calendar;

import android.app.Activity;
import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

public class AlarmExampleActivity extends Activity {

	public static int eventID = 0;

	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		Log.d("TimeActivity", "oncreate");
		Bundle b = getIntent().getExtras();
		int day = Integer.parseInt(b.getString("day"));
		int month = Integer.parseInt(b.getString("month"))-1;
		int year = Integer.parseInt(b.getString("year"));
		int hr = Integer.parseInt(b.getString("hour"));
		int min = Integer.parseInt(b.getString("minute"));
		int appId = Integer.parseInt(b.getString("appId"));
		

		Calendar cal = Calendar.getInstance(); // retrieves a calendar object w/
												// current time
	
		cal.set(Calendar.YEAR, year);
		cal.set(Calendar.MONTH, month);
		cal.set(Calendar.DAY_OF_MONTH, day);

		cal.set(Calendar.HOUR_OF_DAY, hr);
		cal.set(Calendar.MINUTE, min);
		cal.set(Calendar.SECOND, 0);
		
		
		Log.d("calender instance", day + "/" + month + "/" + year + "/" + day
				+ "/" + hr + "/" + min+"/"+appId);

		Intent alarmIntent = new Intent(this, CustomeAlarmReceiver.class);

		// pass extra data to CustomAlarmReceiver intent to be handled when the
		// alarm goes off
		
		alarmIntent.putExtra("appId", "" + appId);

		/*
		 * creates a new PendingIntent using the static variable eventID. using
		 * eventID allows you to create multiple events with the same code
		 * without a unique id the intent would just be updated with new extras
		 * each time its created
		 */
		PendingIntent pendingAlarm = PendingIntent.getBroadcast(this, appId,
				alarmIntent, PendingIntent.FLAG_UPDATE_CURRENT);

		/*
		 * get the Alarm service and set the alarm with the time to go off and
		 * what to do when the alarm is received
		 */
		AlarmManager am = (AlarmManager) getSystemService(ALARM_SERVICE);
		am.set(AlarmManager.RTC_WAKEUP, cal.getTimeInMillis(), pendingAlarm);
		Log.d(getBaseContext().toString(), "finish");
		finish();
	}

}
