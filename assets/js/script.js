$(document).ready(function()  {

	$(".button").click(function() {

		let buttonName = $(this).text();
		let buttonActive = $(this).hasClass("active");

		// UNCOMMENT THE SECTION BELOW FOR PART 2

		let condition =! buttonActive;

		// YOUR CODE HERE - PART 2.1

		if (condition) {
			$(this).addClass("active");
			$(this).removeClass("inactive");

			if (buttonName == "Opinion") {
				$("#opinion").removeClass("blue");
			}
			else if (buttonName == "Arts & Entertainment") {
				$("#arts").removeClass("blue");
			}
			else if (buttonName == "Sports") {
				$("#sports").removeClass("blue");
			}
			else if (buttonName == "Blog") {
				$("#blog").removeClass("blue");
			}
			else if (buttonName == "Design") {
				$("#design").removeClass("blue");
			}
			else if (buttonName == "Weekender") {
				$("#weekender").removeClass("blue");
			}
			else if (buttonName == "Night") {
				$("#night").removeClass("blue");
			}
			else if (buttonName == "Creative Director") {
				$("#cd").removeClass("blue");
			}
			else if (buttonName == "Managing Editor") {
				$("#me").removeClass("blue");
			}
			else {
				$("#multimedia").removeClass("blue");
			}

		} else {
			
			$(this).addClass("inactive");
			$(this).removeClass("active");

			if (buttonName == "Opinion") {
				$("#opinion").addClass("blue");
			}
			else if (buttonName == "Arts & Entertainment") {
				$("#arts").addClass("blue");
			}
			else if (buttonName == "Sports") {
				$("#sports").addClass("blue");
			}
			else if (buttonName == "Blog") {
				$("#blog").addClass("blue");
			}
			else if (buttonName == "Design") {
				$("#design").addClass("blue");
			}
			else if (buttonName == "Weekender") {
				$("#weekender").addClass("blue");
			}
			else if (buttonName == "Night") {
				$("#night").addClass("blue");
			}
			else if (buttonName == "Creative Director") {
				$("#cd").addClass("blue");
			}
			else if (buttonName == "Managing Editor") {
				$("#me").addClass("blue");
			}
			else {
				$("#multimedia").addClass("blue");
			}

		} 
		
		
	})
})

