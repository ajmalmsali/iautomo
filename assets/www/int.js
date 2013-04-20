$(document).one("pageinit", function() {
				var $tabo = $("#tover"),
				overflowState = $tabo.hasClass("noContent");


				//Open the action overflow menu
				$("#aover").bind("vclick", function() {
					$("#right").panel("open");
				});

				$("#left").on("panelbeforeopen", function() {
					//Save the state of the overflow button
					overflowState = $tabo.hasClass("noContent");
					$tabo.addClass("noContent");
				})
				.on("panelbeforeclose", function() {
					//Put the overflow button into the correct state
					if(!overflowState) {
						$tabo.removeClass("noContent");
					}
				});

				//Open the tab overflow menu
				$tabo.bind("vclick", function() {
					$("#left").panel("open");
				});

				//Handle overflow menu clicks
				$(".bb10-panel").bind("vclick", function() {
					//Close the panel
					$(this).panel("close");
				});

				$("#left li").bind("vclick", function() {
					//Clear the active state from any other buttons that may have been set to active
					$(this).siblings().removeClass("ui-btn-active");
					//Add the active state to the selected button
					$(this).addClass("ui-btn-active");
					//Clear the contents of the tab overflow button
					//Add class to put the tab overflow icon in the correct position
					//Clear the active state from all tab buttons in action bar
					$('[data-role="tab"], [data-role="tab-overflow"]').removeClass("active");
				});

				$(".inBar").bind("vclick", function() {
					//Set the active state to the tab in the actionbar
					$('#' + this.id.slice(0, 2)).addClass("active");
					$tabo.addClass("noContent").empty();
					overflowState = true;
				});

				$(".notInBar").bind("vclick", function() {
					//Set the active state to the tab overflow button
					$tabo.empty()
					.addClass("active")
					.html('<img src="img/generic_81_81_placeholder.png" alt=""><p>' + $(this).text() + '</p>')
					.removeClass("noContent");
					overflowState = false;
				});

				$("[data-role='tab']").bind("vclick", function() {
					//Change page on tab click
					if($(this).data("href")) {
					console.log('dfdf');
						$.mobile.changePage( $(this).data("href"), { transition: "slideup"} );
					}
				});
			});
			
			
//////////////////


$(document).ready(function() {
		
		$('#s_detail').bind('click', function(event) {
	    $('#c_detail').show();
		$('#c_trigger').hide();
		$('#c_action').hide();
		});
		
		$('#s_trigger').bind('click', function(event) {
	    $('#c_detail').hide();
		$('#c_action').hide();
		$('#c_trigger').show();	
		});

		$('#s_action').bind('click', function(event) {
	    $('#c_detail').hide();
		$('#c_trigger').hide();
		$('#c_action').show();
		});

		$('#b_action_enb').bind('click', function(event) {
	    $('#s_action').removeClass('ui-disabled');
		$('#s_trigger').removeClass('ui-btn-active');
		$('#s_action').addClass('ui-btn-active');
		$('#c_detail').hide();
		$('#c_trigger').hide();
		$('#c_action').show();
		$('#act_lst').hide();
		});
		
		$('#b_trigger_enb').bind('click', function(event) {
	    $('#s_trigger').removeClass('ui-disabled');
		$('#s_detail').removeClass('ui-btn-active');
		$('#s_trigger').addClass('ui-btn-active');
		$('#c_detail').hide();
		$('#c_action').hide();
		$('#c_trigger').show();
		$('#trg_lst').hide();
		});
  
 		$("#app-name").bind("change keyup paste", function() {
		$('#app-desc').removeClass('ui-disabled');
		});

		$("#app-desc").bind("change keyup paste", function() {
		$('#b_trigger_enb').removeClass('ui-disabled');
		});

		$.j = 0;
		
		$("#Send_SMS_number").bind("change keyup paste", function() {
		$('#Send_SMS_content').removeClass('ui-disabled');
		});
		
		$("#Send_SMS_content").bind("change keyup paste", function() {
		$('#Send_SMS_finish').removeClass('ui-disabled');
		});
		
		$("#Call_number").bind("change keyup paste", function() {
		$('#Call_finish').removeClass('ui-disabled');
		});
		
		$("#Alert_content").bind("change keyup paste", function() {
		$('#Alert_finish').removeClass('ui-disabled');
		});
		
		$('#Send_SMS_finish').bind('click', function(event) {
		history.back();
		});
		
		$('#Wi-fi_finish').bind('click', function(event) {
		history.back();
		});
		
		$('#Lock_phone_finish').bind('click', function(event) {
		history.back();
		});
		
		$('#Change_profile_finish').bind('click', function(event) {
		history.back();
		});
		
		$('#Call_finish').bind('click', function(event) {
		history.back();
		});
		
		$('#Alert_finish').bind('click', function(event) {
		history.back();
		});

  		$.i = 0;
		$.k = 0;
		
		$("#SMS_content").bind("change keyup paste", function() {
  		$('#SMS_with_content_finish').removeClass('ui-disabled');
  		});
		
		$("#SMS_number").bind("change keyup paste", function() {
  		$('#SMS_from_a_number_finish').removeClass('ui-disabled');
  		});
		
  		$("#battery_level").bind("change keyup paste", function() {
  		$('#Battery_finish').removeClass('ui-disabled');
  		});

	  	$("#date").bind("change keyup paste", function() {
  		$('#time').removeClass('ui-disabled');
  		});
		
  		$("#time").bind("change keyup paste", function() {
  		$('#Time_finish').removeClass('ui-disabled');
  		});

  		$("#latitude").bind("change keyup paste", function() {
  		$('#longitude').removeClass('ui-disabled');
  		});
		
  		$("#longitude").bind("change keyup paste", function() {
  		$('#Location_finish').removeClass('ui-disabled');
  		});
		
		$('#SMS_with_content_finish').bind('click', function(event) {
		history.back();
		});
		
		$('#SMS_from_a_number_finish').bind('click', function(event) {
		history.back();
		});
		
		$('#Battery_finish').bind('click', function(event) {
		history.back();
		});
		
		$('#Boot_finish').bind('click', function(event) {
		history.back();
		});
		
		$('#Time_finish').bind('click', function(event) {
		history.back();
		});
		
		$('#Location_finish').bind('click', function(event) {
		history.back();
		});
});

