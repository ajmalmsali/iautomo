package org.apache.cordova.example;

import java.util.ArrayList;
import java.util.HashMap;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.R.string;
import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.SQLException;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.util.Log;

public class DbClass {
	static int len;

	ArrayList<HashMap<String, String>> popular_list_al;
	// Trigger Table Columns
	public static final String TRIGGER_ROWID = "trigger_id";
	public static final String TRIGGER_TYPE = "TriggerType";
	public static final String TRIGGER_NAME = "TriggerName";
	public static final String TRIGGER_VALUE = "TriggerValue";
	public static final String TRIGGER_UI_VALUE = "TriggerUiValue";

	// Actions Table Columns
	public static final String ACTION_ROWID = "Action_id";
	public static final String ACTION_TYPE = "ActionType";
	public static final String ACTION_NAME = "ActionName";
	public static final String ACTION_VALUE = "ActionValue";
	public static final String ACTION_UI_VALUE = "ActionUiValue";

	// App Table Columns

	public static final String APP_ID = "App_id";
	public static final String APP_NAME = "AppName";
	public static final String APP_DISC = "AppDisc";
	public static final String APP_STATE = "AppState";

	// Table Names

	private static final String DATABASE_NAME = "BebeexDB";
	private static final String APPS_TABLE = "AppsTable";
	private static final String TRIGGER_DATABASE_TABLE = "TriggerTable";
	private static final String ACTION_DATABASE_TABLE = "ActionTable";
	private static final int DATABASE_VER = 10;

	private DbHelper ourHelper;
	private final Context ourContext;
	private SQLiteDatabase ourDatabase;

	private static class DbHelper extends SQLiteOpenHelper {

		public DbHelper(Context context) {
			super(context, DATABASE_NAME, null, DATABASE_VER);
			// TODO Auto-generated constructor stub
		}

		@Override
		public void onCreate(SQLiteDatabase db) {
			// TODO Auto-generated method stub
			db.execSQL("CREATE TABLE " + APPS_TABLE + " (" + APP_ID
					+ " INTEGER PRIMARY KEY AUTOINCREMENT, " + APP_NAME
					+ " TEXT NOT NULL, " + APP_DISC + " TEXT NOT NULL, "
					+ APP_STATE + " TEXT NOT NULL);");

			db.execSQL("CREATE TABLE " + TRIGGER_DATABASE_TABLE + " ("
					+ TRIGGER_ROWID + " INTEGER PRIMARY KEY AUTOINCREMENT, "
					+ APP_ID + " INTEGER NOT NULL, " + TRIGGER_TYPE
					+ " TEXT NOT NULL, " + TRIGGER_NAME + " TEXT NOT NULL, "
					+ TRIGGER_VALUE + " TEXT NOT NULL, " + TRIGGER_UI_VALUE
					+ " TEXT NOT NULL);");
			db.execSQL("CREATE TABLE " + ACTION_DATABASE_TABLE + " ("
					+ ACTION_ROWID + " INTEGER PRIMARY KEY AUTOINCREMENT, "
					+ APP_ID + " INTEGER NOT NULL, " + ACTION_TYPE
					+ " TEXT NOT NULL, " + ACTION_NAME + " TEXT NOT NULL, "
					+ ACTION_VALUE + " TEXT NOT NULL, " + ACTION_UI_VALUE
					+ " TEXT NOT NULL);");

		}

