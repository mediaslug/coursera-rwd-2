// put your javascript code here
console.log("ready");
	var animals_data = {
		image1 : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Coast_Garter_Snake.jpg/500px-Coast_Garter_Snake.jpg",
		image2 : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Nerodia_sipedon_shedding.JPG/440px-Nerodia_sipedon_shedding.JPG",
		name : "Snake",
		description : "Snakes are elongated, legless, carnivorous reptiles of the suborder Serpentes that can be distinguished from legless lizards by their lack of eyelids and external ears. Like all squamates, snakes are ectothermic, amniote vertebrates covered in overlapping scales. Many species of snakes have skulls with several more joints than their lizard ancestors, enabling them to swallow prey much larger than their heads with their highly mobile jaws. To accommodate their narrow bodies, snakes' paired organs (such as kidneys) appear one in front of the other instead of side by side, and most have only one functional lung. Some species retain a pelvic girdle with a pair of vestigial claws on either side of the cloaca. Living snakes are found on every continent except Antarctica, and on most smaller land masses — exceptions include some large islands, such as Ireland and New Zealand, and many small islands of the Atlantic and central Pacific.[3] Additionally, sea snakes are widespread throughout the Indian and Pacific Oceans. More than 20 families are currently recognized, comprising about 500 genera and about 3,400 species.[4][5] They range in size from the tiny, 10 cm-long thread snake to the reticulated python of up to 6.95 meters (22.8 ft) in length.[6] The fossil species Titanoboa cerrejonensis was 13 meters (43 ft) long.[7] Snakes are thought to have evolved from either burrowing or aquatic lizards, perhaps during the Jurassic period, with the earliest known fossils dating to between 143 and 167 Ma ago.[8] The diversity of modern snakes appeared during the Paleocene period (c 66 to 56 Ma ago). The oldest preserved descriptions of snakes can be found in the Brooklyn Papyrus. Most species are nonvenomous and those that have venom use it primarily to kill and subdue prey rather than for self-defense. Some possess venom potent enough to cause painful injury or death to humans. Nonvenomous snakes either swallow prey alive or kill by constriction."
	};

	// grab our template code from the DOM
	var source = $("#animals-template").html();

	// compile the template so we can use it
	var template = Handlebars.compile(source);

	console.log("foo");

	// generate HTML from the data
	var html = template(animals_data);

	// add the html to the content div
	$("#content").html(html);