function changetrigger()
{
	if($('#menu_select_trigger').val() == 'Select_trigger')
	{
		$('#SMS_with_content_div').hide();
		$('#SMS_from_a_number_div').hide();
		$('#Boot_div').hide();
		$('#Time_div').hide();
		$('#Battery_div').hide();
		$('#Location_div').hide();
	}
	
	else if($('#menu_select_trigger').val() == 'SMS_with_content')
	{
		$('#SMS_with_content_div').show();
		$('#SMS_from_a_number_div').hide();
		$('#Boot_div').hide();
		$('#Time_div').hide();
		$('#Battery_div').hide();
		$('#Location_div').hide();
	}
	
	else if($('#menu_select_trigger').val() == 'SMS_from_a_number')
	{
		$('#SMS_with_content_div').hide();
		$('#SMS_from_a_number_div').show();
		$('#Boot_div').hide();
		$('#Time_div').hide();
		$('#Battery_div').hide();
		$('#Location_div').hide();
	}
	
	else if($('#menu_select_trigger').val() == 'Boot')
	{
		$('#SMS_with_content_div').hide();
		$('#SMS_from_a_number_div').hide();
		$('#Boot_div').show();
		$('#Time_div').hide();
		$('#Battery_div').hide();
		$('#Location_div').hide();
		$('#Boot_finish').removeClass('ui-disabled');
	}
	
	else if($('#menu_select_trigger').val() == 'Time')
	{
		$('#SMS_with_content_div').hide();
		$('#SMS_from_a_number_div').hide();
		$('#Boot_div').hide();
		$('#Time_div').show();
		$('#Battery_div').hide();
		$('#Location_div').hide();
	}
	
	else if($('#menu_select_trigger').val() == 'Battery')
	{
		$('#SMS_with_content_div').hide();
		$('#SMS_from_a_number_div').hide();
		$('#Boot_div').hide();
		$('#Time_div').hide();
		$('#Battery_div').show();
		$('#Location_div').hide();
	}
	
	else if($('#menu_select_trigger').val() == 'Location')
	{
		$('#SMS_with_content_div').hide();
		$('#SMS_from_a_number_div').hide();
		$('#Boot_div').hide();
		$('#Time_div').hide();
		$('#Battery_div').hide();
		$('#Location_div').show();
	}
}

function changeaction()
{
	if($('#menu_select_action').val() == 'Select_action')
	{
		$('#Send_SMS_div').hide();
		$('#Wi-fi_div').hide();
		$('#Lock_phone_div').hide();
		$('#Change_profile_div').hide();
		$('#Call_div').hide();
		$('#Alert_div').hide();
	}
	
	else if($('#menu_select_action').val() == 'Send_SMS')
	{
		$('#Send_SMS_div').show();
		$('#Wi-fi_div').hide();
		$('#Lock_phone_div').hide();
		$('#Change_profile_div').hide();
		$('#Call_div').hide();
		$('#Alert_div').hide();
	}
	
	else if($('#menu_select_action').val() == 'Wi-fi')
	{
		$('#Send_SMS_div').hide();
		$('#Wi-fi_div').show();
		$('#Lock_phone_div').hide();
		$('#Change_profile_div').hide();
		$('#Call_div').hide();
		$('#Alert_div').hide();
	}
	
	else if($('#menu_select_action').val() == 'Lock_phone')
	{
		$('#Send_SMS_div').hide();
		$('#Wi-fi_div').hide();
		$('#Lock_phone_div').show();
		$('#Change_profile_div').hide();
		$('#Call_div').hide();
		$('#Alert_div').hide();
	}
	
	else if($('#menu_select_action').val() == 'Change_profile')
	{
		$('#Send_SMS_div').hide();
		$('#Wi-fi_div').hide();
		$('#Lock_phone_div').hide();
		$('#Change_profile_div').show();
		$('#Call_div').hide();
		$('#Alert_div').hide();
	}
	
	else if($('#menu_select_action').val() == 'Call')
	{
		$('#Send_SMS_div').hide();
		$('#Wi-fi_div').hide();
		$('#Lock_phone_div').hide();
		$('#Change_profile_div').hide();
		$('#Call_div').show();
		$('#Alert_div').hide();
	}
	
	else if($('#menu_select_action').val() == 'Alert')
	{
		$('#Send_SMS_div').hide();
		$('#Wi-fi_div').hide();
		$('#Lock_phone_div').hide();
		$('#Change_profile_div').hide();
		$('#Call_div').hide();
		$('#Alert_div').show();
	}
}

function SMS_with_content(){
	$('#trg_lst').show();
	$('#trg_lst').append('<div data-role="collapsible">'+
						'<h3>SMS with content</h3>'+
						'<div data-role="fieldcontain">'+
							'<label for="'+'trig_'+$.i+'">Message content</label>'+
							'<input trg_type="SMS_with_content" type="text" name="msg_content" id="'+'trig_'+$.i+'" value="'+ $("#SMS_content").val() + '"/>'+
						'</div>'+
						'</div>').trigger('create');
	$.i = $.i + 1;
}

function SMS_from_a_number(){
	$('#trg_lst').show();
	$('#trg_lst').append('<div data-role="collapsible">'+
						'<h3>SMS from a number</h3>'+
						'<div data-role="fieldcontain">'+
							'<label for="'+'trig_'+$.i+'">Mobile number</label>'+
							'<input trg_type="SMS_from_a_number" type="text" name="msg_number" id="'+'trig_'+$.i+'" value="'+ $("#SMS_number").val() + '"/>'+
						'</div>'+
						'</div>').trigger('create');
	$.i = $.i + 1;
}

function Time(){
	$('#trg_lst').show();
	$('#trg_lst').append('<div data-role="collapsible">'+
						'<h3>Time</h3>'+
						'<div data-role="fieldcontain">'+
							'<label for="'+'trig_'+$.i+'">Date</label>'+
							'<input trg_type="Time" type="text" name="date" id="'+'trig_'+$.i+'0" value="'+ $("#date").val() + '"/>'+
						'</div>'+
						'<div data-role="fieldcontain">'+
							'<label for="'+'trig_'+$.i+'T">Time</label>'+
							'<input trg_type="Time" type="text" name="time" id="'+'trig_'+$.i+'1" value="'+ $("#time").val() + '"/>'+
						'</div>'+
						'</div>').trigger('create');
	$.i = $.i + 1;
}

function Boot(){
	$('#trg_lst').show();
	$('#trg_lst').append('<div data-role="collapsible">'+
						'<h3>Boot</h3>'+
						'<div data-role="fieldcontain">'+
							'<input type="hidden" trg_type="Boot" name="boot" id="'+'trigtype_'+$.i+'" value="Boot"/>'+
						'</div>'+
					'</div>').trigger('create');
	$.i = $.i + 1;
}

