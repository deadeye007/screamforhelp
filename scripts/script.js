/*
    "SCREAM FOR HELP - Chapter 1"
    A 'Choose Your Own Adventure' Game by Andrew Sturm
    Running on SturMotor Version 0.1.1
*/

// TODO: 
// TODO: Use this function to prevent players from spamming commands.
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


// Simple clear screen function for stylization.
function clear() {
    $('#game-text').text("");
}


// Get Player Input
function playerInput(choice) {
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
                    if(currentLocation == "gameover") {
                        console.log("Refreshing the page.");
                        location.reload(true);
                        return false;
                    } else {
                    chooseOption("y");
                    break;
                        }
                case "n":
                    if(currentLocation == "gameover") {
                        clear()
                        $('#game-text').append("<p>Thanks for playing my game!</p><p>Feel free to leave me some feedback on it.</p>")
                        return false;
                    } else {
                    chooseOption("n");
                    break;
                        }
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

// Main Story Function
function chooseOption(opt) {
    if(dialogue[currentLocation].options[opt] !== undefined) {
        currentOption = dialogue[currentLocation].options[opt];
        clear()
        $('#game-text').append(dialogue[currentLocation].options[opt]);
        }

    // Hide Title/Footer for more immersion.
    if(currentLocation !== "prologue" || currentLocation !== "epilogue" || currentLocation !== "acknowledgements") {
        var sheet = document.styleSheets[0];
        sheet.addRule("#title-text", "visibility:hidden;", sheet.cssRules.length);
        sheet.addRule("#footer", "visibility:hidden;", sheet.cssRules.length);
    }


    // This is going to need more metrics to work correctly.
    // Automatically appends 'Press Enter to Continue' in the absence of a choice array
    if(currentOption === "") { $('#game-text').append("<p><i><b>'Press Enter to Continue'</i></b></p>"); }


    // Prologue (Y/N)

    if(currentOption == dialogue.prologue.options["y"]) { drankPunch = 1; roomtraverse("trunk");
    } else if(currentOption == dialogue.prologue.options["n"]) {
        roomtraverse("trunk");
        }


    // Trunk (ABC)

    if(currentOption == dialogue.trunk.options["a"]) { roomtraverse("trunk_handle"); }

    if(currentOption == dialogue.trunk.options["b"]) { checkPockets = 1; }

    if(currentOption == dialogue.trunk.options["c"]) { screamCount = screamCount + 1; sfhcount(); }


    // Trunk, Handle Pulled (ABC)

    if(currentOption == dialogue.trunk_handle.options["a"]) { roomtraverse("trunk_open"); }

    if(currentOption == dialogue.trunk_handle.options["b"] && invTireIron == 0 || currentOption == dialogue.trunk_open.options["a"] && invTireIron == 0) { roomtraverse("tireiron"); }

    if(currentOption == dialogue.trunk_handle.options["c"]) { justListened = 1; }


    // Tire Iron

    if(currentOption == dialogue.tireiron.options["y"] && invTireIron == 0) {
        invTireIron = 1;
        investigateTrunk = 1;
        dialogue.trunk_open.options["a"] = "You already investigated the trunk.";
        dialogue.trunk_handle.options["b"] = "You already investigated the trunk.";
        currentLocation = previousLocation;
    } else if(currentOption == dialogue.tireiron.options["n"]) {
        invTireIron = 0;
        investigateTrunk = 1;
        dialogue.trunk_open.options["a"] = "You already investigated the trunk.";
        dialogue.trunk_handle.options["b"] = "You already investigated the trunk.";
        console.log("You did not pick up the tire iron.");
        currentLocation = previousLocation;
        }


    // Trunk Open
    // Option A is an 'or' condition for trunk_handle option B, as they both go to Tire Iron.

    if(currentOption == dialogue.trunk_open.options["b"]) { screamCount = screamCount + 1; sfhcount(); }

    if(currentOption == dialogue.trunk_open.options["c"]) { roomtraverse("trunk_out"); }

    // Tripped Up
    if(currentOption == dialogue.trunk_out.options["a"]) { roomtraverse("tripped_up"); }

    if(currentOption == dialogue.trunk_out.options["b"] && investigateVehicle == 0) { roomtraverse("checkvehicle"); }

    if(currentOption == dialogue.trunk_open.options["c"]) { screamCount = screamCount + 1; sfhcount(); }


    // Check Vehicle
    // Access the vehicle if you have the tire iron
    if(currentOption == dialogue.checkvehicle.options["a"] && (invTireIron == 1 && investigateVehicle == 0 && breakGlass == 0)) {
        clear()
        $('#game-text').append("<p>Clutching the tire iron in your white-knuckled fist, you strike the window once. The tire iron bounces off with little more than a loud pop. You strike it again, this time more towards \
            the edge. Less of a pop, more of a crack. You strike it again with all your might and the glass shatters. Armed with knowledge from action movies, you use the tire iron to clear out the glass in the frame and pull up the lock \
            switch. With reckless abandon, you grab the door handle and throw it open.</p>");
        breakGlass = 1;
        roomtraverse("checkinterior");
    } else if (currentOption == dialogue.checkvehicle.options["a"] && invTireIron == 0) { roomtraverse("trunk_out");
    } else if(currentOption == dialogue.checkvehicle.options["a"] && investigateVehicle == 1) {
        clear()
        $('#game-text').append("<p>The sudden compulsion to break an already broken window has you questioning your sanity ... as if you weren't already.</p>")
        }

    if(currentOption == dialogue.checkvehicle.options["b"]) { screamCount = screamCount + 1; sfhcount(); }

    if(currentOption == dialogue.checkvehicle.options["c"] && breakGlass == 1) {
        clear()
        $('#game-text').append("<p>Now that you have broken the window, you are quite certain that you'll be able to get inside to thoroughly examine the vehicle. What you can see already from the shattered opening is a key hanging from the rear-view mirror. The possible \
        applications of such a key astound you.</p>");
        }

    // Check Interior
    if(currentOption == dialogue.checkinterior.options["b"] && drankPunch == 1) {
        clear()
        $('#game-text').append("<p>The glove box is unlocked. You grab the handle and pull to release. The glove compartment drops open and breaks off the hinges, which sends various documents flying onto the pitch black floorboard.</p><p><i>(Doubt there's anything important. Just papers.)</i></p>");
        lookedForGloves = 1;
        }

    if(currentOption == dialogue.checkinterior.options["c"] && investigateVehicle == 0) {
        investigateVehicle = 1;
        dialogue.trunk_out.options["b"] = "You already investigated the vehicle."
        roomtraverse("trunk_out");
        }


    if(currentOption == dialogue.tripped_up.options["a"]) { roomtraverse("at_bridge"); }

    // You will need to fix the assumption that the user is going to pick up the doll first.
    // Creepy Doll Interaction
    if(currentOption == dialogue.tripped_up.options["b"] && investigateDoll == 0) {
        roomtraverse("checkdoll");
    } else if(investigateDoll == 1) {
        dialogue.checkdoll.options["b"] = "You already investigated the doll.";
    } else if(investigateCoin == 1) {
        dialogue.checkdoll.options["b"] = "<p>You pick up the doll. With it closer, you can see that one of the eyes is cocked to the \
        side and the other is completely black. While you can't put your finger on it, there is something eerily off.</p><p>In the center of the doll’s back is a ring, which feels as though you could pull it to make her talk.</p>";
        }

    // Coin Interaction
    if(currentOption == dialogue.tripped_up.options["c"] && investigateCoin == 0) {
        roomtraverse("takecoin");
    } else if(investigateCoin == 1) {
        dialogue.tripped_up.options["c"] = "You already investigated the coin.";
        }


    // Pull the ring?
    if(currentOption == dialogue.checkdoll.options["a"] && investigateDoll == 0) { roomtraverse("pullring"); }

    if(currentOption == dialogue.checkdoll.options["b"] && investigateDoll == 0) {
        invDoll = 0;
        investigateDoll = 1;
        dialogue.tripped_up.options["b"] = "<p>You chose not to investigate the doll.</p>";
        dialogue.checkdoll.options["a"] = "<p>You chose not to investigate the doll.</p>";
        console.log("You didn't take the doll.");
        currentLocation = previousLocation;
        }

    if(currentOption == dialogue.checkdoll.options["c"] && invDoll == 0) {
        // YOU GET THE DOLL
        invDoll = 1;
        investigateDoll = 1;
        dialogue.tripped_up.options["b"] = "You already stowed away the doll.";
        dialogue.checkdoll.options["a"] = "You already stowed away the doll.";
        console.log("You took the doll.");
        }


    // Evaluate the options of checkdoll
    if(currentOption == dialogue.pullring.options["y"]) {
        ringPulled = 1;
        console.log("Ring has been pulled.");
        roomtraverse("takedoll");
    } else if(currentOption == dialogue.pullring.options["n"]) {
        ringPulled = 0;
        console.log("Ring has not been pulled.");
        roomtraverse("takedoll");
        }


    // Take the doll, or don't take the doll.
    if(currentOption == dialogue.takedoll.options["y"]) {
        invDoll = 1;
        console.log("You got the doll.");
        investigateDoll = 1;
        dialogue.tripped_up.options["b"] = "You already investigated the doll.";
        roomtraverse("tripped_up");
    } else if(currentOption == dialogue.takedoll.options["n"]) {
        investigateDoll = 1;
        dialogue.tripped_up.options["b"] = "You already investigated the doll.";
        roomtraverse("tripped_up");
        }


    // Take the coin, or don't take the coin.
    if(currentOption == dialogue.takecoin.options["y"]) {
        invCoin = 1;
        console.log("You got the coin.");
        investigateCoin = 1;
        dialogue.tripped_up.options["c"] = "You already investigated the coin.";
        roomtraverse("tripped_up");
    } else if(currentOption == dialogue.takecoin.options["n"]) {
        investigateCoin = 1;
        dialogue.tripped_up.options["c"] = "You already investigated the coin.";
        roomtraverse("tripped_up");
        }


    // At Bridge
    if(currentOption == dialogue.at_bridge.options["a"]) {
        drinkRiver = 1;
        console.log("You drank from the river.");
        dialogue.at_bridge.options["a"] = "You've already sated your thirst.";
        }

    if(currentOption == dialogue.at_bridge.options["b"]) { screamCount = screamCount + 1; sfhcount(); }

    if(currentOption == dialogue.at_bridge.options["c"]) { roomtraverse("on_bridge"); }


    // Investigating the tacklebox.
    if(currentOption == dialogue.on_bridge.options["a"]) { roomtraverse("tacklebox"); }


    // Investigating the talisman, if you were skeptical
    if(currentOption == dialogue.on_bridge.options["b"] && (drinkRiver == 0 && lookedForGloves == 1)) { roomtraverse("talisman"); }


    // Do you lean on the railing?
    if(currentOption == dialogue.on_bridge.options["c"]) {
        console.log("You leaned against the railing.");
        // GAME OVER
        currentLocation = "gameover";
        }


    // Tacklebox Investigation
    if(currentOption == dialogue.tacklebox.options["a"]) {
        invPlyers = 1;
        console.log("You got the plyers.");
        investigatePlyers = 1;
        dialogue.tacklebox.options["a"] = "You already took the plyers.";
        }

    if (currentOption == dialogue.tacklebox.options["b"]) {
        invHookLine = 1;
        console.log("You got the fishing hook and fishing line.");
        investigateHookLine = 1
        dialogue.tacklebox.options["b"] = "You already took the fishing line and fishing hook.";
        }

    if(currentOption == dialogue.tacklebox.options["c"]) { roomtraverse("on_bridge"); }


    // Take the talisman or not?
    if(currentOption == dialogue.talisman.options["y"]) {
        invTalisman = 1;
        console.log("You got the talisman.");
        roomtraverse("lonewolf");
        }

    if(currentOption == dialogue.talisman.options["n"]) { roomtraverse("lonewolf"); }

  
    if(currentOption == dialogue.lonewolf.options["a"] && (drinkRiver == 1 || invTalisman == 1)) {
        // Rule of Cool
        clear()
        $('#game-text').append("<p>You let out a scream to the high heavens, one which faintly echoes back. In the distance, somewhere far behind you, you hear a respondent howl. This, much to your delight, is enough to stir \
            the creature to move away from you, seemingly disinterested.</p>")
        wolfHandled = 1;
        roomtraverse("house_bporch");
    } else if(currentOption == dialogue.lonewolf.options["a"] && (drinkRiver == 0 && invTalisman == 0)) {
        clear()
        $('#game-text').append("<p>Your fight or flight senses are raging, but you see clarity now. You can scream for help, or maybe just to startle the beast. Either way, you just have to convince him that you aren’t one to be trifled with.</p> \
            <p>You let out a scream to the high heavens, one which faintly echoes back. In the distance, somewhere far behind you, you hear a respondent howl.</p><p>This creature, empowered by the battle cry, charges you.</p> \
            <p>Terrified, your kneejerk reaction is to turn and run, but the creature is bearing down on you, a prime predator in its peak environment who’s spotted wounded prey ripe for the killing. It leaps \
            and snaps at your ankle.</p> \
            <p>White hot pain rushes from your extremity and you drop to the ground. Your hands move frantically across the earth in the desperate hopes of finding something with which to protect yourself, but \
            there is nothing here for you.</p> \
            <p>The creature comes at you again. This time, it goes for the throat. And it does not miss or waver in savagery.</p> \
            <p>As you feel the life leaving you, as your eyes begin to set in their final resting position, you swear you see a silhouette standing just off in your periphery.</p>");
        currentLocation = "gameover";
        }

    if(currentOption == dialogue.lonewolf.options["b"] && (drinkRiver == 1 || invTalisman == 1)) {
        clear()
        $('#game-text').append("<p>Your fight or flight senses are raging, but you see clarity now. One foot after the other, you race towards the light, only occasionally looking back to see if you’re being followed.</p><p>Fortune \
            favors you on this night. The creature seems to have not been interested in a hunt.</p>");
        wolfHandled = 1;
        roomtraverse("house_bporch");
    } else if(currentOption == dialogue.lonewolf.options["b"] && (drinkRiver == 0 && invTireIron == 1)) {
        clear()
        $('#game-text').append("<p>Your fight or flight senses are raging, but you see clarity now. One foot after the other, you race towards the light, only occasionally looking back to see if you’re being followed.</p><p>The creature \
            is bearing down on you, a prime predator in its peak environment who’s spotted wounded prey ripe for the killing. It leaps and snaps at your ankle.</p><p>Just missed!</p><p>It is enough to jar you and you stumble to the ground, \
            but not before grabbing hold of the tire iron. When the creature lunges at you, you swing wildly and manage to strike the creature. <i>Thud!</i> The creature yelps and runs off.</p><p>Fortune favors you on this night. The creature \
            doesn’t seem to be interested in pursuing you further.</p>");
        wolfHandled = 1;
        roomtraverse("house_bporch");
    } else if(currentOption == dialogue.lonewolf.options["b"] && (drinkRiver == 0 && invTireIron == 0)) {
        // GAME OVER
        clear()
        $('#game-text').append("<p>Your fight or flight senses are raging, but you see clarity now. One foot after the other, you race towards the light, only occasionally looking back to see if you’re being \
            followed.</p><p>The creature is bearing down on you, a prime predator in its peak environment who’s spotted wounded prey ripe for the killing. It leaps and snaps at your ankle.</p> \
            <p>White hot pain rushes from your extremity and you drop to the ground. Your hands move frantically across the earth in the desperate hopes of finding something with which to protect yourself, but \
            there is nothing here for you.</p><p>The creature comes at you again. This time, it goes for the throat.</p><p>And it does not miss or waver in savagery.</p><p>As you feel the life leaving you, as \
            your eyes begin to set in their final resting position, you swear you see a silhouette standing just off in your periphery.</p>");
        currentLocation = "gameover";
        }

    if(currentOption == dialogue.lonewolf.options["c"] && invTireIron == 1) {
        clear()
        $('#game-text').append("<p>Your fight or flight senses are raging, but you see clarity now. You can intimidate this beast. You just have to convince him that you aren’t one to be trifled with.</p><p>With the tire iron in hand, you \
            start to holler and growl and swing wildly at the trees and the ground. You’re able to strike some things with enough ferocity to ring out in spite of their dullness. That, and a combination of the hollering and growling is \
            enough—it would seem—to make the creature turn and carry on, seemingly disinterested.</p>");
        wolfHandled = 1;
        roomtraverse("house_bporch");
    } else if(currentOption == dialogue.lonewolf.options["c"] && (drinkRiver == 1 || invTalisman == 1)) {
        clear()
        $('#game-text').append("<p>Your fight or flight senses are raging, but you see clarity now. One foot after the other, you race towards the light, only occasionally looking back to see if you’re being followed.</p><p>The creature is \
            bearing down on you, a prime predator in its peak environment who’s spotted wounded prey ripe for the killing. It leaps and snaps at your ankle.</p><p>Just missed!</p><p>It is enough to jar you and you stumble to the ground, but \
            not before grabbing hold of a fistful of dirt. When the creature lunges at you, you toss the dirt with purpose and deadly precision. The creature seems to scoff at you just before running off.</p><p>Fortune favors you on this \
            night. The creature doesn’t seem to be interested in pursuing you further.</p>");
        wolfHandled = 1;
        roomtraverse("house_bporch");
    } else if(currentOption == dialogue.lonewolf.options["c"] && (drinkRiver == 0 && invTireIron == 0)) {
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
        currentLocation = "gameover";
        }


// House - Back Porch
    if(currentOption == dialogue.house_bporch.options["a"] && invKey == 1) {
        clear()
        $('#game-text').append("<p>You remember the key you picked up from the car and realize that both the deadbolt and the key have the same logo, so what is there to lose? You tear the key off your neck with a firm yank and immediately \
            slide it into the lock.</p><p><i>(So far, so good.)</i></p><p>You turn the key, but it doesn’t quite seem to want to go. You remember, though, how finicky old locks can be; so, you start to wiggle and rock and twist the key. \
            Finally, it breaks loose and you hear and feel the deadbolt recede into itself.</p><p>The back door is unlocked. You open it and step inside.</p><p>\"</i>Hello?</i> Is anybody home?\" you call out to the darkness.</p> \
            <p>Only silence bounces back from the dark recesses of the abode.</p><p><i>(I'll never be able to see without light. Maybe I should go check out the shed?)</i></p>");
        investigateBackdoor = 1;
        roomtraverse("loose_soil");
    } else if(currentOption == dialogue.house_bporch.options["a"] && (invKey == 0 && invTireIron == 1)) {
        clear()
        $('#game-text').append("<p>Since the back door is locked, you start to move towards your left along the porch. The railing, which was so masterfully placed, has since been broken towards the center in such a way that you can simply \
            step off the sound onto the ground below where the grass has become sparse from continued rainfall off the valley of the roof.</p><p>As it turns out, the ground was not as solid as it appeared and your foot makes a heavy indention \
            in the softened soil.</p>");
        investigateBackdoor = 1;
        roomtraverse("loose_soil");
    } else if(currentOption == dialogue.house_bporch.options["a"] && (invKey == 0 && invTireIron == 0)) {
        clear()
        $('#game-text').append("<p>Since the back door is locked, you start to move towards your left along the porch. The railing, which was so masterfully placed, has since been broken towards the center in such a way that you can \
            simply step off the sound onto the ground below where the grass has become sparse from continued rainfall off the valley of the roof.</p><p>As it turns out, the ground was not as solid as it appeared and your foot makes a \
            heavy indention in the softened soil.</p>");
        investigateBackdoor = 1;
        roomtraverse("house_side");
        }
    
    if(currentOption == dialogue.house_bporch.options["c"]) { screamCount = screamCount + 1; sfhcount(); }


// Loose Soil/Tight Surprise
    if(currentOption == dialogue.loose_soil.options["y"] && (invTireIron == 1 && investigateBackdoor == 1)) {
        clear()
        $('#game-text').append("<p>You take the bladed end of the tire iron, stab it into the soil, and then wrench it to the side to further break loose the dirt that has had some time to pack.</p><p>The amount of effort expended, you \
            hope, will be nothing in comparison to what you find. The moment that thought crosses your mind, the blade of the tire iron strikes something solid that can in no way be hard soil. No, this is what you were digging for...</p> \
            <p>You dive in with both hands and wrestle with the item in its shallow grave. Your mind is awash with possibilities ... until, at least, you finally pull it free and only a thin layer of dirt keeps what \
            remains a mystery.</p><p>Like a magician pulling back the veil, the rectangular item in your hand mystically transforms into a picture frame. Captured inside were two—</p><p><i>...three...</i></p><p>—older people, standing in \
            an area that looked as though it could have been near here.</p><p>In a flash, the frame tumbles to the ground where its glass cracks from gracelessly landing on the corner. There is a faint tingling in your hand, and the sudden \
            pain building just behind your eyes is surely not helping matters either. You think to yourself that something was wrong with the picture, that you needed to take another look ... but it's a war of attrition and you're losing. \
            Your body is unapologetically pulling you around the side of the house.</p><p>Far from the recently unearthed, seemingly otherworldly picture frame.</p>");
        roomtraverse("house_side");
        }


/*
    HOUSE FINALE
    ------------
    Rooms should float in memory and be accessible whenever the player desires to access them.
*/


// Lights On or Off?
    if(lightsOn == 1) {
        dialogue.house_study.description = "<p>You are in what looks to you to be a study. There’s an illuminated shade lamp sitting atop a side table by a recliner. Sitting in front of it is a sealed bag of pipe tobacco. The wood floor \
            beneath has patina befitting such an old house. Most of the center of the floor is covered by a decorative red and beige rug.</p> \
            <p>Three bookshelves stand side by side, full of various books of all sizes and colors. You see a few that stand out with titles like \"Loss and Moving On\", \"Coping: The Art of Grief\", and \"The Unadulterated History of Necromancy\". \
            <p>The last book got a second momentary glance from you before your eyes pan to a fascinating fortuneteller machine, likely from the early 1900s.</p> \
            <p>The desk butted up against the two adjacent windows facing the back yard from whence you came probably offered a breathtaking view in the daytime. At night, it merely felt as though someone could be watching you from just \
            beyond the pane of glass.</p>A) Go to the kitchen.<br>B) Go to the hall.<br>C) Investigate the fortuneteller machine.</p>";

        dialogue.house_kitchen.description = "<p>The kitchen is modest with a washing room that starts at the end of the countertop. The oblong room painted in peach and trimmed in white has what you’d expect any modern kitchen to have: microwave, \
            stove, dishwasher, toaster, and ... a wall phone!</p><p>The wall phone hangs crooked atop the mounting hardware with a long phone cord tail heaped up in a pile below the phone and snaking back up to an outlet on the wall.</p> \
            <p>A) Go to the study.<br>B) Go to the living room.<br>C) Investigate the wall phone.</p>";

        dialogue.house_entryway.description = "<p>The entryway is an utterly boring room with aged floral wallpaper, which is peeling where the glue is losing grip. With the ceiling light drawing your attention, you notice how sloppily the ceiling \
            has been painted in off-white over aged tar staining from what had probably been years of smoking inside the house.</p><p><i>(Ugh. Disgusting. And the house smells like an ashtray too!)</i></p>";

        dialogue.house_hall.description = "<p>The hall is less boring than the entryway, at least marginally. It at least has a certain level of excitement ingrained into the variety of wood textures. The wooden doorframe going into the north bedroom \
            has a certain <i>je ne sais quoi</i> about it. Around the baseboards, there seems to be a bit of deterioration. Not like termites, though. It feels instead like more of the same—whatever <i>it</i> is.</p>It feels like you stand at the \
            precipice of various potential outcomes.</p>";

        dialogue.house_northbedroom.description = "<p>The room seems to brighten as you walk into it.</p><p>The layout was otherwise what you’d expect from a master bedroom. The bed was in the center of the room, framed by nightstands on each side.</p> \
            <p>The room was littered with various clothing. This contributed to that faint smell of cologne that wafted into your nostrils, you figure.</p><p>On the opposite side of the room, there are two areas with off-white folding doors. The one farthest \
            from you is cracked up enough for you to see that it’s a closet holding at least the clothing belonging to a man.</p><p>The other one is entirely shut, but common sense at least suggests it’s a closet.</p>";

        dialogue.house_northbedroom.options["c"] = "<p>At a closer glance, you realize there is a light on behind this door that spills out around the imperfectly hanging doors.</p><p>You grab the knobs and pull open the doors.</p><p><i>GASP!</i> \
            <p>You let loose of the knobs and fall flat on your buttocks while your brain rushes to make sense of what your eyes are looking at.</p><p>The large portrait of a young woman standing in front of a river wall startled you before your mind \
            could process the information that this young woman was only captured in a picture—and not in the closet, like you first feared.</p><p><i>(Is that a...)</i><p>There is a vase atop a homemade wooden platform that is surrounded by various \
            necklaces and jewelry. The rest of the platform had pictures, drawings, and countless other knickknacks from throughout the years.</p><p><i>(Yep... that vase is an urn and this is a ... shrine.)</i></p><p>You gather your wits and stand to \
            your feet. The shrine itself draws you to it in a timeless sort of way. While part of your mind crunches all the possibilities for this shrine’s existence, the more rational part of your mind determines you have better things to spend your \
            time worrying about.</p>";

        dialogue.house_southbedroom.description = "<p>With the lights on in this room, you see what can be none other than a perfectly preserved child’s room. The why doesn’t matter to you as much as if there’s anything in this room that will be \
            useful to your escape, and likely your survival overall.</p><p>There’s a faint static white noise coming from behind you.</p><p><i>(Was the TV on when I came in?)</i></p><p>A bed with a peach comforter had been set up in the farthest corner \
            of the room from every other room. It probably served as the greatest form of isolation a child could get without going outside.</p><p>In another corner of the bedroom, there is a large pile of identical, very familiar dolls, all facing you. \
            What, you wonder, would possess a child to have so many identical dolls?</p><p>The sound of an exasperated sigh just outside causes you to spin on your heels. This is followed only by the sound of a careful footfall on the wooden floor.</p> \
            <p><i>(Someone’s coming!)</i></p><p>As ridiculous as the idea seems, you bolt across the room and dig yourself an opening in the pile, only to bury yourself with dolls.</p><p>You have little else to do now but wait.</p><p>You can hear your \
            heartbeat in your ears and your breathing sounds amplified the more you fight to hold it, along with every other sound you could make to alert whatever it is to your position.</p><p>While you lie there almost entirely covered in dolls, you \
            can see the shadowy creature aimlessly saunter in front of the doorway. You aren’t sure if the hallway light is preventing you from seeing more details, or if there simply aren’t any details to be seen. Either way, you and the dolls are \
            trembling in the corner.</p>";
        }


// Room Traversal
    if(playerStudy == 1) {
        console.log("playerStudy: 1");
    } else if(playerKitchen == 1) {
        console.log("playerKitchen: 1");
    } else if(playerEntryway == 1) {
        console.log("playerEntryway: 1");
    } else if(playerLivingroom == 1) {
        console.log("playerLivingroom: 1");
    } else if(playerHall == 1) {
        console.log("playerHall: 1");
    } else if(playerNorthbedroom == 1) {
        console.log("playerNorthbedroom: 1");
    } else if(playerSouthbedroom == 1) {
        console.log("playerSouthbedroom: 1");
        }


// House - Side
    if(currentOption == dialogue.house_side.options["a"] && (lightsOn == 1 || invFlashlight == 1 && invKey == 1)) {
        clear()
        $('#game-text').append("<p>Now that you have illumination, sticking the key into the deadbolt is the easy part. Just like with the back door, you turn the key and the door is now unlocked.</p><p>You walk into the entryway and \
            hope this nightmare in which you're living is soon to come to a close.</p>");
        playerEntryway = 1;
        roomtraverse("house_entryway");

    } else if(currentOption == dialogue.house_side.options["a"]) {
        roomtraverse("house_fporch");
        }

    if(currentOption == dialogue.house_side.options["b"] && investigateGarage == 0) {
        roomtraverse("house_garage");
    } else if(currentOption == dialogue.house_side.options["b"] && (investigateGarage == 1 || invFlashlight == 1)) {
        clear()
        $('#game-text').append("<p>You realize the second the thought crosses your mind that you've already gotten everything you need from the garage.</p>");
        }

    if(currentOption == dialogue.house_side.options["c"] && invFlashlight == 0) {
        $('#game-text').append("<p>The shed was just about as rickety as most constructs you’ve run into tonight. It isn’t an overly large building, but it is clearly capable of supporting a large tractor, provided the doors were \
            larger.</p><p>The shed door stood ajar, but there is absolutely no way you can see inside. You turn back, defeated.</p><p><i>If only I had some kind of light...</i></p>");
    } else if(currentOption == dialogue.house_side.options["c"] && (invFlashlight == 1 && invKey == 0)) {
        roomtraverse("house_shed");
        }

// Garage
    if(currentOption == dialogue.house_garage.options["y"] && invFlashlight == 0) {
        invFlashlight = 1;
        currentLocation = previousLocation;
    } else if(currentOption == dialogue.house_garage.options["n"]) {
        invFlashlight = 0;
        currentLocation = previousLocation;
        }


// Front Door/Door Knocker
    if(currentOption == dialogue.house_fporch.options["y"] && (lightsOn == 0 && invFlashlight == 0)) {
        doorKnocked = 1;
        investigateFrontdoor = 1;
        console.log("You knocked on the door.");
        roomtraverse("house_side");
    } else if(currentOption == dialogue.house_fporch.options["y"] && investigateFrontdoor == 1) {
        clear()
        $('#game-text').append("<p>You've already investigated the door.</p><p>Without some sort of light source, there isn't any point in going inside.");
        } 

    if(currentOption == dialogue.house_fporch.options["n"]) {
        doorKnocked = 0;
        investigateFrontdoor = 1;
        console.log("You did not knock on the door.");
        roomtraverse("house_side");
        // This may not be the logic you thought it was
        }

    if(currentOption == dialogue.house_fporch.options["y"] && (lightsOn == 1 || invFlashlight == 1 && invKey == 1)) {
        // Now you can enter the house
        playerEntryway = 1;
        roomtraverse("house_entryway");
        }


// Garage
    if(currentOption == dialogue.house_garage.options["y"] && (investigateGarage == 0 && lightsOn == 0)) {
        invFlashlight = 1;
        console.log("You picked up the flashlight.");
        investigateGarage = 1;
        }


// Shed
    if(currentOption == dialogue.house_shed.options["a"] && invKey == 1) {
        clear()
        $('#game-text').append("<p>You look at the key hanging from the nail and the key hanging around your neck.</p><p>The sudden deluge that is the realization that the key hanging from the nail appears to be the exact same key \
            you found hanging in the rear-view of your vehicular prison violently washes over you.</p><p><i>(This cannot be an accident...)</i></p>");
    } else if(currentOption == dialogue.house_shed.options["a"] && (invKey == 0 && invHookLine == 0)) {
        clear()
        $('#game-text').append("<p>You place your left hand on the table to steady yourself while you stand on the tips of your toes and stretch across the worktable towards the hook. The solitary key on its keyring dangles from the \
            metal hook on the pegboard. Amidst the various tools, it seems to shine like a beacon of hope in an otherwise dark place.</p><p>All at once, your blood runs cold at the feeling of a breath down your neck. The violent \
            shudder in your bones radiates from your core to your extremities. With wide eyes, you try to correct the mistake you already knew you made, but it’s too late.</p><p>The pegboard hook gets knocked upwards, comes loose, and \
            drops to the floor behind the workbench under the weight of the key it was holding.</p><p>No matter though, you turn and see no one.</p><p>After a gravid moment, you turn back to the fallen keys. You shine the light down the \
            top and sides of the workbench, but there’s just no way you can get your arm or hand in the crevice. Still, you stay crouched, trying fruitlessly to reach for the key, your neck tingles and you get that god awful sensation \
            again.</p><p>You turn to relieve your paranoia, but there’s no relief to be found. An androgynous humanoid creature of average height stands over you. Your mind is suddenly full to bursting of a cacophony of noises ... until \
            the creature releases you from the torment of this existence with one swift twist of your neck.</p>");
            currentLocation = "gameover";
    } else if(currentOption == dialogue.house_shed.options["a"] && (invKey == 0 && invHookLine == 1)) {
        clear()
        $('#game-text').append("<p>You place your left hand on the table to steady yourself while you stand on the tips of your toes and stretch across the worktable towards the hook. The solitary key on its keyring dangles from the \
            metal hook on the pegboard. Amidst the various tools, it seems to shine like a beacon of hope in an otherwise dark place.</p> <p>All at once, your blood runs cold at the feeling of a breath down your neck. The violent shudder \
            in your bones radiates from your core to your extremities. With wide eyes, you try to correct the mistake you already knew you made, but it’s too late.</p><p>The pegboard hook gets knocked upwards, comes loose, and drops to the \
            floor behind the workbench under the weight of the key it was holding.</p><p>No matter though, you turn and see no one.</p><p>After a gravid moment, you turn back to the fallen keys. You shine the light down the top and sides of \
            the workbench, but there’s just no way you can get your arm or hand in the crevice. However, you remember the tacklebox on the bridge and dig out the fishing hook and line.</p><p>You toss the innovative tool of a lazy fisherman \
            in between the workbench and the wall several times with varying degrees of failure; sometimes you get close to it, sometimes you’re as far away as you feel from home right now. All you know is you’re determined to keep trying, \
            even if it only moves a quarter of an inch at a time.</p><p>There’s an eye-opening revelation when you pull and the line goes taut.</p><p><i>(Deep breaths... You've already been disappointed plenty...)</i></p><p>Somehow you manage \
            to keep your excitment contained until you pull the key and the hook out from the crevice.</p><p><i>\"Yes!\"</i> you exclaim, still in nothing more than a whisper.</p><p><i>You got the key.</i></p>");
        }

    if(currentOption == dialogue.house_shed.options["b"] && (invTalisman == 1 || invKey == 1)) {
        lightsOn = 1;
        $('#game-text').append("<p><i>Slosh-ka-slosh-ka-slosh!</i></p><p>You waste no time pouring what’s left in the can into the generator and capping the gas tank. The next obvious step is to grab the pull start and crank; so, you \
            do.</p><p>You don’t panic when the third crank comes and goes because it’s clear it ran dry. But then there’s the fourth crank. And then the fifth...</p><p>But it starts up and lights begin to flicker to life once more. You \
            have escaped the dark ... for now.</p>");
    } else if(currentOption == dialogue.house_shed.options["b"] && (invKey == 0 || invHookLine == 0)) {
        $('#game-text').append("<p>Nothing.</p><p>Infuriated, you toss the can aside and scour the shed for some other can. Never in your wildest imagination could you fathom someone leaving a gas can empty when owning a generator.</p> \
            <p>The amount of noise you made in anger was satisfying, at least. Something about making a lot of noise always feels therapeutic in times such as these.</p><p>In times such as these, however, the noise brings unwanted \
            attention, which manifests itself when you look down and realize there is a black as pitch clawed hand going entirely through your chest.</p><p>The agony of being run through is unbearable. You are at least fortunate enough \
            not to have to spend much time wondering if throwing an empty gas can was truly worth it in the larger scheme of things.</p>");
        currentLocation = "gameover";
        }

    // Go back to the side yard
    if(currentOption == dialogue.house_shed.options["c"]) { roomtraverse("house_side"); }


// House Interior - Study
    // Go to kitchen
    if(currentOption == dialogue.house_study.options["a"]) {
        playerStudy = 0;
        playerKitchen = 1;
        roomtraverse("house_kitchen");
    }

    // Go to the hall
    if(currentOption == dialogue.house_study.options["b"]) {
        playerStudy = 0;
        playerHall = 1;
        roomtraverse("house_hall");
    }


    // Fortuneteller Machine
    if(currentOption == dialogue.house_study.options["c"] && (lightsOn == 1 && invCoin == 1 && playerStudy == 1 && investigateFortuneteller == 0)) {
        investigateFortuneteller = 1;
        previousLocation = currentLocation;
        currentLocation = "house_fortuneteller";
        console.log("Your currentLocation changed to: " + currentLocation);
        console.log("Your previousLocation changed to: " + previousLocation);
        $('#game-text').append("<p>Would you like to use the buffalo nickel to receive your fortune? (Y/N): </p>")
        }

    if(currentOption == dialogue.house_fortuneteller.options["y"] && (lightsOn == 1 && invCoin == 1 && playerStudy == 1)) {
        clear()
        $('#game-text').append("<p>You fish the coin out of your pocket and push it into the nickel slot with your thumb. The coin makes a series of rolling sounds before clanking and clattering into what sounds like an empty coin tray.</p> \
            <p>Madame Zora’s eyes light up and her animatronic hand raises to move above the crystal ball in a circular motion about three times before the hand lowers back into her lap.</p><p>The sound of paper being moved catches your \
            attention. When you look down, a small business card-size piece of paper is sticking out.</p><p>You take it and flip it over. It reads:</p><p><i><h5 align=\"center\">\"DO NOT FOLLOW THE LIGHT BLINDLY<br>FOR IT MAY BE A TRAIN TUNNEL.\"</h5></i></p>");
        previousLocation = currentLocation;
        currentLocation = "house_study";
        console.log("Your currentLocation changed to: " + currentLocation);
        console.log("Your previousLocation changed to: " + previousLocation);
        }


// House Interior - Kitchen
    // Go to the study
    if(currentOption == dialogue.house_kitchen.options["a"]) {
        previousLocation = currentLocation;
        currentLocation = "house_study";
        playerKitchen = 0;
        playerStudy = 1;
        console.log("Your currentLocation changed to: " + currentLocation);
        console.log("Your previousLocation changed to: " + previousLocation);
        }

    // Go to the living room
    if(currentOption == dialogue.house_kitchen.options["b"]) {
        previousLocation = currentLocation;
        currentLocation = "house_livingroom";
        playerKitchen = 0;
        playerLivingroom = 1;
        console.log("Your currentLocation changed to: " + currentLocation);
        console.log("Your previousLocation changed to: " + previousLocation);
        }


    if(currentOption == dialogue.house_kitchen.options["c"] && (investigatePhone == 0 && playerKitchen == 1)) {
        clear()
        investigatePhone = 1;
        $('#game-text').append("<p>It’s a wonder you didn’t trip and fall with the way you double-timed it over to the point. You lift the handset off the receiver hard enough that the bell inside resounds for a second or two.</p><p>Even \
            before you get the handset to your ear, you can hear salvation in the form of a dial tone. This is largely attributed to the fact that the owner has the handset volume maxed out.</p><p>You thoughtlessly dial '9-1-1'.</p> \
            <p><i>Riiing.<br>Riiing.<br>Riiing.<br>Riii—<br>\"9-1-1. Please hold.\"<br>\"Wait!\" you scream.</i></p><p>The line clicks to eerie silence. You feel tears burning your eyes, but you don’t lose hope. Not yet. Not after everything. \
            If anything, you realize now that you can survive any—</p><p>The line clicks again.<br><i>Dial tone.</i></p><p>You hang up and dial it again.<br><i>Busy.</i></p><p>You slam the handset onto the receiver in anger. Of course you wouldn’t \
            even be able to call for help. That’s how these things always work, isn’t it?</p>");
    } else if(currentOption == dialogue.house_kitchen.options["c"] && (investigatePhone == 1 && playerKitchen == 1 && invInvoice == 1)) {
        $('#game-text').append("<p>You pick up the phone and waste no time dialing the numbers you found on the invoice.</p><p><i>Riiiing...<br>Riiiing...</i></p><p>\"Puckett Premier Towing, this is Carla.\"</p><p>\"Carla!\" you nearly scream. \"I need someone to come pick me up. I’m at the house of...\" You look down at the invoice, \
            but your eyes are welling up with tears. You never thought you’d hear another person’s voice again, and here help was so close by now.</p><p>Carla, who’d been typing away in the background, chimed up. \"Oh, honey, I’ve got your address. \
            Don’t you worry, I’ll phone up the Sherriff and have him come get you. You just sit tight, okay?\"</p><p><i>(Just why the heck would I decide to play hide and seek with the sheriff?)</i></p>");
        playerKitchen = 0;
        playerWin = 1;
        roomtraverse("epilogue");
        }


// House Interior - Living Room

    // Go to the entryway
    if(currentOption == dialogue.house_livingroom.options["a"]) {
        playerLivingroom = 0;
        playerEntryway = 1;
        roomtraverse("house_entryway");
        }

    // Go to the kitchen
    if(currentOption == dialogue.house_livingroom.options["b"]) {
        playerLivingroom = 0;
        playerKitchen = 1;
        roomtraverse("house_kitchen");
        }

    // Go into the secretary desk
    if(currentOption == dialogue.house_livingroom.options["c"] && (investigatePhone == 1 && playerLivingroom == 1)) {
        playerLivingroom = 1;
        roomtraverse("secretarydesk");
        }

    // Secretary Desk
    if(currentOption == dialogue.secretarydesk.options["y"] && invInvoice == 0) {
        investigateDesk = 1;
        invInvoice = 1;
        roomtraverse("house_livingroom");
        }

    if(currentOption == dialogue.secretarydesk.options["n"]) { roomtraverse("house_livingroom"); }


// House Interior - Entryway
    // Go to the hall
    if(currentOption == dialogue.house_entryway.options["a"]) {
        playerEntryway = 0;
        playerHall = 1;
        roomtraverse("house_hall");
        }

    // Go to the living room
    if(currentOption == dialogue.house_entryway.options["b"]) {
        playerEntryway = 0;
        playerLivingroom = 1;
        roomtraverse("house_livingroom");
        }

// House Interior - Hall
    // Go to the north bedroom
    if(currentOption == dialogue.house_hall.options["a"]) {
        playerHall = 0;
        playerNorthbedroom = 1;
        roomtraverse("house_northbedroom");
        }

    // Go to the south bedroom
    if(currentOption == dialogue.house_hall.options["b"] && entityEncounter == 0) {
        playerHall = 0;
        playerSouthbedroom = 1;
        roomtraverse("house_southbedroom");
        } else if(currentOption == dialogue.house_hall.options["b"] && entityEncounter == 1) {
            clear()
            $('#game-text').append("<p>Between whatever <i>that</i> was and the creepy dolls, you have no interest in going back into that bedroom.</p>")
        }

    // Go to the entryway
    if(currentOption == dialogue.house_hall.options["c"]) {
        playerHall = 0;
        playerEntryway = 1;
        roomtraverse("house_entryway");
        }


// House Interior - North Bedroom
    // Go into the entryway
    if(currentOption == dialogue.house_northbedroom.options["a"]) {
        playerNorthbedroom = 0;
        playerEntryway = 1;
        roomtraverse("house_entryway");
        }

    // Go into the south bedroom
    if(currentOption == dialogue.house_northbedroom.options["b"] && entityEncounter == 0) {
        playerNorthbedroom = 0;
        playerSouthbedroom = 1;
        roomtraverse("house_southbedroom");
        } else if (currentOption == dialogue.house_northbedroom.options["b"] && entityEncounter == 1) {
            clear()
            $('#game-text').append("<p>Between whatever <i>that</i> was and the creepy dolls, you have no interest in going back into that bedroom.</p>")
        }

    // Investigate the closet
    // This is covered above, with the other lightsOn variables
    if(currentOption == dialogue.house_northbedroom.options["c"] && investigateCloset == 0) {
        investigateCloset = 1;
    } else if(currentOption == dialogue.house_northbedroom.options["c"] && investigateCloset == 1) {
        dialogue.house_northbedroom.options["c"] = "<p>You already investigated the closet and don't care to revisit it.</p>"
        }

// House Interior - South Bedroom
    // Encounter Logic
    if(playerSouthbedroom == 1 && (invFlashlight == 1 && entityEncounter == 0) && ringPulled == 1) {
        $('#game-text').append("<p>You hear the faintest click behind you and your heart stops cold.</p><i>\"I sure would love a hug!\"</i> bleats the voice box of the doll whose ring you pulled earlier.</p> \
            <p>The creature turned heel and walked with newfound purpose to the pile of dolls. A long hand is extended to grab one of the dolls.</p><p>You clinch your eyes shut and hold your breath—every movement, \
            really. The chosen doll happened to be the one covering your face. Extremely unlucky.</p><p>The glances you hazard reveal that there are no facial features, as if the creature itself were encased \
            in a skin-tight latex suit.</p><p>The creature lowers the doll it’s holding by the arm and looks straight into your exposed eyes.</p><p><i>Craaaack!</i><p>The creature shatters the doll and drops \
            it in a heap at the foot of the pile before reaching in to grab you.</p><p>You kick and struggle ... at least until the other hand grabs your neck and squeezes.</p><p>The creature turns on its heel \
            and drags your nearing lifeless body out of the bedroom. You succumb to the light before seeing where the creature would’ve taken you.</p>");
        entityEncounter = 1;
        currentLocation = "gameover";
    } else if(playerSouthbedroom == 1 && (invFlashlight == 1 && entityEncounter == 0) && ringPulled == 0) {
        $('#game-text').append("<p>After some time, the creature turns heel and saunters on.</p><p><i>(Oh my goodness, I... I almost died...)</i></p><p>The creature can no longer be seen and the sound of static \
            retreats to pure silence.</p><p>You are terrified, but your gut is telling you that it is hopefully safe—that you have to do something if you have any hope of getting out alive.</p><p>You leave the \
            bedroom with no intentions of returning. You also tell yourself that if you survive this, you won’t return to this house.</p>");
        }

// Epilogue
    if(playerWin == 1 && currentLocation == "epilogue") {
        currentLocation = "acknowledgements";
        }
}

// Room Traversal
function roomtraverse(room) {
    if(room == "") {
        return;
    } else if(room !== "") {
        previousLocation = currentLocation;
        currentLocation = room;
        console.log("Your currentLocation changed to: " + currentLocation);
        console.log("Your previousLocation changed to: " + previousLocation);
    return;
    }
}

function sfhcount() {
    // Pick a random number between 0 and 100.
    random = Math.floor(Math.random() * 101);

    // Console Print for Debugging
    console.log("Random Number: "+random);
    console.log("Scream Count: "+screamCount);

    // If you've screamed your last scream...
    if (random <= screamCount) {
        currentLocation = "gameover";
        clear()
        $('#game-text').append("<p>The silence after the end of your scream is only momentary.</p><p>Immediately following that, your ears are drowned in a deluge of noise as your surroundings melt like a surrealistic \
            Salvador Dalí painting—and with it... all the light, too.</p><p>All at once, the burdens of the night are lifted, along with all the others.</p><p>You realize you don't realize anymore. You simply don't. You're \
            simply... <i>not.</i></p>");
        return;
    } else if (random > screamCount) {
        $('#game-text').append("<p>You hear no response from the Ether.</p>");
        return;
    }

}


// Kick off the whole thing with the initial start game function.
function startgame() {
    // Reset all variables without requiring user refresh
    // I removed the variables because it's a mess. I'll figure out how I want to do this when I finish the main game.

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
