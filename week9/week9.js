<script type="text/javascript">
	// Use this Array of objects to complete the assignment.
	var people = [
		{ first: "Jason", last: "Vorhees", credit: "Friday the 13th" },
		{ first: "Freddy", last: "Krueger", credit: "A Nightmare on Elm Street" },
		{ first: "Roger", last: "Rabbit", credit: "Who Framed Roger Rabbit" },
		{ first: "Kevin", last: "McCallister", credit: "Home Alone" },
		{ first: "Godzilla", last: "King of The Monsters", credit: "Godzilla" },
		{ first: "Buzz", last: "Lightyear", credit: "Toy Story" },
		{ first: "Marion", last: "Cobretti", credit: "Cobra" }
	];

	// Get the body element
	var body = document.querySelector("body");

	// Loop through the first 6 people
	for (var i = 0; i < 6; i++) {
		var tempDiv = document.createElement("div");

		// Set ID using the incrementor
		tempDiv.setAttribute("id", String(i));

		// Set class to "border"
		tempDiv.setAttribute("class", "border");

		// Loop through each property in the person object
		for (var prop in people[i]) {
			var tempP = document.createElement("p");
			var text = document.createTextNode(people[i][prop]);
			tempP.appendChild(text);
			tempDiv.appendChild(tempP);
		}

		// Append the div to the body
		body.appendChild(tempDiv);
	}
</script>