function Battery(){
	$('#trg_lst').show();
	$('#trg_lst').append('<div data-role="collapsible">'+
						'<h3>Battery Level</h3>'+
						'<div data-role="fieldcontain">'+
							'<label for="'+'trig_'+$.i+'">Battery level</label>'+
							'<input type="text" name="bat_level" trg_type="Battery" id="'+'trig_'+$.i+'" value="'+ $("#battery_level").val() + '"/>'+
						'</div>'+
					'</div>').trigger('create');
	$.i = $.i + 1;
}

function Location(){
	$('#trg_lst').show();
	$('#trg_lst').append('<div data-role="collapsible">'+
						'<h3>Location</h3>'+
						'<div data-role="fieldcontain">'+
							'<label for="'+'trig_'+$.i+'0">Latitude</label>'+
							'<input type="text" name="latitude" trg_type="Location" id="'+'trig_'+$.i+'0" value="'+ $("#latitude").val() + '"/>'+
						'</div>'+
						'<div data-role="fieldcontain">'+
							'<label for="'+'trig_'+$.i+'1">Longitude</label>'+
							'<input type="text" name="longitude" trg_type="Location" id="'+'trig_'+$.i+'1" value="'+ $("#longitude").val() + '"/>'+
						'</div>'+
						'</div>').trigger('create');
	$.i = $.i + 1;
}

function Send_SMS(){
	$('#act_lst').show();
	$('#act_lst').append('<div data-role="collapsible">'+
						'<h3>Send SMS</h3>'+
						'<div data-role="fieldcontain">'+
							'<label for="'+'act_'+$.j+'0">Mobile number</label>'+
							'<input type="text" name="send_msg_number" act_type="Send_SMS" id="'+'act_'+$.j+'0" value="'+ $("#Send_SMS_number").val() + '"/>'+
						'</div>'+
						'<div data-role="fieldcontain">'+
							'<label for="'+'act_'+$.j+'1">Message content</label>'+
							'<input type="text" name="send_msg_content" act_type="Send_SMS" id="'+'act_'+$.j+'1" value="'+ $("#Send_SMS_content").val() + '"/>'+
						'</div>'+
					'</div>').trigger('create');
	$.j = $.j +1;
}

function Wifi(){
	$.wifi = $('#wifi_stat').val();
	$('#act_lst').show();
	$('#act_lst').append('<div data-role="collapsible">'+
						'<h3>Wi-fi</h3>'+
						"<p>Turn Wi-fi "+ $.wifi +"</p>"+
						'<input type="hidden" act_type="Wifi" uiVal="Turn Wi-fi" name="wifi" id="'+'acttype_'+$.j+'" value="'+$.wifi+'"/>'+
					'</div>').trigger('create');
}

function Lock_phone(){
	$('#act_lst').show();
	$('#act_lst').append('<div data-role="collapsible">'+
						'<h3>Lock phone</h3>'+
						'<div data-role="fieldcontain">'+
							'<input type="hidden" act_type="Lock_phone" uiVal="lock" name="lock_phone" id="'+'acttype_'+$.j+'" value="Lock phone"/>'+
						'</div>'+
					'</div>').trigger('create');
	$.j = $.j +1;
}

function Change_profile(){
	$.cp = $('input[name=change_profile]:checked').val();
	$('#act_lst').show();
	$('#act_lst').append('<div data-role="collapsible">'+
						'<h3>Change profile</h3>'+
						"<p>Change profile to "+ $.cp +"</p>"+
						'<input type="hidden" act_type="Change_profile" uiVal="Change profile to" name="change_profile" id="'+'acttype_'+$.i+'" value="'+$.cp+'"/>'+
					'</div>').trigger('create');
}

function Call(){
	$('#act_lst').show();
	$('#act_lst').append('<div data-role="collapsible">'+
						'<h3>Call</h3>'+
						'<div data-role="fieldcontain">'+
							'<label for="'+'act_'+$.j+'">Phone number</label>'+
							'<input type="text" name="call" act_type="Call" id="'+'act_'+$.j+'" value="'+ $("#Call_number").val() + '"/>'+
						'</div>'+
						'</div>').trigger('create');
	$.j = $.j +1;
}

function Alert(){
	$('#act_lst').show();
	$('#act_lst').append('<div data-role="collapsible">'+
						'<h3>Alert</h3>'+
						'<div data-role="fieldcontain">'+
							'<label for="'+'act_'+$.j+'">Alert message</label>'+
							'<input type="text" act_type="Alert" name="alert_msg" id="'+'act_'+$.j+'1" value="'+ $("#Alert_content").val() + '"/>'+
						'</div>'+
						'</div>').trigger('create');
	$.j = $.j +1;
}

function ClearAndPlaceTriggers()
{
	$('#ad_trg')[0].reset();
	
	hT = $('#MST div h1').find('.ui-btn-text'),
	hST = hT.find('.ui-collapsible-heading-status');
	if(hT.length === 0){
		$('#MST div h1').text('Select Trigger');
	}
	else {
		hT.text('Select Trigger').append(hST);
	}
	$(".checked").removeClass("checked");
	$("#MST div ul li:contains('Select Trigger')").addClass("checked");
	$('#menu_select_trigger').prop('value', 'Select_trigger');
	$('#menu_select_trigger').trigger("change");
	$('#MST div').trigger('collapse');
}

function ClearAndPlaceActions()
{
	$('#ad_act')[0].reset();
	
	hT = $('#MSA div h1').find('.ui-btn-text'),
	hST = hT.find('.ui-collapsible-heading-status');
	if(hT.length === 0){
		$('#MSA div h1').text('Select Action');
	}
	else {
		hT.text('Select Action').append(hST);
	}
	$(".checked").removeClass("checked");
	$("#MSA div ul li:contains('Select Action')").addClass("checked");
	$('#menu_select_action').prop('value', 'Select_action');
	$('#menu_select_action').trigger("change");
	$('#MSA div').trigger('collapse');
}

