package org.apache.cordova.example;

import android.app.Activity;
import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.graphics.Color;
import android.os.Bundle;

public class NotificationActivity extends Activity {

	private static final int NOTIFICATION_ID = 1000;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		Bundle b = getIntent().getExtras();
		String alertmsg = b.getString("alert");

		NotificationManager notificationManager =

		(NotificationManager) getBaseContext().getSystemService(
				Context.NOTIFICATION_SERVICE);

		PendingIntent pendingIntent = PendingIntent.getActivity(
				getBaseContext(), 0, null, 0);

		Notification notification = createNotification();

		notification.setLatestEventInfo(getBaseContext(),

		"BEBEEX", alertmsg, pendingIntent);

		notificationManager.notify(NOTIFICATION_ID, notification);
		finish();

	}

	private Notification createNotification() {

		Notification notification = new Notification();

		notification.icon = R.drawable.ic_launcher;

		notification.when = System.currentTimeMillis();

		notification.flags |= Notification.FLAG_AUTO_CANCEL;

		notification.flags |= Notification.FLAG_SHOW_LIGHTS;

		notification.defaults |= Notification.DEFAULT_VIBRATE;

		notification.defaults |= Notification.DEFAULT_LIGHTS;

		notification.ledARGB = Color.WHITE;

		notification.ledOnMS = 1500;

		notification.ledOffMS = 1500;

		return notification;

	}

}
