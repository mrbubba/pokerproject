$(document).ready(function()  {
	$("td").click(function() {
		$(this).toggleClass("select");
	});
	
	var profile = ""
	
	$("#save").click(function() {
		profile = "";
		$("td").each(function() {
			if ($(this).hasClass("select"))
			{profile = profile + $(this).attr("id")+","};
		});
		$("ul").text(profile);
	});
});
	