function SaveApp()
{	
	changeto('my_apps_from_create_app');
	$ap_title=$('#app-name').val();
	$ap_desc=$('#app-desc').val();
	$ap_author='asdf';
	details = '';
	details+=
	'{"title":"'+$ap_title+'",'+
	'"desc":"'+$ap_desc+'",'+
	'"author":"'+$ap_author+'",';
	i =1;
	trggrs='';
    $('#trg_lst input').each(function() {
        var type = $(this).attr("type");

		if(type == "hidden")
		{
		trg_type = $(this).attr("trg_type");
		trg_UIval = "null";
		trg_value = $(this).val();
		trg_name = $(this).attr("name");
		}
		
		if(type=="text")
		{
		trg_type = $(this).attr("trg_type");
		trg_name = $(this).attr("name");
		trg_value = $(this).val();
		trg_UIval=$("label[for='"+$(this).attr('id')+"']").text();
		}
		
		if(i!=1)
		{
			trggrs+=",";
		}
		
		trggrs+=
		'{'+
		'"type":"'+trg_type+'",'+
		'"name":"'+trg_name+'",'+
		'"value":"'+trg_value+'",'+
		'"uiValue":"'+trg_UIval+'"'+
		'}';
		i++;
	});
	
	j = 1;
	actns='';
	$('#act_lst input').each(function() {
        var type = $(this).attr("type");
		
		if(type == "hidden")
		{
		act_type = $(this).attr("act_type");
		act_UIval = $(this).attr("uiVal");
		act_name = $(this).attr("name");
		act_value = $(this).val();
		}
		
		if(type=="text")
		{
		act_type=$(this).attr("act_type");
		act_name=$(this).attr("name");
		act_value=$(this).val();
		act_UIval=$("label[for='"+$(this).attr('id')+"']").text();
		}
		
		if(j!=1)
		{
			actns+=",";
		}
		
		actns+=
		'{'+
		'"type":"'+act_type+'",'+
		'"name":"'+act_name+'",'+
		'"value":"'+act_value+'",'+
		'"uiValue":"'+act_UIval+'"'+
		'}';
		j++;
		
	});
	
	details+=
	'"triggers":['+trggrs+'],"actions":['+actns+']}';
	//sendToWeb(details);
	json = jQuery.parseJSON(details);
	callCreateAppPlugin(json);
	$('#ad_app')[0].reset();
	showMyList();
}
function sendToWeb(json)
{
console.log("Data here:"+json);
var aurl="http://app.iautomo.com/action.php?action=addapp";
	$.post('somescript.php', 'data='+encodeURIComponent(json),
    function(replyData) {console.log(replyData)});
}
function showMyListSync(result)
{
	myListJson=jQuery.parseJSON(result);
	//console.log(result);
	$.each(myListJson.app,function(index,item){
    $('#mylist').append('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="false" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-last ui-btn-up-c">'+
	'<div class="ui-btn-inner ui-li">'+
		'<div class="ui-btn-text">'+
			'<a href="#" onclick = "createPage('+item.appid+')" class="ui-link-inherit">'+
				'<p class="ui-li-aside ui-li-desc">'+item.state+'</p>'+
				'<h1 class="ui-li-heading">'+item.title+'</h1>'+
				'<p class="ui-li-desc">'+item.desc+'</p>'+
			'</a>'+
		'</div>'+
	'</div>'+
'</li>').trigger('create');
	});
}
function showMyList()
{
	$('#mylist').empty();
	callMyAppPlugin('listApp',showMyListSync);
}
function createPage(appid)
{
	callShowAppPlugin(appid,createPageSync);
	console.log("Appid:"+appid);
}
function createPageSync(result){
	//appid="1234";

	console.log("EEEE"+result);
	showappjson = jQuery.parseJSON(result);
	tgrs="";
	p=0;
	$.each(showappjson[0].triggers,function(index,item){
	
	if(item.type=="Boot"){
    tgrs+='<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
				'<label for="showapptrigger_'+p+'" class="ui-input-text">Type</label>'+
				'<input type="text" name="'+item.name+'" id="showapptrigger_'+p+'" value="'+item.type+'" trgval="'+item.value+'" uiVal="'+item.uiValue+'" class="ui-disabled ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
			'</div>'+
			'<hr class="BB10Gradient">';
	}
	
	else if(item.type=="Time" && item.name=="date"){
	tempname = item.name;
    tempuival = item.uiValue;
	tempval = item.value;
	}
	
	else if(item.type=="Time" && item.name=="time"){
    tgrs += '<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
				'<label for="showapptrigger_'+p+'" class="ui-input-text">Type</label>'+
				'<input type="text" name="datetime" id="showapptrigger_'+p+'" value="'+item.type+'" class="ui-disabled ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
			'</div>'+
			'<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
				'<label for="showapptritypeval_'+p+'0" class="ui-input-text">'+tempuival+'</label>'+
				'<input type="text" name="'+tempname+'" id="showapptritypeval_'+p+'0" value="'+tempval+'" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
			'</div>'+
			'<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
				'<label for="showapptritypeval_'+p+'1" class="ui-input-text">'+item.uiValue+'</label>'+
				'<input type="text" name="'+item.name+'" id="showapptritypeval_'+p+'1" value="'+item.value+'" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
			'</div>'+
			'<hr class="BB10Gradient">';
	}
	
	else if(item.type=="Location" && item.name=="latitude"){
	templocname = item.name;
    templocuival = item.uiValue;
	templocval = item.value;
	}
	
	else if(item.type=="Location" && item.name=="longitude"){
    tgrs += '<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
				'<label for="showapptrigger_'+p+'" class="ui-input-text">Type</label>'+
				'<input type="text" name="location" id="showapptrigger_'+p+'" value="'+item.type+'" class="ui-disabled ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
			'</div>'+
			'<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
				'<label for="showapptritypeval_'+p+'0" class="ui-input-text">'+templocuival+'</label>'+
				'<input type="text" name="'+templocname+'" id="showapptritypeval_'+p+'0" value="'+templocval+'" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
			'</div>'+
			'<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
				'<label for="showapptritypeval_'+p+'1" class="ui-input-text">'+item.uiValue+'</label>'+
				'<input type="text" name="'+item.name+'" id="showapptritypeval_'+p+'1" value="'+item.value+'" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
			'</div>'+
			'<hr class="BB10Gradient">';
	}
	
	else{
    tgrs += '<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
				'<label for="showapptrigger_'+p+'" class="ui-input-text">Type</label>'+
				'<input type="text" name="normaltrigger" id="showapptrigger_'+p+'" value="'+item.type+'" class="ui-disabled ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
			'</div>'+
			'<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
				'<label for="showapptritypeval_'+p+'" class="ui-input-text">'+item.uiValue+'</label>'+
				'<input type="text" name="'+item.name+'" id="showapptritypeval_'+p+'" value="'+item.value+'" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
			'</div>'+
			'<hr class="BB10Gradient">';
	}
	
	p=p+1;
});

	acts="";
	q=0;
	$.each(showappjson[0].actions,function(index,item){
	
	if(item.type=="Send_SMS" && item.name=="send_msg_number"){
    tempmsguival = item.uiValue;
	tempmsgval = item.value;
	tempmsgname = item.name;
	}
	
	else if(item.type=="Send_SMS" && item.name=="send_msg_content"){
    acts += '<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
				'<label for="showappaction_'+q+'" class="ui-input-text">Type</label>'+
				'<input type="text" name="sendsms" id="showappaction_'+p+'" value="'+item.type+'" class="ui-disabled ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
			'</div>'+
			'<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
				'<label for="showapptritypeval_'+q+'0" class="ui-input-text">'+tempmsguival+'</label>'+
				'<input type="text" name="'+tempmsgname+'" id="showappacttypeval_'+q+'0" value="'+tempmsgval+'" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
			'</div>'+
			'<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
				'<label for="showappacttypeval_'+q+'1" class="ui-input-text">'+item.uiValue+'</label>'+
				'<input type="text" name="'+item.name+'" id="showappacttypeval_'+q+'1" value="'+item.value+'" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
			'</div>'+
			'<hr class="BB10Gradient">';
	}
	
	else if(item.type=="Lock_phone"){
    acts += '<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
				'<label for="showappaction_'+q+'" class="ui-input-text">Type</label>'+
				'<input type="text" name="'+item.name+'" id="showappaction_'+q+'" value="'+item.type+'" actval="'+item.value+'" uiVal="'+item.uiValue+'" class="ui-disabled ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
			'</div>'+
			'<hr class="BB10Gradient">';
	}
	
	else{
    acts += '<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
				'<label for="showappaction_'+q+'" class="ui-input-text">Type</label>'+
				'<input type="text" name="normalaction" id="showappaction_'+q+'" value="'+item.type+'" class="ui-disabled ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
			'</div>'+
			'<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
				'<label for="showappacttypeval_'+q+'" class="ui-input-text">'+item.uiValue+'</label>'+
				'<input type="text" name="'+item.name+'" id="showappacttypeval_'+q+'" value="'+item.value+'" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
			'</div>'+
			'<hr class="BB10Gradient">';
	}
	
	q=q+1;
});

	
	var $page = $("#app-page");
	$content = $page.children( ":jqmData(role=content)" );
	
	$content.html('<div class="BB10Container">'+
		'<h3 align="center">'+showappjson[0].title+'</h3>'+
		'</div>'+
    
		'<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
			'<label for="showappdesc" class="ui-input-text">Description</label>'+
			'<textarea name="textarea" id="showappdesc" placeholder="Write a description" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+showappjson[0].desc+'</textarea>'+
		'</div>'+


		'<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br" style="display:none">'+
			'<label for="showappauthor" class="ui-input-text">Author</label>'+
			'<input type="text" name="text-input" id="showappauthor" value="" class="ui-disabled ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
		'</div>'+

			
		'Triggers'+
			'<hr class="BB10Gradient">'+
			'<div id="showapptrig">'+tgrs+

			'</div>'+
		'Actions'+
			'<hr class="BB10Gradient">'+
			'<div id="showappact">'+acts+

			'</div>'+
			'<div align="center">'+
				'<a href="#page2" onclick="callDeleteAppPlugin('+showappjson[0].appid+')" data-role="button" data-inline="true" data-icon="delete" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="c" class="ui-btn ui-btn-up-c ui-shadow ui-btn-corner-all ui-btn-inline ui-btn-icon-left">'+
					'<span class="ui-btn-inner ui-btn-corner-all">'+
						'<span class="ui-btn-text">Delete</span>'+
						'<span class="ui-icon ui-icon-delete ui-icon-shadow">&nbsp;</span>'+
					'</span>'+
				'</a>'+
				'<a href="#" onclick="editApp('+showappjson[0].appid+')" data-role="button" data-inline="true" data-icon="check" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="c" class="ui-btn ui-btn-up-c ui-shadow ui-btn-corner-all ui-btn-inline ui-btn-icon-left">'+
					'<span class="ui-btn-inner ui-btn-corner-all">'+
						'<span class="ui-btn-text">Save</span>'+
						'<span class="ui-icon ui-icon-check ui-icon-shadow">&nbsp;</span>'+
					'</span>'+
				'</a>'+
			'</div>'+
			'</div>'+
			'</br></br>');
	console.log("App-id:"+showappjson[0].appid);
	//console.log("App-Id:"+showappjson[0].appId);
	$page.page();
	$.mobile.changePage($page);
}

