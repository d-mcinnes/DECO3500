$.urlParam = function(name){
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}

$(function(){
	
	var username = "";
	
	if($.urlParam("username") != null) {
		var username = $.urlParam("username");
		$("#login-text").text("Logout");
		console.log("EXECUTED!");
	}
	
	$("#user-name").text(username);
	
	$(".accountArticles").css('cursor','pointer');
	
	$(".accountComments").click(function(){
		$("#comments").fadeIn('fast')
		$("#articles").fadeOut('fast');
		$(".accountArticles").removeClass('category-selected')
							 .css('cursor','pointer');
		$(".accountComments").addClass('category-selected')
							 .css('cursor','default');
	});
	$(".accountArticles").click(function(){
		$("#articles").fadeIn('fast');
		$("#comments").fadeOut('fast');
		$(".accountComments").removeClass('category-selected')
							 .css('cursor','pointer');
		$(".accountArticles").addClass('category-selected')
							 .css('cursor','default');
	});
	
	$("#shop").click(function(){
		$("#alertbox, #shop-box").stop().show('fast');
		$("#bg").stop().animate({ opacity: .4 }, 200)
				.css('pointer-events','auto')
				.click(function(){
			$("#alertbox, #shop-box").hide('fast');
			$("#bg").stop().animate({ opacity: 0 }, 200)
				.css('pointer-events','none');
		});
	});
	
	function showLoginBox() {
		$("#alertbox").css("width",400);
		$("#alertbox, #login-box").stop().show('fast');
		$("#bg").stop().animate({ opacity: .4 }, 200)
				.css('pointer-events','auto')
				.click(function(){
			$("#alertbox, #login-box").hide('fast');
			$("#bg").stop().animate({ opacity: 0 }, 200)
				.css('pointer-events','none');
		});
	}
	
	$("#login").click(function(){
		if($.urlParam("username") != null){
			username = "";
			window.open("index.html","_self");
		} else {
			showLoginBox();
		}
	});
	
	$("#search-bar").focusin(function(){
		$("#search-categories").show();
	});
	
	$("#search-bar").focusout(function(){
		$("#search-categories").hide();
	});
	
	$("#title1").click(function(){
		$('#publish-textarea').removeClass();
		$('#publish-textarea').addClass('minion-pro txt-12pt');
	});	
	
	$("#title2").click(function(){
		$('#publish-textarea').removeClass();
		$('#publish-textarea').addClass('tahoma txt-12pt');
	});
	
	$("#body1").click(function(){
		$('#publish-textarea').removeClass();
		$('#publish-textarea').addClass('tahoma txt-8pt');
	});	
	
	$("#style1").click(function(){
		var style = $('#publish-textarea').css('font-style');
		if(style != 'italic'){
			$('#publish-textarea').css('font-style','italic');
		} else {
			$('#publish-textarea').css('font-style','normal');
		};
	});
	
	$("#style2").click(function(){
		var weight = $('#publish-textarea').css('font-weight');
		if(weight != 'bold'){
			$('#publish-textarea').css('font-weight','bold');
		} else {
			$('#publish-textarea').css('font-weight','normal');
		};
	});
	
	$(".link-account").click(function(){
		if(username != ""){
			window.open("account.html?username=" + username,"_self");
		} else {
			showLoginBox();
		}
	});
	
	$(".link-publish").click(function(){
		if(username != ""){
			window.open("publish.html?username=" + username,"_self");
		} else {
			showLoginBox();
		}
	});
	
	$(".link-index").click(function(){
		if(username != ""){
			window.open("index.html?username=" + username,"_self");
		} else {
			window.open("index.html","_self");
		}
	});
	
	$("#login-submit").click(function(){
		loginFormSubmit()
	});
	
	$("#login-password").bind('keyup', function(e) {
    	if ( e.keyCode === 13 ) { // 13 is enter key
        	loginFormSubmit()
    	}
	});
	
	function loginFormSubmit(){
		if($("#login-password").val().length > 5){
			username = $("#login-username").val();
			$("#login-passwordalert").hide();
			window.open("account.html?username=" + username,"_self");
		} else {
			$("#login-passwordalert").show();
		}
	}
});