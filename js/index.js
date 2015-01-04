function changeSiteLocation(new_text, s_speed) {
	$("#sitelocation").animate({width: 'toggle'}, {duration: s_speed});
	setTimeout(function(){
		$("#sitelocation").text(new_text);
	}, s_speed);
	$("#sitelocation").delay(s_speed).animate({width: 'toggle'}, {duration: s_speed});
}

$(document).ready(function(){
	var slidespeed = 200;
	var loadinspeed = 400;
	$("#navbar-right").animate({"top" : "0px"}, loadinspeed);
	$("#navbar").delay(loadinspeed / 2.0).animate({"top" : "0px"}, loadinspeed);
	$("#attribution").slideDown(loadinspeed);
	$("#homescreen").delay(loadinspeed).fadeIn(loadinspeed)
	
	$("#blogbutton").hover(
		function() {
			$("#hlrpsb").slideDown(slidespeed);
		},
		function () {}
	);
	$("#youtubebutton").hover(
		function() {
			$("#hlrpsb").slideUp(slidespeed);
		},
		function () {}
	);
	$("#googleplusbutton").hover(
		function() {
			$("#hlrpsb").slideUp(slidespeed);
		},
		function () {}
	);
	$("#githubbutton").hover(
		function() {
			$("#hlrpsb").slideUp(slidespeed);
		},
		function () {}
	);
	$("#hlrpsb").mouseleave(
		function() {
			$("#hlrpsb").slideUp(slidespeed);
		}
	);
	$("#backbutton").click(
		function() {
			$(".projectbox").slideUp(slidespeed);
			$("#projectsheader").fadeOut(slidespeed);
			$("#resumebody").slideUp(slidespeed);
			$("#aboutme").slideUp(slidespeed);
			$("#bugfixes").slideUp(slidespeed);
			$("#backbutton").slideUp(slidespeed);
			$("#mainbox").fadeOut(slidespeed);
			$("#homescreen").delay(slidespeed).fadeIn(slidespeed);
			changeSiteLocation(" Home", slidespeed);
		}
	);
	$("#aboutmebutton").click(
		function() {
			$("#homescreen").fadeOut(slidespeed);
			$("#mainstart").fadeOut(slidespeed);
			$(".projectbox").slideUp(slidespeed);
			$("#resumebody").slideUp(slidespeed);
			$("#backbutton").delay(slidespeed).fadeIn(slidespeed);
			$("#mainbox").delay(slidespeed).fadeIn(slidespeed);
			$("#aboutme").delay(slidespeed * 2).slideDown(slidespeed);
			changeSiteLocation(" About Me", slidespeed);
		}
	);
	$("#bugfixesbutton").click(
		function() {
			$("#homescreen").fadeOut(slidespeed);
			$("#mainstart").fadeOut(slidespeed);
			$(".projectbox").slideUp(slidespeed);
			$("#resumebody").slideUp(slidespeed);
			$("#backbutton").delay(slidespeed).fadeIn(slidespeed);
			$("#mainbox").delay(slidespeed).fadeIn(slidespeed);
			$("#bugfixes").delay(slidespeed * 2).slideDown(slidespeed);
			changeSiteLocation(" Bug Fixes", slidespeed);
		}
	);
	$("#resumebutton").click(
		function() {
			$("#homescreen").fadeOut(slidespeed);
			$("#mainstart").fadeOut(slidespeed);
			$("#aboutme").slideUp(slidespeed);
			$(".projectbox").slideUp(slidespeed);
			$("#backbutton").delay(slidespeed).fadeIn(slidespeed);
			$("#mainbox").delay(slidespeed).fadeIn(slidespeed);
			$("#resumebody").delay(slidespeed * 2).slideDown(slidespeed);
			changeSiteLocation(" Résumé", slidespeed);
		}
	);
	$("#personalprojectsbutton").click(
		function() {
			$("#homescreen").fadeOut(slidespeed);
			$("#mainstart").fadeOut(slidespeed);
			$("#aboutme").slideUp(slidespeed);
			$("#resumebody").slideUp(slidespeed);
			$("#backbutton").delay(slidespeed).fadeIn(slidespeed);
			$("#mainbox").delay(slidespeed).fadeIn(slidespeed);
			$(".projectbox").delay(slidespeed * 2).slideDown(slidespeed);
			$("#projectsheader").delay(slidespeed * 2).slideDown(slidespeed);
			changeSiteLocation(" Personal Projects", slidespeed);
		}
	);
	$(".projectbox").click(
		function() {
			$(".projectbox").not(this).each(function() {
				$(this).children(".projectboxcontents").slideUp(slidespeed);
			});
			$(this).children(".projectboxcontents").slideToggle(slidespeed);
		}
	);
});