function editApp(appid)
{
	editAppJson = '';
	editAppJsonTrig = '';
	editAppJsonAct = '';
	editAppCountT=0;
	editAppCountA=0;
	editAppJsonName=showappjson[0].title;
	editAppJsonDesc=showappjson[0].desc;
	editAppJsonAuthor=showappjson[0].author;
	editAppJson+=
	'{"title":"'+editAppJsonName+'",'+
	'"desc":"'+editAppJsonDesc+'",'+
	'"author":"'+editAppJsonAuthor+'",';
	
	$('#showapptrig input').each(function() {
        var type = $(this).attr("type");
		
		if(type == "text")
		{
			if($(this).attr("name")=="boot")
			{
				saveAppType = $(this).val();
				saveAppname=$(this).attr("name");
				saveAppvalue=$(this).attr("trgval");
				saveAppUIvalue=$(this).attr("uiVal");
			}
			
			else if($(this).attr("name")=="datetime")
			{
				saveApptype = $(this).val();
			}
				
			else if($(this).attr("name")=="date")
			{
				saveAppname=$(this).attr("name");
				saveAppvalue=$(this).val();
				saveAppUIvalue=$("label[for='"+$(this).attr('id')+"']").text();
			}
				
			else if($(this).attr("name")=="time")
			{
				saveAppname=$(this).attr("name");
				saveAppvalue=$(this).val();
				saveAppUIvalue=$("label[for='"+$(this).attr('id')+"']").text();
			}
			
			else if($(this).attr("name")=="location")
			{
				saveApptype = $(this).val();
			}
				
			else if($(this).attr("name")=="latitude")
			{
				saveAppname=$(this).attr("name");
				saveAppvalue=$(this).val();
				saveAppUIvalue=$("label[for='"+$(this).attr('id')+"']").text();
			}
				
			else if($(this).attr("name")=="longitude")
			{
				saveAppname=$(this).attr("name");
				saveAppvalue=$(this).val();
				saveAppUIvalue=$("label[for='"+$(this).attr('id')+"']").text();
			}
			
			else if($(this).attr("name")=="normaltrigger")
			{
				saveApptype = $(this).val();
			}
				
			else
			{
				saveAppname=$(this).attr("name");
				saveAppvalue=$(this).val();
				saveAppUIvalue=$("label[for='"+$(this).attr('id')+"']").text();
			}
			
			if($(this).attr("name")=="datetime" |$(this).attr("name")=="location" || $(this).attr("name")=="normaltrigger")
			{
			}
			else
			{
				if(editAppCountT>0)
				{editAppJsonTrig += ',';}
				editAppJsonTrig += 
					'{'+
					'"type":"'+saveApptype+'",'+
					'"name":"'+saveAppname+'",'+
					'"value":"'+saveAppvalue+'",'+
					'"uiValue":"'+saveAppUIvalue+'"'+
					'}';
				editAppCountT+=1;
			}
		}
	});
	
	$('#showappact input').each(function() {
        var type = $(this).attr("type");
		
		if(type == "text")
		{
			if($(this).attr("name")=="lock_phone")
			{
				saveAppType = $(this).val();
				saveAppname=$(this).attr("name");
				saveAppvalue=$(this).attr("actval");
				saveAppUIvalue=$(this).attr("uiVal");
			}
			
			else if($(this).attr("name")=="sendsms")
			{
				saveApptype = $(this).val();
			}
				
			else if($(this).attr("name")=="send_msg_number")
			{
				saveAppname=$(this).attr("name");
				saveAppvalue=$(this).val();
				saveAppUIvalue=$("label[for='"+$(this).attr('id')+"']").text();
			}
				
			else if($(this).attr("name")=="send_msg_content")
			{
				saveAppname=$(this).attr("name");
				saveAppvalue=$(this).val();
				saveAppUIvalue=$("label[for='"+$(this).attr('id')+"']").text();
			}
			
			else if($(this).attr("name")=="normalaction")
			{
				saveApptype = $(this).val();
			}
				
			else
			{
				saveAppname=$(this).attr("name");
				saveAppvalue=$(this).val();
				saveAppUIvalue=$("label[for='"+$(this).attr('id')+"']").text();
			}
			
			if($(this).attr("name")=="sendsms" || $(this).attr("name")=="normalaction")
			{
			}
			else
			{
			if(editAppCountA>0)
			{editAppJsonAct += ',';}
				editAppJsonAct += 
					'{'+
					'"type":"'+saveApptype+'",'+
					'"name":"'+saveAppname+'",'+
					'"value":"'+saveAppvalue+'",'+
					'"uiValue":"'+saveAppUIvalue+'"'+
					'}';
				editAppCountA+=1;
			}
		}
	});
	editAppJson += '"triggers":['+editAppJsonTrig+'],"actions":['+editAppJsonAct+']}';
	alert("Your Smart App Edited!");
	stJson=jQuery.parseJSON(editAppJson);
	callUpdateAppPlugin(appid,stJson);
	showMyList();
	$.mobile.changePage('#page2');
	//callCreateAppPlugin(stJson);
	//showMyList();
}

