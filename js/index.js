function showBackButton(s_speed) {
	$("#backbutton").delay(s_speed).animate({width: 'toggle'}, {duration: s_speed});
}

function prepareForSection() {
	var slidespeed = 200;
	$("#homescreen").fadeOut(slidespeed);
	$("#mainstart").fadeOut(slidespeed);
	showBackButton(slidespeed);
	$("#mainbox").delay(slidespeed).fadeIn(slidespeed);
}

function openProjectButton(project_box_id, project_name) {
	var slidespeed = 200;
	prepareForSection();
	$(project_box_id).delay(slidespeed * 2).slideDown(slidespeed);
}

$(document).ready(function(){
	var slidespeed = 200;
	var loadinspeed = 400;
	$("#backbutton").animate({width: 'toggle'}, {duration: 0});
	$("#navbar").animate({"top" : "0px"}, loadinspeed);
	$("footer").slideDown(loadinspeed);
	$("#homescreen").delay(loadinspeed).fadeIn(loadinspeed)
	$(".categoryheader").each(function(index) {
		$(this).delay((loadinspeed / 2.0) * index + loadinspeed).fadeIn(loadinspeed * 2.0);
	});

	// Buttons actions
	$("#backbutton").click(
		function() {
			$(".projectbox").slideUp(slidespeed);
			$("#projectsheader").fadeOut(slidespeed);
			showBackButton(slidespeed);
			$("#mainbox").fadeOut(slidespeed);
			$("#homescreen").delay(slidespeed).fadeIn(slidespeed);
		}
	);

	$(".projectbutton").click(
		function() {
			switch (this.id) {
				case "websiteprojectbutton":
					openProjectButton("#websiteprojectbox", "Website");
					break;
				case "chocolateypackagesprojectbutton":
					openProjectButton("#chocolateypackagesprojectbox", "Chocolatey packages");
					break;
				case "gxsubosprojectbutton":
					openProjectButton("#gxsubosprojectbox", "GxSubOS");
					break;
				case "grivedaemonprojectbutton":
					openProjectButton("#grivedaemonprojectbox", "grive-daemon");
					break;
				case "mykaryotesprojectbutton":
					openProjectButton("#mykaryotesprojectbox", "MyKaryotes");
					break;
			}
		}
	);
});
