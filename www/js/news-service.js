angular.module('starter.news-service', [])
.factory('News', function() {

var news = "js/mock-news.json";



function Click(){
	console.log("entered news-service.js");
}


/*function loadJSON(branchCode,activity,callback){
    alert(branchCode + activity);
	$.getJSON('js/'+'mock-'+activity+'.json',function(data, status, xhr){
		if(xhr!=null && xhr.status>=200 && xhr.status<=399){ 
			console.log($.parseJSON(JSON.stringify(data))); 
			if(callback!=null){
				callback($.parseJSON(JSON.stringify(data)));
			}
		}else{
			globalError('#'+xhr.status+' page not found.'); 
		}
	});
}
*/


return{

	all: function(branchCode,activity,callback){
			alert(branchCode + activity);
	$.getJSON('js/'+'mock-'+activity+'.json',function(data, status, xhr){
		if(xhr!=null && xhr.status>=200 && xhr.status<=399){ 
			console.log($.parseJSON(JSON.stringify(data))); 
			if(callback!=null){
				callback($.parseJSON(JSON.stringify(data)));
			}
		}else{
			globalError('#'+xhr.status+' page not found.'); 
		}
	});
	}

	get: function(){
		console.log("news-serviice.js iinto return");
	}
};

});

/*function loadRestJSON(activity,callback){
	$.getJSON(activity,function(data, status, xhr){
		if(xhr!=null && xhr.status>=200 && xhr.status<=399){ 
			console.log($.parseJSON(JSON.stringify(data))); 
			if(callback!=null){
				callback($.parseJSON(JSON.stringify(data)));
			}
		}else{
			globalError('#'+xhr.status+' page not found.'); 
		}
	});
}

function loadMenu(menuname){ 
	if(menuname=="home"){
		location.reload();
		/*$('#post-menu,#container').hide();
		loadPage4Activity('#home-ruc-banner','banner',null,null);
		loadPage4Activity('#trending-wall','trending-wall',null,null);
		loadPage4Activity('#prayer-leader','prayer-leader',null,null);
		loadPage4Activity('#resources-events-testimonial','resources-events-testimonial',null,null); 
		loadPage4Activity('#footer','footer',null,null); 
		//initMap();
		//google.maps.event.trigger(map, 'resize');
		$('#home-ruc-banner,#trending-wall,#prayer-leader,#resources-events-testimonial').show();*/
		/*$('.dropdown-button').dropdown({
			  inDuration: 300,
			  outDuration: 225,
			  constrain_width: false, // Does not change width of dropdown to that of the activator
			  hover: true, // Activate on hover
			  gutter: 0, // Spacing from edge
			  belowOrigin: false, // Displays dropdown below the button
			  alignment: 'left' // Displays dropdown with edge aligned to the left of button
	/*	});*/
	/*}else{
		$('#home-ruc-banner,#trending-wall,#prayer-leader,#resources-events-testimonial').hide(); 
		loadPage4Activity('#post-menu', "post-menu", null, null);	
		loadPage4Activity('#container', menuname, null, null);	
		$('#post-menu,#container').show();
	}
}


function successMessage(message){
	Materialize.toast(message, 4000)
}

function errorMessage(message){
	Materialize.toast('<p style="color:red">' + message+ '</p>', 4000);
}

//loading html file  up on clicking on activities list
function loadContainerContents(filepath){
	console.log("Inside Load  container" + filepath);
	currentDivName = filepath;   
}

function generateLikeButton(id){
    return '<span class="likebtn-wrapper" data-theme="custom" data-btn_size="24" data-icon_l_url="http://www.riseupcanada.org/test/images/amen-btn.jpg" data-icon_l_url_v="http://www.riseupcanada.org/test/images/amen-btn-active.jpg" data-icon_size="5" data-i18n_like="Amen" data-white_label="true" data-identifier="'+ id +'" data-dislike_enabled="false" data-icon_like_show="false" data-icon_dislike_show="false" data-voting_cancelable="false" data-counter_type="single_number" data-popup_disabled="true" data-share_enabled="false" data-tooltip_enabled="false" data-site_id="57c90a139b1d1b1c0689f324"></span><script>(function(d,e,s){if(d.getElementById("likebtn_wjs"))return;a=d.createElement(e);m=d.getElementsByTagName(e)[0];a.async=1;a.id="likebtn_wjs";a.src=s;m.parentNode.insertBefore(a, m)})(document,"script","//w.likebtn.com/js/w/widget.js");</script>';
}*/*/