function authenticate()
{
	uname = $('#username').val();
	pass = $('#password').val();
	if(((uname == "admin")|(uname == "user")|(uname == "mani")|(uname == "pachalam")|(uname=="titto")) && (pass== "admin"|pass== "123456"|pass== "1234qwer"))
	{
		showHomeList();
		$.mobile.changePage($('#page1'));
	}
}


function showHomeList()
{
	$('#homelist').empty();
//	homeList=callMyAppPlugin();
//var surl="http://app.iautomo.com/action.php?action=apps&show=new&offset=0&count=10";
var surl="http://app.iautomo.com/action.php?action=apps";
                $.ajax({  
                    type : 'GET',  
                    contentType: "application/json; charset=utf-8",  
                    url : surl,  
                    dataType : 'json',  
                    headers : {Accept : "application/json","Access-Control-Allow-Origin" : "*"},  
                    crossDomain : true,  
                    success :SucceedFunc ,
                    error : function(data, textStatus, errorThrown) {
                            console.log("error from netconnect at load apps"+' '+JSON.stringify(data) + ' ' + textStatus + '  ' + errorThrown);  
                    }
                });  
                
				function SucceedFunc(data) {
                       console.log("Data from net:"+data);
						newdat=JSON.stringify(data);
						console.log("Data from net22:"+newdat);
						
						homeListJson=jQuery.parseJSON(newdat);
						$('#homelist').empty();
						$.each(homeListJson,function(index,item){
						$('#homelist').append('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="false" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-last ui-btn-up-c">'+
						'<div class="ui-btn-inner ui-li">'+
							'<div class="ui-btn-text">'+
								'<a href="#" onclick = "createHomePage('+item.appid+')" class="ui-link-inherit">'+
									'<h1 class="ui-li-heading">'+item.title+'</h1>'+
									'<p class="ui-li-desc">'+item.desc+'</p>'+
								'</a>'+
							'</div>'+
						'</div>'+
					'</li>').trigger('create');
						});
                }
	

	
}
function createHomePage(appid){
	var surl="http://app.iautomo.com/action.php?action=showapp&appid="+appid;
                $.ajax({  
                    type : 'GET',  
                    contentType: "application/json; charset=utf-8",  
                    url : surl,  
                    dataType : 'json',  
                    headers : {Accept : "application/json","Access-Control-Allow-Origin" : "*"},  
                    crossDomain : true,  
                    success :createHomePageOnSuccess ,
                    error : function(data, textStatus, errorThrown) {
                            console.log("error from netconnect"+' '+JSON.stringify(data) + ' ' + textStatus + '  ' + errorThrown);  
                    }
    });  

function createHomePageOnSuccess(data){
/*	showhomeapp = callShowAppPlugin(appid);*/
	
	showhomeapp	= '[{'+
'"title": "Turn ON WIFI at HOME",'+
'"desc": "This app turns on your wifi with trigger Location",'+
'"author": "ajmal",'+
'"Triggers": ['+
'{'+
'"type": "SMS",'+
'"name": "SMSCONTENT",'+
'"value": "qwe",'+
'"uiValue": "f1"'+
'},'+
'{'+
'"type": "SM",'+
'"name": "SMSCONTENT",'+
'"value": "qe",'+
'"uiValue": "f1"'+
'}'+
'],'+
'"actions": ['+
'{'+
'"type": "WIFI",'+
'"name": "WIFI",'+
'"value": "on",'+
'"uiValue": "f"'+
'}'+
']'+
'}]';

	//showhomeappjson = jQuery.parseJSON(showhomeapp);\
	showhomeappjson=data;
	console.log("DATA as object"+data);
	console.log("DATA Dcoded"+JSON.stringify(data));
	
	tgrss="";
	x=0;
	$.each(showhomeappjson[0].triggers,function(index,item){
	
	if(item.type=="Boot"){
    tgrss+='<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
				'<label for="showapptrigger_'+x+'" class="ui-input-text">Type</label>'+
				'<input type="text" name="'+item.name+'" id="showapptrigger_'+x+'" value="'+item.type+'" trgval="'+item.value+'" uiVal="'+item.uiValue+'" class="ui-disabled ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
			'</div>'+
			'<hr class="BB10Gradient">';
	}
	
	else if(item.type=="Time" && item.name=="date"){
	tempname = item.name;
    tempuival = item.uiValue;
	tempval = item.value;
	}
	
	else if(item.type=="Time" && item.name=="time"){
    tgrss += '<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
				'<label for="showapptrigger_'+x+'" class="ui-input-text">Type</label>'+
				'<input type="text" name="datetime" id="showapptrigger_'+x+'" value="'+item.type+'" class="ui-disabled ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
			'</div>'+
			'<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
				'<label for="showapptritypeval_'+x+'0" class="ui-input-text">'+tempuival+'</label>'+
				'<input type="text" name="'+tempname+'" id="showapptritypeval_'+x+'0" value="'+tempval+'" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
			'</div>'+
			'<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
				'<label for="showapptritypeval_'+x+'1" class="ui-input-text">'+item.uiValue+'</label>'+
				'<input type="text" name="'+item.name+'" id="showapptritypeval_'+x+'1" value="'+item.value+'" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
			'</div>'+
			'<hr class="BB10Gradient">';
	}
	
	else if(item.type=="Location" && item.name=="latitude"){
	templocname = item.name;
    templocuival = item.uiValue;
	templocval = item.value;
	}
	
	else if(item.type=="Location" && item.name=="longitude"){
    tgrss += '<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
				'<label for="showapptrigger_'+x+'" class="ui-input-text">Type</label>'+
				'<input type="text" name="location" id="showapptrigger_'+x+'" value="'+item.type+'" class="ui-disabled ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
			'</div>'+
			'<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
				'<label for="showapptritypeval_'+x+'0" class="ui-input-text">'+templocuival+'</label>'+
				'<input type="text" name="'+templocname+'" id="showapptritypeval_'+x+'0" value="'+templocval+'" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
			'</div>'+
			'<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
				'<label for="showapptritypeval_'+x+'1" class="ui-input-text">'+item.uiValue+'</label>'+
				'<input type="text" name="'+item.name+'" id="showapptritypeval_'+x+'1" value="'+item.value+'" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
			'</div>'+
			'<hr class="BB10Gradient">';
	}
	
	else{
    tgrss += '<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
				'<label for="showapptrigger_'+x+'" class="ui-input-text">Type</label>'+
				'<input type="text" name="normaltrigger" id="showapptrigger_'+x+'" value="'+item.type+'" class="ui-disabled ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
			'</div>'+
			'<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
				'<label for="showapptritypeval_'+x+'" class="ui-input-text">'+item.uiValue+'</label>'+
				'<input type="text" name="'+item.name+'" id="showapptritypeval_'+x+'" value="'+item.value+'" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
			'</div>'+
			'<hr class="BB10Gradient">';
	}
	
	x=x+1;
});

	actss="";
	y=0;
	$.each(showhomeappjson[0].actions,function(index,item){
	
	if(item.type=="Send_SMS" && item.name=="send_msg_number"){
    tempmsguiVal = item.uiValue;
	tempmsgval = item.value;
	tempmsgname = item.name;
	}
	
	else if(item.type=="Send_SMS" && item.name=="send_msg_content"){
    actss += '<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
				'<label for="showappaction_'+y+'" class="ui-input-text">Type</label>'+
				'<input type="text" name="sendsms" id="showappaction_'+y+'" value="'+item.type+'" class="ui-disabled ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
			'</div>'+
			'<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
				'<label for="showapptritypeval_'+y+'0" class="ui-input-text">'+tempmsguival+'</label>'+
				'<input type="text" name="'+tempmsgname+'" id="showappacttypeval_'+y+'0" value="'+tempmsgval+'" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
			'</div>'+
			'<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
				'<label for="showappacttypeval_'+y+'1" class="ui-input-text">'+item.uiValue+'</label>'+
				'<input type="text" name="'+item.name+'" id="showappacttypeval_'+y+'1" value="'+item.value+'" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
			'</div>'+
			'<hr class="BB10Gradient">';
	}
	
	else if(item.type=="Lock_phone"){
    actss += '<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
				'<label for="showappaction_'+y+'" class="ui-input-text">Type</label>'+
				'<input type="text" name="'+item.name+'" id="showappaction_'+y+'" value="'+item.type+'" actval="'+item.value+'" uiVal="'+item.uiValue+'" class="ui-disabled ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
			'</div>'+
			'<hr class="BB10Gradient">';
	}
	
	else{
    actss += '<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
				'<label for="showappaction_'+y+'" class="ui-input-text">Type</label>'+
				'<input type="text" name="normalaction" id="showappaction_'+y+'" value="'+item.type+'" class="ui-disabled ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
			'</div>'+
			'<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
				'<label for="showappacttypeval_'+y+'" class="ui-input-text">'+item.uiValue+'</label>'+
				'<input type="text" name="'+item.name+'" id="showappacttypeval_'+y+'" value="'+item.value+'" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
			'</div>'+
			'<hr class="BB10Gradient">';
	}
	
	y=y+1;
});

	
	var $hmepage = $("#app-home-page");
	$content = $hmepage.children( ":jqmData(role=content)" );
	title1=showhomeappjson[0].title;
	$content.html('<div class="BB10Container">'+
		'<h3 align="center">'+showhomeappjson[0].title+'</h3>'+
		'</div>'+
    
		'<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br">'+
			'<label for="showhomeappdesc" class="ui-input-text">Description</label>'+
			'<textarea name="textarea" id="showhomeappdesc" placeholder="Write a description" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+showhomeappjson[0].desc+'</textarea>'+
		'</div>'+


		'<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br" style="display:none">'+
			'<label for="showhomeappauthor" class="ui-input-text">Author</label>'+
			'<input type="text" name="text-input" id="showhomeappauthor" value="" class="ui-disabled ui-input-text ui-body-c ui-corner-all ui-shadow-inset">'+
		'</div>'+

			
		'Triggers'+
			'<hr class="BB10Gradient">'+
			'<div id="showapptrig">'+tgrss+

			'</div>'+
		'Actions'+
			'<hr class="BB10Gradient">'+
			'<div id="showappact">'+actss+

			'</div>'+
			'<div align="center">'+
				'<a href="#" onclick="installApp()" data-role="button" data-inline="true" data-icon="check" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="c" class="ui-btn ui-btn-up-c ui-shadow ui-btn-corner-all ui-btn-inline ui-btn-icon-left">'+
					'<span class="ui-btn-inner ui-btn-corner-all">'+
						'<span class="ui-btn-text">Install</span>'+
						'<span class="ui-icon ui-icon-check ui-icon-shadow">&nbsp;</span>'+
					'</span>'+
				'</a>'+
			'</div>'+
			'</div>'+
			'</br></br>');
	
	$hmepage.page();
	$.mobile.changePage($hmepage);
}

}