		@Override
		public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
			// TODO Auto-generated method stub
			db.execSQL("DROP TABLE IF EXISTS " + APPS_TABLE);
			db.execSQL("DROP TABLE IF EXISTS " + TRIGGER_DATABASE_TABLE);
			db.execSQL("DROP TABLE IF EXISTS " + ACTION_DATABASE_TABLE);
			onCreate(db);

		}

	}

	public DbClass(Context c) {
		ourContext = c;

	}

	public DbClass open() throws SQLException {
		ourHelper = new DbHelper(ourContext);
		ourDatabase = ourHelper.getWritableDatabase();
		return this;

	}

	public void close() {
		ourHelper.close();

	}

	public long createAppEntry(int appId, String appName, String appDesc,
			String appState) {
		// do code to parse json arraay or object and insert it into database
		ContentValues cv = new ContentValues();
		// cv.put(APP_ID,appId); no need of id as it is auto increment
		cv.put(APP_DISC, appDesc);
		cv.put(APP_NAME, appName);
		cv.put(APP_STATE, appState);
		return ourDatabase.insert(APPS_TABLE, null, cv);
	}

	public long createTriggerEntry(int appId, String type, String name,
			String value, String uiValue) {

		ContentValues cv = new ContentValues();
		cv.put(TRIGGER_NAME, name);
		cv.put(TRIGGER_TYPE, type);
		cv.put(APP_ID, appId);
		cv.put(TRIGGER_VALUE, value);
		cv.put(TRIGGER_UI_VALUE, uiValue);
		Log.d(APP_ID, String.valueOf(appId));
		return ourDatabase.insert(TRIGGER_DATABASE_TABLE, null, cv);

	}

	public long createActionEntry(int appId, String type, String name,
			String value, String uiValue) {

		ContentValues cv = new ContentValues();
		cv.put(ACTION_NAME, name);
		cv.put(ACTION_TYPE, type);
		cv.put(APP_ID, appId);
		cv.put(ACTION_VALUE, value);
		cv.put(ACTION_UI_VALUE, uiValue);
		Log.d(APP_ID, String.valueOf(appId));
		return ourDatabase.insert(ACTION_DATABASE_TABLE, null, cv);

	}

	public long deleteEntry(int appId) {
		ourDatabase.delete(ACTION_DATABASE_TABLE, APP_ID + " = " + appId, null);
		ourDatabase
				.delete(TRIGGER_DATABASE_TABLE, APP_ID + " = " + appId, null);
		ourDatabase.delete(APPS_TABLE, APP_ID + " = " + appId, null);
		return appId;

	}

	public String getAppState(int appId) {
		String query = "SELECT " + APP_STATE + " FROM " + APPS_TABLE
				+ " WHERE " + APP_ID + " = " + appId;
		Cursor c = ourDatabase.rawQuery(query, null);
		int iState = c.getColumnIndex(APP_STATE);
		String state = null;
		for (c.moveToFirst(); !c.isAfterLast(); c.moveToNext()) {
			state = c.getString(iState);
		}
		return state;

	}

	public String getData() {
		String query = "SELECT * FROM " + APPS_TABLE;
		Cursor c = ourDatabase.rawQuery(query, null);
		int iTid = c.getColumnIndex(APP_ID);
		int iDisc = c.getColumnIndex(APP_DISC);
		int iName = c.getColumnIndex(APP_NAME);
		int iState = c.getColumnIndex(APP_STATE);
		int tid;
		JSONObject obj, send;
		JSONObject obj1;
		send = new JSONObject();
		JSONArray arrOuter = new JSONArray();

		for (c.moveToFirst(); !c.isAfterLast(); c.moveToNext()) {
			JSONArray arrTrigger = new JSONArray();
			JSONArray arrAction = new JSONArray();
			obj1 = new JSONObject();
			tid = c.getInt(iTid);

			String name = c.getString(iName);
			String desc = c.getString(iDisc);
			String state = c.getString(iState);
			try {
				obj1.put("title", name);
				obj1.put("desc", desc);
				obj1.put("state", state);
				obj1.put("appid", "" + tid);
				arrOuter.put(obj1);
			} catch (JSONException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		/*
		 * String q2 = "SELECT * FROM " + TRIGGER_DATABASE_TABLE + " WHERE " +
		 * APP_ID + " = " + tid; Cursor c2 = ourDatabase.rawQuery(q2, null); int
		 * tType = c2.getColumnIndex(TRIGGER_TYPE); int tName =
		 * c2.getColumnIndex(TRIGGER_NAME); int tValue =
		 * c2.getColumnIndex(TRIGGER_VALUE); int tUiValue =
		 * c2.getColumnIndex(TRIGGER_UI_VALUE); String name1; String type;
		 * String value; String uiValue; for (c2.moveToFirst();
		 * !c2.isAfterLast(); c2.moveToNext()) {
		 * 
		 * type = c2.getString(tType); name1 = c2.getString(tName); value =
		 * c2.getString(tValue); uiValue = c2.getString(tUiValue); obj = new
		 * JSONObject(); try {
		 * 
		 * obj.put("type", type); obj.put("name", name1); obj.put("value",
		 * value); obj.put("uiValue", uiValue);
		 * 
		 * arrTrigger.put(obj); } catch (JSONException e) { // TODO
		 * Auto-generated catch block e.printStackTrace(); } } try {
		 * obj1.put("triggers", arrTrigger); } catch (JSONException e1) { //
		 * TODO Auto-generated catch block e1.printStackTrace(); } String q3 =
		 * "SELECT * FROM " + ACTION_DATABASE_TABLE + " WHERE " + APP_ID + " = "
		 * + tid; Cursor c3 = ourDatabase.rawQuery(q3, null); int aName =
		 * c3.getColumnIndex(ACTION_NAME); int aType =
		 * c3.getColumnIndex(ACTION_TYPE); int aUiValue =
		 * c3.getColumnIndex(ACTION_UI_VALUE); int aValue =
		 * c3.getColumnIndex(ACTION_VALUE); String aname1; String atype; String
		 * avalue; String auiValue; for (c3.moveToFirst(); !c3.isAfterLast();
		 * c3.moveToNext()) { aname1 = c3.getString(aName); atype =
		 * c3.getString(aType); avalue = c3.getString(aValue); auiValue =
		 * c3.getString(aUiValue); obj = new JSONObject(); try {
		 * 
		 * obj.put("type", atype); obj.put("name", aname1); obj.put("value",
		 * avalue); obj.put("uiValue", auiValue);
		 * 
		 * arrAction.put(obj); } catch (JSONException e) { // TODO
		 * Auto-generated catch block e.printStackTrace(); } }
		 * 
		 * try { obj1.put("actions", arrAction); } catch (JSONException e) { //
		 * TODO Auto-generated catch block e.printStackTrace(); }
		 * arrOuter.put(obj1); try { send.put("app", arrOuter); } catch
		 * (JSONException e) { // TODO Auto-generated catch block
		 * e.printStackTrace(); } }
		 */
		try {
			send.put("app", arrOuter);
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Log.e("json array", arrOuter.toString());
		return send.toString();

	}

	String getData(int appId) {

		String query = "SELECT * FROM " + APPS_TABLE + " WHERE " + APP_ID
				+ " = " + appId;
		Cursor c = ourDatabase.rawQuery(query, null);
		int iTid = c.getColumnIndex(APP_ID);
		int iDisc = c.getColumnIndex(APP_DISC);
		int iName = c.getColumnIndex(APP_NAME);
		int iState = c.getColumnIndex(APP_STATE);
		int tid;
		JSONObject obj;
		JSONObject obj1;
		JSONArray arrOuter = new JSONArray();

		for (c.moveToFirst(); !c.isAfterLast(); c.moveToNext()) {
			JSONArray arrTrigger = new JSONArray();
			JSONArray arrAction = new JSONArray();
			obj1 = new JSONObject();
			tid = c.getInt(iTid);

			String name = c.getString(iName);
			String desc = c.getString(iDisc);
			String state = c.getString(iState);
			try {
				obj1.put("title", name);
				obj1.put("desc", desc);
				obj1.put("state", state);
				obj1.put("appid", appId);
				Log.e("appid", appId + "");
			} catch (JSONException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			String q2 = "SELECT * FROM " + TRIGGER_DATABASE_TABLE + " WHERE "
					+ APP_ID + " = " + tid;
			Cursor c2 = ourDatabase.rawQuery(q2, null);
			int tType = c2.getColumnIndex(TRIGGER_TYPE);
			int tName = c2.getColumnIndex(TRIGGER_NAME);
			int tValue = c2.getColumnIndex(TRIGGER_VALUE);
			int tUiValue = c2.getColumnIndex(TRIGGER_UI_VALUE);
			String name1;
			String type;
			String value;
			String uiValue;
			for (c2.moveToFirst(); !c2.isAfterLast(); c2.moveToNext()) {

				type = c2.getString(tType);
				name1 = c2.getString(tName);
				value = c2.getString(tValue);
				uiValue = c2.getString(tUiValue);
				obj = new JSONObject();
				try {

					obj.put("type", type);
					obj.put("name", name1);
					obj.put("value", value);
					obj.put("uiValue", uiValue);

					arrTrigger.put(obj);
				} catch (JSONException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			try {
				obj1.put("triggers", arrTrigger);
			} catch (JSONException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			String q3 = "SELECT * FROM " + ACTION_DATABASE_TABLE + " WHERE "
					+ APP_ID + " = " + tid;
			Cursor c3 = ourDatabase.rawQuery(q3, null);
			int aName = c3.getColumnIndex(ACTION_NAME);
			int aType = c3.getColumnIndex(ACTION_TYPE);
			int aUiValue = c3.getColumnIndex(ACTION_UI_VALUE);
			int aValue = c3.getColumnIndex(ACTION_VALUE);
			String aname1;
			String atype;
			String avalue;
			String auiValue;
			for (c3.moveToFirst(); !c3.isAfterLast(); c3.moveToNext()) {
				aname1 = c3.getString(aName);
				atype = c3.getString(aType);
				avalue = c3.getString(aValue);
				auiValue = c3.getString(aUiValue);
				obj = new JSONObject();
				try {

					obj.put("type", atype);
					obj.put("name", aname1);
					obj.put("value", avalue);
					obj.put("uiValue", auiValue);

					arrAction.put(obj);
				} catch (JSONException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}

			try {
				obj1.put("actions", arrAction);
			} catch (JSONException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			arrOuter.put(obj1);

		}
		Log.e("json array", arrOuter.toString());
		return arrOuter.toString();

	}

	public String[][] getAction(String Trigger, String Tparam1) {
		int i = 0;
		String returnValue[][] = new String[10][4];

		Cursor c = null;
		try {

			c = ourDatabase.rawQuery("SELECT " + APP_ID + ", " + ACTION_TYPE
					+ ", " + ACTION_NAME + ", " + ACTION_VALUE + " FROM "
					+ ACTION_DATABASE_TABLE + " WHERE " + APP_ID
					+ " = (SELECT " + APP_ID + " FROM "
					+ TRIGGER_DATABASE_TABLE + " WHERE " + TRIGGER_TYPE
					+ " = ?" + " AND " + TRIGGER_VALUE + " = ?" + ");",
					new String[] { Trigger, Tparam1 });
		} catch (Exception e) {
			// TODO: handle exception
			Log.d("error", "cannot fetch");
		}

		if (c != null) {
			Log.d("c", String.valueOf(c.getColumnCount()));

			if (c.moveToFirst()) {
				do {

					if (c.getString(0) != null) {
						Log.d("getting data from cursor", "values");

						returnValue[i][0] = c.getString(c
								.getColumnIndex(APP_ID));
						returnValue[i][1] = c.getString(c
								.getColumnIndex(ACTION_TYPE));
						returnValue[i][2] = c.getString(c
								.getColumnIndex(ACTION_NAME));
						returnValue[i][3] = c.getString(c
								.getColumnIndex(ACTION_VALUE));

						Log.d("query", returnValue[0] + "/" + returnValue[1]
								+ "/" + returnValue[2] + "/" + returnValue[3]);
					}
					i++;
				} while (c.moveToNext());
			}
		}
		len = i;

		return returnValue;

	}

	public String getDetails(int appid, String string) {
		// TODO Auto-generated method stub
		String content = null;
		Cursor c = null;
		try {
			String xxx;
			xxx = "SELECT *" + " FROM " + ACTION_DATABASE_TABLE + " WHERE "
					+ APP_ID + " = " + appid + " AND " + ACTION_NAME + " = '"
					+ string + "'";

			c = ourDatabase.rawQuery(xxx, null);
			if (c.moveToFirst()) {
				int i = c.getColumnIndex(ACTION_VALUE);

				content = c.getString(i);

			}

		} catch (Exception e) {
			// TODO: handle exception
			Log.d("DBclass", "error is getting mgs contents");
		}

		return content;

	}

	public String[] getActionType(int appId) {
		int i = 0;

		// TODO Auto-generated method stub
		String[] actionType = new String[10];
		String z = "SELECT " + ACTION_TYPE + " FROM " + ACTION_DATABASE_TABLE
				+ " WHERE " + APP_ID + " = " + appId;
		try {
			Cursor c = ourDatabase.rawQuery(z, null);
			if (c.moveToFirst()) {
				do {

					if (c.getString(0) != null) {
						actionType[i] = c.getString(c
								.getColumnIndex(ACTION_TYPE));
						i++;

					}
				} while (c.moveToNext());
			}

			len = i;

		} catch (Exception e) {
			Log.e("exception in query", "cant get action type");
		}
		return actionType;

	}

	public String[] getActionValue(int appId) {
		// TODO Auto-generated method stub
		int i = 0;
		String[] actionValue = new String[10];
		String z = "SELECT " + ACTION_VALUE + " FROM " + ACTION_DATABASE_TABLE
				+ " WHERE " + APP_ID + " = " + appId;
		try {
			Cursor c = ourDatabase.rawQuery(z, null);
			if (c.moveToFirst()) {
				do {

					if (c.getString(0) != null) {
						actionValue[i] = c.getString(c
								.getColumnIndex(ACTION_VALUE));
						i++;
					}
				} while (c.moveToNext());

			}
			len = i;
		} catch (Exception e) {
			Log.e("exception in query", "cant get action type");
		}
		return actionValue;

	}
}
