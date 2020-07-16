/*
    TODO: Line 68:6, it says checkVehicle is not defined and will not go to the checkinterior run, necessary for the key. -ALREADY FIXED- Needed investigateVehicle var instead.
	TODO: FIX THE LOGIC TO PREVENT YOU FROM SAYING 'YES' BEFORE YOU EVEN CHECK FOR THE TIRE IRON. 
    TODO: YOU CAN TRICK THE LOGIC INTO PICKING UP THE TIRE IRON AGAIN IF YOU DO IT AFTER GETTING OUT IN trunk_open. -ALREADY FIXED-
*/
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Simple clear screen
function clear() {
	$('#game-text').text("");
}

// Get Player Input
function playerInput(value) {
			switch(choice) {
				case "a":
					chooseOption("a");
					break;
				case "b":
					chooseOption("b");
						break;
				case "c":
					chooseOption("c");
						break;
				case "y":
					chooseOption("y");
						break;
				case "n":
					chooseOption("n");
						break;
				case "":
					clear()
					$('#game-text').append(dialogue[currentLocation].description);
						break;
				case "help":
					alert("HOW TO PLAY:\n\nPlease press A, B, C, Y, or N when prompted.");
					break;
				default:
					alert("Invalid input. Please try again.")
		}
}

function chooseOption(opt) {
	if(dialogue[currentLocation].options[opt] !== undefined) {
		currentOption = dialogue[currentLocation].options[opt];
		clear()
		$('#game-text').append(dialogue[currentLocation].options[opt]);
	}
		if(dialogue[currentLocation].options["y"] == undefined) {
			$('#game-text').append("<p><i><b>'Press Enter to Continue'</i></b>");
		}
	/*
	if(dialogue.checkdoll.suboptions[opt] !== undefined) {
		console.log("Sub-option called.")
		currentOption = dialogue[currentLocation].suboptions[opt];
		clear()
		$('#game-text').append(dialogue.checkdoll.suboptions[opt]);
	} else {
		console.log("Sub-option is undefined. Moving on...")
	}

	if(dialogue.checkdoll.choice[opt] !== undefined) {
		console.log("Choice called.")
		currentOption = dialogue.checkdoll.choice[opt];
		clear()
		$('#game-text').append(dialogue.checkdoll.choice[opt]);
	} else {
		console.log("Choice is undefined. Moving on...")
	} 
	*/
	// Logic for inventory

	if(currentOption == "You picked up the tire iron.") {
		invTireIron = 1;
		console.log("Got the tire iron.")
		investigateTrunk = 1;
		dialogue.trunk_open.options["a"] = "You already investigated the trunk.";
		dialogue.introhandle.options["b"] = "You already investigated the trunk.";
		} else if(currentOption == "You did not pick up the tire iron.") {
			invTireIron = 0;
			investigateTrunk = 1;
			dialogue.trunk_open.options["a"] = "You already investigated the trunk.";
			dialogue.introhandle.options["b"] = "You already investigated the trunk.";
	}

	if(currentOption == dialogue.trunk_out.options["b"]) {
		if(investigateVehicle != 1) {
			currentLocation = "checkvehicle";
		}
	}

	if(currentOption == dialogue.checkvehicle.options["a"]) {
		if(invTireIron == 1) {
			dialogue.checkvehicle.options["a"] = "<p>Clutching the tire iron in your white-knuckled fist, you strike the window once. The tire iron bounces off with little more than a loud pop. You strike it \
			again, this time more towards the edge. Less of a pop, more of a crack. You strike it again with all your might and the glass shatters. Armed with knowledge from action movies, you use the tire \
			iron to clear out the glass in the frame and pull up the lock switch. With reckless abandon, you grab the door handle and throw it open.</p>"
			currentLocation = "checkinterior";
			clear()
			$('#game-text').append(dialogue[currentLocation].description);
		}
	}
	// General Catch-All for The Few Tire Iron Instances
	if(currentOption == "You picked up the tire iron.") {
		invTireIron = 1;
		investigateTrunk = 1;
		dialogue.trunk_open.options["a"] = "You already investigated the trunk.";
		dialogue.introhandle.options["b"] = "You already investigated the trunk.";
	} else if(currentOption == "You did not pick up the tire iron.") {
		invTireIron = 0;
		investigateTrunk = 1;
		dialogue.trunk_open.options["a"] = "You already investigated the trunk.";
		dialogue.introhandle.options["b"] = "You already investigated the trunk.";
	}
	
	// If you go straight for the key...
	if(currentOption == dialogue.checkinterior.options["c"]) {
		investigateVehicle = 1;
		dialogue.trunk_out.options["b"] = "You already investigated the vehicle."
		currentLocation = locations[locationInt];	
	}

	// Creepy Doll Interaction
	if(currentOption == dialogue.tripped_up.options["b"] && investigateDoll == 0) {
		currentLocation = "checkdoll";
		clear()
		$('#game-text').append(dialogue[currentLocation].description);

	} else if(investigateDoll == 1) {
		dialogue.checkdoll.options["b"] = "You already investigated the doll.";
		}

	// Coin Interaction
	if(currentOption == dialogue.tripped_up.options["c"] && investigateCoin == 0) {
		currentLocation = "takecoin";
		clear()
		$('#game-text').append(dialogue[currentLocation].description);

	} else if(investigateCoin == 1) {
		dialogue.tripped_up.options["c"] = "You already investigated the coin.";
		}

	if(currentOption == dialogue.checkdoll.options["a"] && investigateDoll == 0) {
		// PULL THE RING?
		clear()
		$('#game-text').append("<p>Nothing exciting jumps out at you except for that dingy white ring on the back of the doll.</p><p>Pull the ring? (Y/N): </p>");

	} else if(currentOption == dialogue.checkdoll.options["b"] && investigateDoll == 0) {
		invDoll = 0;
		investigateDoll = 1;
		dialogue.tripped_up.options["b"] = "You chose not to investigate the doll.";
		dialogue.checkdoll.options["a"] = "You chose not to investigate the doll.";
		currentLocation = "tripped_up";
		console.log("Your currentLocation changed to 'tripped_up'.");
		currentOption = dialogue[currentLocation].options[opt];
		console.log("Returning to currentLocation.options.");

	} else if(currentOption == dialogue.checkdoll.options["c"] && invDoll == 0) {
		// YOU GET THE DOLL
		invDoll = 1;
		investigateDoll = 1;
		dialogue.tripped_up.options["b"] = "You already stowed away the doll.";
		dialogue.checkdoll.options["a"] = "You already stowed away the doll.";
		console.log("You got the doll.");
	}

	// Evaluate the options of checkdoll
	if(currentOption == dialogue.checkdoll.options["y"]) {
		//$('#game-text').append(dialogue.checkdoll.options["y"]);
		ringPulled = 1;
		console.log("Ring has been pulled.");
		console.log("Changing location to 'takedoll'.")
		currentLocation = "takedoll";

	} else if(currentOption == dialogue.checkdoll.options["n"]) {
		console.log("Ring has not been pulled.");
		console.log("Changing location to 'takedoll'.")
		currentLocation = "takedoll";
	}

	// Take the doll, or don't take the doll.
	if(currentOption == dialogue.takedoll.options["y"]) {
		invDoll = 1;
		console.log("You got the doll.");
		investigateDoll = 1;
		dialogue.tripped_up.options["b"] = "You already investigated the doll.";
		currentLocation = "tripped_up";
		console.log("Your currentLocation changed to 'tripped_up'.");
		currentOption = dialogue[currentLocation].options[opt];
		console.log("Returning to currentLocation.options.");
		
	} else if(currentOption == dialogue.takedoll.options["n"]) {
		currentOption = dialogue[currentLocation].options[opt];
		investigateDoll = 1;
		dialogue.tripped_up.options["b"] = "You already investigated the doll.";
		currentLocation = "tripped_up";
		console.log("Returning to currentLocation.options.");
}

	// Take the coin, or don't take the coin.
	if(currentOption == dialogue.takecoin.options["y"]) {
		invCoin = 1;
		console.log("You got the coin.");
		investigateCoin = 1;
		dialogue.tripped_up.options["c"] = "You already investigated the coin.";
		currentLocation = "tripped_up";
		console.log("Your currentLocation changed to 'tripped_up'.");
		currentOption = dialogue[currentLocation].options[opt];
		console.log("Returning to currentLocation.options.");
		
	} else if(currentOption == dialogue.takecoin.options["n"]) {
		currentOption = dialogue[currentLocation].options[opt];
		investigateCoin = 1;
		dialogue.tripped_up.options["c"] = "You already investigated the coin.";
		currentLocation = "tripped_up";
		console.log("Returning to currentLocation.options.");
}

	// Do you drink from the river?
	if(currentOption == dialogue.at_bridge.options["a"]) {
		drinkRiver = 1;
		console.log("You drank from the river.");
		dialogue.at_bridge.options["a"] = "You've already sated your thirst.";
}

	// Investigating the tacklebox.
	if(currentOption == dialogue.on_bridge.options["a"]) {
		currentLocation = 'tacklebox';
		console.log("Current location changed to 'tacklebox'.");
}

    // Tacklebox Investigation
	if(currentOption == dialogue.tacklebox.options["a"]) {
		invPlyers = 1;
		console.log("You got the plyers.");
		investigatePlyers = 1;
		dialogue.tacklebox.options["a"] = "You already took the plyers.";
	} else if (currentOption == dialogue.tacklebox.options["b"]) {
		invHookLine = 1;
		console.log("You got the fishing hook and fishing line.");
		investigateHookLine = 1
		dialogue.tacklebox.options["b"] = "You already took the fishing line and fishing hook.";

	} else if(currentOption == dialogue.tacklebox.options["c"]) {
		currentLocation = "on_bridge";
		console.log("Your currentLocation changed to 'on_bridge'.");
		currentOption = dialogue[currentLocation].options[opt];
		console.log("Returning to currentLocation.options.");
}

	// Investigating the talisman.
	if(currentOption == dialogue.on_bridge.options["b"] && drinkRiver == 0) {
		currentLocation = 'talisman';
		console.log("Current location changed to 'talisman'.");
}

	// Take the talisman or not?
	if(currentOption == dialogue.talisman.options["y"]) {
		invTalisman = 1;
		console.log("You got the talisman.");
		currentLocation = "lonewolf";
		console.log("Your currentLocation changed to 'on_bridge'.");
		currentOption = dialogue[currentLocation].options[opt];
		console.log("Returning to currentLocation.options.");
	} else if(currentOption == dialogue.talisman.options["n"]) {
		currentOption = dialogue[currentLocation].options[opt];
		currentLocation = "lonewolf";
		console.log("Returning to currentLocation.options.");
}    

	if(currentOption == dialogue.lonewolf.options["b"] && drinkRiver == 1 || invTalisman == 1) {
		clear()
		$('#game-text').append("<p>Your fight or flight senses are raging, but you see clarity now. One foot after the other, you race towards the light, only occasionally looking back to see if you’re \
		being followed.</p><p>Fortune favors you on this night. The creature seems to have not been interested in a hunt.</p>");
		currentLocation = "at_house";
		console.log("Your currentLocation changed to 'at_house'.");
		currentOption = dialogue[currentLocation].options[opt];
		console.log("Returning to currentLocation.options.");
	} else if(currentOption == dialogue.lonewolf.options["b"] && drinkRiver == 0 && invTireIron == 1) {
		clear()
		$('#game-text').append("<p>Your fight or flight senses are raging, but you see clarity now. One foot after the other, you race towards the light, only occasionally looking back to see if you’re being \
		followed.</p><p>The creature is bearing down on you, a prime predator in its peak environment who’s spotted wounded prey ripe for the killing. It leaps and snaps at your ankle.</p><p>Just missed!</p> \
		<p>It is enough to jar you and you stumble to the ground, but not before grabbing hold of the tire iron. When the creature lunges at you, you swing wildly and manage to strike the creature. <i>Thud!</i> \
		The creature yelps and runs off.</p><p>Fortune favors you on this night. The creature doesn’t seem to be interested in pursuing you further.</p>");
		currentLocation = "at_house";
		console.log("Your currentLocation changed to 'at_house'.");
		currentOption = dialogue[currentLocation].options[opt];
		console.log("Returning to currentLocation.options.");
	} else if(currentOption == dialogue.lonewolf.options["b"] && drinkRiver == 0 && invTireIron == 0) {
		// GAME OVER
		clear()
		$('#game-text').append("<p>Your fight or flight senses are raging, but you see clarity now. One foot after the other, you race towards the light, only occasionally looking back to see if you’re being \
		followed.</p><p>The creature is bearing down on you, a prime predator in its peak environment who’s spotted wounded prey ripe for the killing. It leaps and snaps at your ankle.</p> \
		<p>White hot pain rushes from your extremity and you drop to the ground. Your hands move frantically across the earth in the desperate hopes of finding something with which to protect yourself, but \
		there is nothing here for you.</p><p>The creature comes at you again. This time, it goes for the throat.</p><p>And it does not miss or waver in savagery.</p><p>As you feel the life leaving you, as \
		your eyes begin to set in their final resting position, you swear you see a silhouette standing just off in your periphery.</p>");
}

	if(currentOption == dialogue.lonewolf.options["c"] && invTireIron == 1) {
		clear()
		$('#game-text').append("<p>Your fight or flight senses are raging, but you see clarity now. You can intimidate this beast. You just have to convince him that you aren’t one to be trifled with.</p> \
		<p>With the tire iron in hand, you start to holler and growl and swing wildly at the trees and the ground. You’re able to strike some things with enough ferocity to ring out in spite of their \
		dullness. That, and a combination of the hollering and growling is enough – it would seem – to make the creature turn and carry on, seemingly disinterested.</p>");
		currentLocation = "at_house";
		console.log("Your currentLocation changed to 'at_house'.");
		currentOption = dialogue[currentLocation].options[opt];
		console.log("Returning to currentLocation.options.");
	} else if(currentOption == dialogue.lonewolf.options["c"] && drinkRiver == 1 || invTalisman == 1) {
		clear()
		$('#game-text').append("<p>Your fight or flight senses are raging, but you see clarity now. One foot after the other, you race towards the light, only occasionally looking back to see if you’re being \
		followed.</p><p>The creature is bearing down on you, a prime predator in its peak environment who’s spotted wounded prey ripe for the killing. It leaps and snaps at your ankle.</p><p>Just missed!</p> \
		<p>It is enough to jar you and you stumble to the ground, but not before grabbing hold of a fistful of dirt. When the creature lunges at you, you toss the dirt with purpose and deadly precision. The \
		creature seems to scoff at you just before running off.</p><p>Fortune favors you on this night. The creature doesn’t seem to be interested in pursuing you further.</p>");
		currentLocation = "at_house";
		console.log("Your currentLocation changed to 'at_house'.");
		currentOption = dialogue[currentLocation].options[opt];
		console.log("Returning to currentLocation.options.");
	} else if(currentOption == dialogue.lonewolf.options["c"] && drinkRiver == 0 && invTireIron == 0) {
		// GAME OVER
		clear()
		$('#game-text').append("<p>Your fight or flight senses are raging, but you see clarity now. You can intimidate this beast. You just have to convince him that you aren’t one to be trifled with.</p> \
		<p>You start to holler and growl and stand taller than you’ve ever stood in a fight to convince the creature to leave you be, but it only seems to fuel the aggression and it charges you.</p> \
		<p>Terrified, your kneejerk reaction is to turn and run, but the creature is bearing down on you, a prime predator in its peak environment who’s spotted wounded prey ripe for the killing. It leaps \
		and snaps at your ankle.</p> \
		<p>White hot pain rushes from your extremity and you drop to the ground. Your hands move frantically across the earth in the desperate hopes of finding something with which to protect yourself, but \
		there is nothing here for you.</p> \
		<p>The creature comes at you again. This time, it goes for the throat. And it does not miss or waver in savagery.</p> \
		<p>As you feel the life leaving you, as your eyes begin to set in their final resting position, you swear you see a silhouette standing just off in your periphery.</p>");
}

// Default Statement to progress through the storyline
	if(choice == dialogue[currentLocation].correct) {
		locationInt = locationInt + 1;
		currentLocation = locations[locationInt];
	}
}

// Kick off the whole thing with the initial start game function.
function startgame() {
	$('#game-text').append(dialogue[currentLocation].description);
}

// Listen for input as soon as document is ready.
$(document).ready(function(){
	$(document).keypress(function(key){
		if(key.which === 13 && $('#user-input').is(':focus')) {
			choice = $('#user-input').val().toLowerCase();
			$('#user-input').val("");
			playerInput(choice)
		}
		else if(key.which === 13) {
			playerInput("")
		}
		
		})
})

startgame()