function installApp()
{
console.log("Title Receieve"+title1);
	installAppJson = '';
	installAppJsonTrig = '';
	installAppJsonAct = '';
	installAppCountT=0;
	installAppCountA=0;
	installAppJsonName=showhomeappjson[0].title;
	installAppJsonDesc=showhomeappjson[0].desc;
	installAppJsonAuthor=showhomeappjson[0].author;
	installAppJson+=
	'{"title":"'+installAppJsonName+'",'+
	'"desc":"'+installAppJsonDesc+'",'+
	'"author":"'+installAppJsonAuthor+'",';
	
	$('#showapptrig input').each(function() {
        var type = $(this).attr("type");
		
		if(type == "text")
		{
			if($(this).attr("name")=="boot")
			{
				installAppType = $(this).val();
				installAppname=$(this).attr("name");
				installAppvalue=$(this).attr("trgval");
				installAppUIvalue=$(this).attr("uiVal");
			}
			
			else if($(this).attr("name")=="datetime")
			{
				installApptype = $(this).val();
			}
				
			else if($(this).attr("name")=="date")
			{
				installAppname=$(this).attr("name");
				installAppvalue=$(this).val();
				installAppUIvalue=$("label[for='"+$(this).attr('id')+"']").text();
			}
				
			else if($(this).attr("name")=="time")
			{
				installAppname=$(this).attr("name");
				installAppvalue=$(this).val();
				installAppUIvalue=$("label[for='"+$(this).attr('id')+"']").text();
			}
			
			else if($(this).attr("name")=="location")
			{
				installApptype = $(this).val();
			}
				
			else if($(this).attr("name")=="latitude")
			{
				installAppname=$(this).attr("name");
				installAppvalue=$(this).val();
				installAppUIvalue=$("label[for='"+$(this).attr('id')+"']").text();
			}
				
			else if($(this).attr("name")=="longitude")
			{
				installAppname=$(this).attr("name");
				installAppvalue=$(this).val();
				installAppUIvalue=$("label[for='"+$(this).attr('id')+"']").text();
			}
			
			else if($(this).attr("name")=="normaltrigger")
			{
				installApptype = $(this).val();
			}
				
			else
			{
				installAppname=$(this).attr("name");
				installAppvalue=$(this).val();
				installAppUIvalue=$("label[for='"+$(this).attr('id')+"']").text();
			}
			
			if($(this).attr("name")=="datetime" |$(this).attr("name")=="location" || $(this).attr("name")=="normaltrigger")
			{
			}
			else
			{
				if(installAppCountT>0)
				{installAppJsonTrig += ',';}
				installAppJsonTrig += 
					'{'+
					'"type":"'+installApptype+'",'+
					'"name":"'+installAppname+'",'+
					'"value":"'+installAppvalue+'",'+
					'"uiValue":"'+installAppUIvalue+'"'+
					'}';
				installAppCountT+=1;
			}
		}
		console.log("reached here");
	});
	
	$('#showappact input').each(function() {
        var type = $(this).attr("type");
		
		if(type == "text")
		{
			if($(this).attr("name")=="lock_phone")
			{
				installAppType = $(this).val();
				installAppname=$(this).attr("name");
				installAppvalue=$(this).attr("actval");
				installAppUIvalue=$(this).attr("uiVal");
			}
			
			else if($(this).attr("name")=="sendsms")
			{
				installApptype = $(this).val();
			}
				
			else if($(this).attr("name")=="send_msg_number")
			{
				installAppname=$(this).attr("name");
				installAppvalue=$(this).val();
				installAppUIvalue=$("label[for='"+$(this).attr('id')+"']").text();
			}
				
			else if($(this).attr("name")=="send_msg_content")
			{
				installAppname=$(this).attr("name");
				installAppvalue=$(this).val();
				installAppUIvalue=$("label[for='"+$(this).attr('id')+"']").text();
			}
			
			else if($(this).attr("name")=="normalaction")
			{
				installApptype = $(this).val();
			}
				
			else
			{
				installAppname=$(this).attr("name");
				installAppvalue=$(this).val();
				installAppUIvalue=$("label[for='"+$(this).attr('id')+"']").text();
			}
			
			if($(this).attr("name")=="sendsms" || $(this).attr("name")=="normalaction")
			{
			}
			else
			{
			if(installAppCountA>0)
			{installAppJsonAct += ',';}
				installAppJsonAct += 
					'{'+
					'"type":"'+installApptype+'",'+
					'"name":"'+installAppname+'",'+
					'"value":"'+installAppvalue+'",'+
					'"uiValue":"'+installAppUIvalue+'"'+
					'}';
				installAppCountA+=1;
			}
		}
	});
	installAppJson += '"triggers":['+installAppJsonTrig+'],"actions":['+installAppJsonAct+']}';
	//alert(installAppJson);
	strJson=jQuery.parseJSON(installAppJson);
	//callUpdateAppPlugin(appid,strJson);
	callCreateAppPlugin(strJson);
	//showMyList();
	$.mobile.changePage($('#page1'));
}

