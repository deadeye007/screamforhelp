/*
	"SCREAM FOR HELP - Chapter 1"
	A 'Choose Your Own Adventure' Game by Andrew Sturm
	Running on Sturmmotor Version 0.1.0
*/

// TODO: Use this function to prevent players from spamming commands.
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


// Simple clear screen function for stylization.
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


// Automatically appends 'Press Enter to Continue' in the absence of a choice array
function chooseOption(opt) {
	if(dialogue[currentLocation].options[opt] !== undefined) {
		currentOption = dialogue[currentLocation].options[opt];
		clear()
		$('#game-text').append(dialogue[currentLocation].options[opt]);
	}
		if(dialogue[currentLocation].options["y"] == undefined) {
			$('#game-text').append("<p><i><b>'Press Enter to Continue'</i></b></p>");
		}


// Logic for Tire Iron
// TODO: FIX THE LOGIC TO PREVENT YOU FROM SAYING 'YES' BEFORE YOU EVEN CHECK FOR THE TIRE IRON. 


// TODO ATTEMPT: This may prevent the tire iron from being picked up erroneously.
	if(currentOption == dialogue.introhandle.options["b"] && invTireIron == 0) {
		previousLocation = currentLocation
		currentLocation = "tireiron";
		console.log("Your currentLocation changed to: " + currentLocation);
		console.log("Your previousLocation changed to: " + previousLocation);
		$('#game-text').append(dialogue[currentLocation].description);
	}


	if(currentOption == dialogue.tireiron.options["y"] && invTireIron == 0) {
		invTireIron = 1;
		investigateTrunk = 1;
		dialogue.trunk_open.options["a"] = "You already investigated the trunk.";
		dialogue.introhandle.options["b"] = "You already investigated the trunk.";		
		$('#game-text').append("<p>You picked up the tire iron.</p>")
		currentLocation = previousLocation
		console.log("Your currentLocation changed to: " + currentLocation);
	} else if(currentOption == dialogue.tireiron.options["n"]) {
		invTireIron = 0;
		investigateTrunk = 1;
		dialogue.trunk_open.options["a"] = "You already investigated the trunk.";
		dialogue.introhandle.options["b"] = "You already investigated the trunk.";		
		$('#game-text').append("<p>You did not pick up the tire iron.</p>")
		currentLocation = previousLocation
		console.log("Your currentLocation changed to: " + currentLocation);
	}


// Change to 'checkvehicle' if it hasn't been checked already
	if(currentOption == dialogue.trunk_out.options["b"]) {
		if(investigateVehicle != 1) {
			currentLocation = "checkvehicle";
		}
	}


// Access the vehicle if you have the tire iron
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
		currentLocation = "house_bporch";
		console.log("Your currentLocation changed to 'house_bporch'.");
		currentOption = dialogue[currentLocation].options[opt];
		console.log("Returning to currentLocation.options.");
	} else if(currentOption == dialogue.lonewolf.options["b"] && drinkRiver == 0 && invTireIron == 1) {
		clear()
		$('#game-text').append("<p>Your fight or flight senses are raging, but you see clarity now. One foot after the other, you race towards the light, only occasionally looking back to see if you’re being \
		followed.</p><p>The creature is bearing down on you, a prime predator in its peak environment who’s spotted wounded prey ripe for the killing. It leaps and snaps at your ankle.</p><p>Just missed!</p> \
		<p>It is enough to jar you and you stumble to the ground, but not before grabbing hold of the tire iron. When the creature lunges at you, you swing wildly and manage to strike the creature. <i>Thud!</i> \
		The creature yelps and runs off.</p><p>Fortune favors you on this night. The creature doesn’t seem to be interested in pursuing you further.</p>");
		currentLocation = "house_bporch";
		console.log("Your currentLocation changed to 'house_bporch'.");
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
		currentLocation = "house_bporch";
		console.log("Your currentLocation changed to 'house_bporch'.");
		currentOption = dialogue[currentLocation].options[opt];
		console.log("Returning to currentLocation.options.");
	} else if(currentOption == dialogue.lonewolf.options["c"] && drinkRiver == 1 || invTalisman == 1) {
		clear()
		$('#game-text').append("<p>Your fight or flight senses are raging, but you see clarity now. One foot after the other, you race towards the light, only occasionally looking back to see if you’re being \
		followed.</p><p>The creature is bearing down on you, a prime predator in its peak environment who’s spotted wounded prey ripe for the killing. It leaps and snaps at your ankle.</p><p>Just missed!</p> \
		<p>It is enough to jar you and you stumble to the ground, but not before grabbing hold of a fistful of dirt. When the creature lunges at you, you toss the dirt with purpose and deadly precision. The \
		creature seems to scoff at you just before running off.</p><p>Fortune favors you on this night. The creature doesn’t seem to be interested in pursuing you further.</p>");
		currentLocation = "house_bporch";
		console.log("Your currentLocation changed to 'house_bporch'.");
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

// House - Back Porch

	if(currentOption == dialogue.house_bporch.options["b"] && invKey == 1) {
		clear()
		$('#game-text').append("<p>You remember the key you picked up from the car and realize that both the deadbolt and the key have the same logo, so what is there to lose? You tear the key off your neck \
		with a firm yank and immediately slide it into the lock.</p> \
		<p><i>(So far, so good.)</i></p> \
		<p>You turn the key, but it doesn’t quite seem to want to go. You remember, though, how finicky old locks can be; so, you start to wiggle and rock and twist the key. Finally, it breaks loose and you \
		hear and feel the deadbolt recede into itself.</p> \
		<p>The back door is unlocked. You open it and step inside.</p> \
		<p>“</i>Hello?</i> Is anybody home?” you call out to the darkness.</p> \
		<p>Only silence bounces back from the dark recesses of the abode.</p> \
		<p><i>(I'll never be able to see without light. Maybe I should go check out the shed?)</i></p>");
		currentLocation = "loose_soil";
		console.log("Your currentLocation changed to 'house_study'.");
		currentOption = dialogue[currentLocation].options[opt];
		console.log("Returning to currentLocation.options.");
	} else if(currentOption == dialogue.house_bporch.options["b"] && (invKey == 0 || invTireIron == 1)) {
		clear()
		$('#game-text').append("<p>Since the back door is locked, you start to move towards your left along the porch. The railing, which was so masterfully placed, has since been broken towards the center \
		in such a way that you can simply step off the sound onto the ground below where the grass has become sparse from continued rainfall off the valley of the roof.</p> \
		<p>As it turns out, the ground was not as solid as it appeared and your foot makes a heavy indention in the softened soil.</p>");
//		previousLocation = currentLocation;
		currentLocation = "loose_soil";
		console.log("Your currentLocation changed: " + currentLocation);
//		console.log("PreviousLocation set to: " + previousLocation);
		currentOption = dialogue[currentLocation].options[opt];
		console.log("Returning to currentLocation.options.");
	} else if(currentOption == dialogue.house_bporch.options["c"]) {
		// SFH_Count
		clear()
}

// Loose Soil/Tight Surprise
	if(currentOption == dialogue.loose_soil.options["y"] && invTireIron == 1) {
		clear()
		$('#game-text').append("<p>You take the bladed end of the tire iron, stab it into the soil, and then wrench it to the side to further break loose the dirt that has had some time to pack.</p> \
		<p>The amount of effort expended, you hope, will be nothing in comparison to what you find. The moment that thought crosses your mind, the blade of the tire iron strikes something solid that can in \
		no way be hard soil. No, this is what you were digging for...</p> \
		<p>You dive in with both hands and wrestle with the item in its shallow grave. Your mind is awash with possibilities… until, at least, you finally pull it free and only a thin layer of dirt keeps what \
		remains a mystery.</p> \
		<p>Like a magician pulling back the veil, the rectangular item in your hand mystically transforms into a picture frame. Captured inside were two—</p> \
		<p><i>...three...</i></p> \
		<p>older people, standing in an area that could have been near here.</p> \
		<p>In a flash, the frame tumbles to the ground where its glass cracks from gracelessly landing on the corner. There is a faint tingling in your hand, and the sudden pain building just behind your eyes \
		is surely not helping matters either. You think to yourself that something was wrong with the picture, that you needed to take another look ... but it's a war of attrition and you're losing. Your body is \
		unapologetically pulling you around the side of the house.</p><p>Far from the recently unearthed, seemingly otherworldly picture frame.</p>");
		currentLocation = "house_side";
		console.log("Your currentLocation changed to 'house_side'.");
		currentOption = dialogue[currentLocation].options[opt];
		console.log("Returning to currentLocation.options.");
}

/*
	HOUSE FINALE
	------------
	Rooms should float in memory and be accessible whenever the player desires to access them.
*/

// House - Side
	if(currentOption == dialogue.house_side.options["a"] && (lightsOn == 1 || invFlashlight == 1)) {
		if(invKey == 1) {
		clear()
		$('#game-text').append("<p>Now that you have illumination, sticking the key into the deadbolt is easy part. Just like with the back door, you turn the key and the door is now unlocked.</p> \
		<p>You walk into the entryway and hope this nightmare in which you're living is soon to come to a close.</p>"); 
			currentLocation = "house_entryway"
			console.log("Your currentLocation changed to 'house_entryway'.");
		}
	} else if(currentOption == dialogue.house_side.options["a"]) {
			currentLocation = "house_fporch"
			console.log("Your currentLocation changed to 'house_fporch'.");
	} else if(currentOption == dialogue.house_side.options["b"] && (investigateGarage == 1 || invFlashlight == 1)) {
		clear()
		$('#game-text').append("<p>You realize the second the thought crosses your mind that you've already gotten everything you need from the garage.</p>");
	} else if(currentOption == dialogue.house_side.options["c"] && (invFlashlight == 0)) {
		$('#game-text').append("<p>The shed was just about as rickety as most constructs you’ve run into tonight. It isn’t an overly large building, but it is clearly capable of supporting a large tractor, provided the doors were \
			larger.</p><p>The shed door stood ajar, but there is absolutely no way you can see inside. You turn back, defeated.</p><p><i>If only I had some kind of light...</i></p>");
	} else if(currentOption == dialogue.house_side.options["c"] && (invFlashlight == 1 && invKey == 0)) {
		currentLocation = "house_shed"
		console.log("Your currentLocation changed to 'house_shed'.");
}

// Front Door/Door Knocker
	if(currentOption == dialogue.house_fporch.options["y"] && (lightsOn == 0 && invFlashlight == 0)) {
		doorKnocked = 1;
		investigateFrontdoor = 1;
		console.log("You knocked on the door.");
	} else if(currentOption == dialogue.house_fporch.options["y"] && investigateFrontdoor == 1) {
		clear()
		$('#game-text').append("<p>You've already investigated the door.</p><p>Without some sort of light source, there isn't any point in going inside.");
	} else if(currentOption == dialogue.house_fporch.options["n"]) {
		doorKnocked = 0;
		investigateFrontdoor = 1;
		console.log("You did not knock on the door.");
	} else if(currentOption == dialogue.house_fporch.options["y"] && (lightsOn == 1 || invFlashlight == 1)) {
		// Now you can enter the house
		currentLocation = "house_entryway";
		console.log("Your currentLocation changed to 'house_entryway'.");
}

// Garage
	if(currentOption == dialogue.house_garage.options["y"] && (investigateGarage == 0 && lightsOn == 0)) {
		invFlashlight = 1;
		console.log("You picked up the flashlight.");
		investigateGarage = 1;
		console.log("You knocked on the door.");
}

// Shed
	if(currentOption == dialogue.house_shed.options["a"] && invKey == 1) {
		clear()
		$('#game-text').append("<p>You look at the key hanging from the nail and the key hanging around your neck.</p><p>The sudden deluge that is the realization that the key hanging from the nail appears to be the exact same key \
			you found hanging in the rear-view of your vehicular prison violently washes over you.</p><p><i>(This cannot be an accident...)</i></p>");
	} else if(currentOption == dialogue.house_shed.options["a"] && (invKey == 0 && invHookLine == 0)) {
		clear()
		$('#game-text').append("<p>You place your left hand on the table to steady yourself while you stand on the tips of your toes and stretch across the worktable towards the hook. The solitary key on its keyring dangles from the \
			metal hook on the pegboard. Amidst the various tools, it seems to shine like a beacon of hope in an otherwise dark place.</p> \
			<p>All at once, your blood runs cold at the feeling of a breath down your neck. The violent shudder in your bones radiates from your core to your extremities. With wide eyes, you try to correct the mistake you already knew \
			you made, but it’s too late.</p> \
			<p>The pegboard hook gets knocked upwards, comes loose, and drops to the floor behind the workbench under the weight of the key it was holding.</p> \
			<p>No matter though, you turn and see no one.</p> \
			<p>After a gravid moment, you turn back to the fallen keys. You shine the light down the top and sides of the workbench, but there’s just no way you can get your arm or hand in the crevice. Still, you stay crouched, \
			trying fruitlessly to reach for the key, your neck tingles and you get that god awful sensation again.</p> \
			<p>You turn to relieve your paranoia, but there’s no relief to be found. An androgynous humanoid creature of average height stands over you. Your mind is suddenly full to bursting of a cacophony of noises ... until the \
			creature releases you from the torment of this existence with one swift twist of your neck.</p>");
	} else if(currentOption == dialogue.house_shed.options["a"] && (invKey == 0 && invHookLine == 1)) {
		clear()
		$('#game-text').append("<p>You place your left hand on the table to steady yourself while you stand on the tips of your toes and stretch across the worktable towards the hook. The solitary key on its keyring dangles from the \
			metal hook on the pegboard. Amidst the various tools, it seems to shine like a beacon of hope in an otherwise dark place.</p> \
			<p>All at once, your blood runs cold at the feeling of a breath down your neck. The violent shudder in your bones radiates from your core to your extremities. With wide eyes, you try to correct the mistake you already knew \
			you made, but it’s too late.</p> \
			<p>The pegboard hook gets knocked upwards, comes loose, and drops to the floor behind the workbench under the weight of the key it was holding.</p> \
			<p>No matter though, you turn and see no one.</p> \
			<p>After a gravid moment, you turn back to the fallen keys. You shine the light down the top and sides of the workbench, but there’s just no way you can get your arm or hand in the crevice. However, you remember the tacklebox \
			on the bridge and dig out the fishing hook and line.</p> \
			<p>You toss the innovative tool of a lazy fisherman in between the workbench and the wall several times with varying degrees of failure; sometimes you get close to it, sometimes you’re as far away as you feel from home right \
			now. All you know is you’re determined to keep trying, even if it only moves a quarter of an inch at a time.</p> \
			<p>There’s an eye-opening revelation when you pull and the line goes taut.</p><p><i>(Deep breaths... You've already been disappointed plenty...)</i></p> \
			<p>Somehow you manage to keep your excitment contained until you pull the key and the hook out from the crevice.</p> \
			<p><i>\"Yes!\"</i> you exclaim, still in nothing more than a whisper.</p> \
			<p><i>You got the key.</i></p>");
	}

// SFH_Count
/* THIS IS MERELY A PLACEHOLDER
   FOR A FEATURE I HOLD NEAR AND
   DEAR, BUT I JUST HAVEN'T HAD
   THE TIME TO FLESH IT OUT.
*/

// Default Statement to progress through the storyline
	if(choice == dialogue[currentLocation].correct) {
		locationInt = locationInt + 1;
		currentLocation = locations[locationInt];
	}
}

// Handle the user failing to complete the adventure because of poor choices.
function gameover() {
	clear()
	$('#game-text').append(dialogue.gameover.description);
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