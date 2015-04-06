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

function openSection(section_id, section_name) {
	var slidespeed = 200;
	prepareForSection();
	$(section_id).delay(slidespeed * 2).slideDown(slidespeed);
}

function openProjectButton(project_box_id, project_name) {
	var slidespeed = 200;
	prepareForSection();
	$(project_box_id).delay(slidespeed * 2).slideDown(slidespeed);
}

function toggleCategory(target_chevron, target_category_id) {
	var slidespeed = 200;
	$(".categorybuttons").not(target_category_id).each(function() {
		$(this).slideUp(slidespeed);
	});
	$(".categorychevron").not(target_chevron).removeClass("rotated");
	$(target_category_id).slideToggle(slidespeed);
	$(target_chevron).toggleClass("rotated");
}

/*
function disableScroll() {
	document.getElementsByTagName('body')[0].style.overflow='hidden';
}

function enableScroll() {
	document.getElementsByTagName('body')[0].style.overflow='auto';
}
*/

$(document).ready(function(){
	var slidespeed = 200;
	var loadinspeed = 400;
	$("#backbutton").animate({width: 'toggle'}, {duration: 0});
	$("#navbar-right").animate({"top" : "0px"}, loadinspeed);
	$("#navbar").delay(loadinspeed / 2.0).animate({"top" : "0px"}, loadinspeed);
	$("#attribution").slideDown(loadinspeed);
	$("#homescreen").delay(loadinspeed).fadeIn(loadinspeed)
	$(".categoryheader").each(function(index) {
		$(this).delay((loadinspeed / 2.0) * index + loadinspeed).fadeIn(loadinspeed * 2.0);
	});

	// Category headers actions
	$("#sectionscategory").click(
		function() {
			toggleCategory($(this).children(".categorychevron"), "#sectionsbuttons");
		}
	);
	$("#linkscategory").click(
		function() {
			toggleCategory($(this).children(".categorychevron"), "#linksbuttons");
		}
	);
	$("#projectscategory").click(
		function() {
			toggleCategory($(this).children(".categorychevron"), "#projectsbuttons");
		}
	);
	$("#profilescategory").click(
		function() {
			toggleCategory($(this).children(".categorychevron"), "#profilesbuttons");
		}
	);

	// Buttons actions
	$("#backbutton").click(
		function() {
			$(".projectbox").slideUp(slidespeed);
			$("#projectsheader").fadeOut(slidespeed);
			$("#resumebody").slideUp(slidespeed);
			$("#aboutme").slideUp(slidespeed);
			$("#bugfixes").slideUp(slidespeed);
			$("#links").slideUp(slidespeed);
			showBackButton(slidespeed);
			$("#mainbox").fadeOut(slidespeed);
			$("#homescreen").delay(slidespeed).fadeIn(slidespeed);
		}
	);
	$("#aboutmebutton").click(
		function() {
			openSection("#aboutme", "About Me");
		}
	);
	$("#bugfixesbutton").click(
		function() {
			openSection("#bugfixes", "Bug Fixes");
		}
	);
	$("#linksbutton").click(
		function() {
			openSection("#links", "Links");
		}
	);
	$("#resumebutton").click(
		function() {
			openSection("#resumebody", "Résumé");
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