function changeto(page)
{
	if(page=='add_app')
	{

		$('#c_detail').show();
		$('#c_trigger').hide();
		$('#c_action').hide();	
		
		$('#s_detail').removeClass('ui-disabled');
		$('#s_action').removeClass('ui-btn-active');
		$('#s_detail').addClass('ui-btn-active');
		
		$('#act_lst').empty();
		$('#act_lst').hide();
		$('#trg_lst').empty();
		$('#trg_lst').hide();
		
		$('#app-desc').addClass('ui-disabled');
		$('#b_trigger_enb').addClass('ui-disabled');
		$('#Alert_finish').addClass('ui-disabled');
		$('#Call_finish').addClass('ui-disabled');
		$('#Send_SMS_finish').addClass('ui-disabled');
		$('#Send_SMS_content').addClass('ui-disabled');
		$('#Location_finish').addClass('ui-disabled');
		$('#longitude').addClass('ui-disabled');
		$('#Time_finish').addClass('ui-disabled');
		$('#time').addClass('ui-disabled');
		$('#Battery_finish').addClass('ui-disabled');
		$('#SMS_from_a_number_finish').addClass('ui-disabled');
		$('#SMS_with_content_finish').addClass('ui-disabled');
		$('#Boot_finish').addClass('ui-disabled');
				
		$.mobile.changePage($('#page3'));
	}
	
	else if(page=='my_apps_from_create_app')
	{
		
		$.mobile.changePage($('#page2'));
		
	}
	else if(page=='home')
	{
		
		$.mobile.changePage($('#page1'));
		showHomeList();
	}
	else if(page=='myapps')
	{
		
		$.mobile.changePage($('#page2'));
		showMyList();
	}
}