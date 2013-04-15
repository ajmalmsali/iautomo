package org.apache.cordova.example;

import android.app.Activity;
import android.content.Context;
import android.media.AudioManager;
import android.os.Bundle;
import android.widget.Toast;

public class ChangeProfileActionActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		final AudioManager mode = (AudioManager) this
				.getSystemService(Context.AUDIO_SERVICE);
		super.onCreate(savedInstanceState);
		Bundle b = getIntent().getExtras();
		String profileMode = b.getString("profile");
		if (profileMode.contentEquals("silent_profile")) {

			mode.setRingerMode(AudioManager.RINGER_MODE_SILENT);
			Toast.makeText(getBaseContext(), "Silent Mode Activated",
					Toast.LENGTH_LONG).show();

		} else if (profileMode.contentEquals("general_profile")) {

			mode.setRingerMode(AudioManager.RINGER_MODE_NORMAL);
			Toast.makeText(getBaseContext(), "Normal Mode Activated",
					Toast.LENGTH_LONG).show();

		}
		finish();

	}

}
