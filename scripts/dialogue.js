var dialogue =
{
	"intro": {
	description: "<p>Racing through your mind are these fleeting memories of moments past. Oh, how they feel like an eternity ago... Part of you \
		feels safe and secure in your cozy bed inside your quaint home. The other part of you is convinced you’re in danger. That none of this is real. \
		That it’s all a dream. So, you simply do what makes the most sense in a situation like this...</p><p>You open your eyes, but there is nothing to \
		see. You blink, but can see no differentiation between your eyes being open or closed.</p><p><i>(Where ... am I?)</i></p>\
		<br>A) Try to move<br>B) Check your pockets.<br>C) Scream for help.<br>",
	options: 
	{
	"a":"<p>You begin moving your hands along your sides and work towards directly in front of you. At your sides, you feel upholstery (albeit matted and \
		likely neglected for far too long). In front of you, off to your right-hand side, you feel what may be a handle, while your other hand feels more upholstery.</p>",
	"b":"<p>Your hands begin the journey of digging through your pockets with your mind already convincing them that they’ll feel a cotton undershirt and \
	flannel pajama pants. What your hands feel instead is the familiarity of a cotton shirt, followed by the coarseness of denim.</p><p>You do not recall changing.</p> \
	<p>Your hands rifle through the hip pockets, then the back pockets.</p><p><i>Ugh! Nothing!</i></p>",
	"c":"YOU SCREAM! AAAAAAAAH!!!!!",
	},
	correct: "a",

},

	"introhandle": { 
	description:"<p>You begin moving your hands along your sides and work towards directly in front of you. At your sides, you feel upholstery (albeit matted and \
		likely neglected for far too long). In front of you, off to your right-hand side, you feel what may be a handle, while your other hand feels more upholstery.</p>\
		<p><br>A) Pull the handle<br>B) Investigate further.<br>C) Do nothing and listen.",
	options:
	{
		"a":"<p>You pull what you believe to be a handle. It is an emergency release latch. The trunk opens up and more darkness pours in. The air is dank, the atmosphere unsettling. But \
		there is no disputing that feeling of no longer being suffocated, the one which gives you a feeling, like a second wind.</p><br>",
		"b":"<p>While you are unable to see, as you feel along the upholstery, you stretch until your hand is unable to move further. Once you hit the wall, you begin sliding your hand along \
		the obstruction. The friction is causing your palm to warm, but not before your hand hits something tangible. The object feels long, metal, and curved at the end. You believe it to be \
		a tire iron.<br>Pick it up? (Y/N):</p><br>",
		"c":"<p>You hear precious little, other than your heart throbbing in your left ear. Deep down, you are dying to escape.</p><br>",
		"y":"You picked up the tire iron.",
		"n":"<p>You did not pick up the tire iron.</p><br>",
		},
	correct: "a",

	},

	"trunk_open": { 
	description:"<p>The air wraps around your face like a hot, moist blanket, but there seems to be some hint of coolness. A Spring shower, perhaps.</p><p>The trunk swings up and rocks on its hinges, \
	ravaging the silence. As its stubborn creaks and groans still, the sound of nighttime creatures fills your ears. The heartbeat still in your ears thrums, <i>\"Go-go, go-go, go-go.\"</i></p>\
	<p><br>A) Investigate the trunk.<br>B) Scream for help.<br>C) Climb out of the trunk.<br></p>",
	options:
	{
		"a":"While you are unable to see, as you feel along the upholstery, you stretch until your hand is unable to move further. Once you hit the wall, you begin sliding your hand along \
		the obstruction. The friction is causing your palm to warm, but not before your hand hits something tangible. The object feels long, metal, and curved at the end. You believe it to be \
		a tire iron.<br>Pick it up? (Y/N):<br>",
		"b":"YOU SCREAM!!!<br>",
		"c":"You are uncertain how long you have been entombed in this trunk, and you still haven’t the foggiest how you ended up here; but you command your strength to lift your upper body and \
		then to hoist your shivering stilts over the frame of the trunk and the bumper. With one final push, you are out, born into a world which seems so familiar and so strange all at once. So \
		right, and yet so wrong.<br>",
		"y":"You picked up the tire iron.",
		"n":"You did not pick up the tire iron.<br>",
		},
	correct: "c",
},
	"trunk_out": { 
	description:"<p><i>(Where the hell am I?)</i></p><p>Your dilated pupils pick up the faintest light in the distance, standing out like a shimmering beacon, strangled by a copse of trees. To your rear, as you already know, \
	is the vehicle from whence you came.</p>\
	<p><br>A) Run towards the light.<br>B) Investigate the vehicle.<br>C) Scream for help.<br>",
	options:
	{
		"a":"<p>Your legs are shaky and seemingly gelatinous, but you manage to come to a steady canter. The trees whiz by the more certain your each and every footfall becomes. There is a part of \
		you that is grateful you didn’t routinely skip leg day, as if part of you always knew you’d be in this very predicament.</p><p>Your mind begins to wonder again how it got in this predicament, \
		but fails to come up with anything of substance. The visibility out here is limited, but nothing you see has any semblance of familiarity.</p><p>In what would seem like a direct attack in the \
		form of hindrance, a plant tendril entangles your ankle and pulls you down to the earthen floor.</p><br>",
		"b":"Your sage wisdom implores your to check the vehicle for clues, or perhaps something helpful.<br>",
		"c":"You are uncertain how long you have been entombed in this trunk, and you still haven’t the foggiest how you ended up here; but you command your strength to lift your upper body and \
		then to hoist your shivering stilts over the frame of the trunk and the bumper. With one final push, you are out, born into a world which seems so familiar and so strange all at once. So \
		right, and yet so wrong.<br>",
		"y":"You picked up the tire iron.",
		"n":"You did not pick up the tire iron.<br>",
		},
	correct: "a",
},

	"checkvehicle": { 
	description:"<p>You take your time to really walk around the car. While your eyes pan the surrounding area, your hand glides over the door handles and gives each a tug.</p><p><i>(No good. They're all locked.)</i></p> \
	<p>You can't help but notice the quite impossible overgrowth of foliage surrounding the car.</p><p>If it weren't crazy talk, you'd convince yourself the vehicle was simply placed here.</p> \
	<p><br>A) Break the window.<br>B) Scream for help.<br>C) Further investigate the vehicle.<br>",
	options:
	{
		"a":"<p>Armed with only your fisticuffs, you punch the glass. Ow! Now something other than your pride is hurting. There’s no way you’re going to be able to break the glass barehanded, you \
		realize.</p><br>",
		"b":"YOU SCREAM!!!<br>",
		"c":"<p>Without breaking the window, you are quite certain that you won't be able to get in to thoroughly examine the vehicle. What you can see from the window, however, is a key hanging from\
		the rear-view mirror. The possible applications of such a key astound you.</p><br>",
		},
	correct: "",
},

	"checkinterior": { 
	description:"<p>Clutching the tire iron in your white-knuckled fist, you strike the window once. The tire iron bounces off with little more than a loud <i>pop!</i></p><p>You strike it again, this time more \
	towards the edge. Less of a pop, more of a crack.</p><p>You strike it again with all your might and the glass shatters. Armed with knowledge from action movies, you use the tire iron to clear out the \
	glass in the frame and pull up the lock switch. With reckless abandon, you grab the door handle and throw it open.</p> \
	<p>A) Further investigate the car.<br>B) Open the glove box.<br>C) Take the key.<br>",
	options:
	{
		"a":"<p>You hope that now you are inside the vehicle that something else will become apparent. While you lean over the center console and take stock of everything, it becomes obvious there is nothing more \
		of importance here.</p><br>",
		"b":"<p>Damnit! The glove box is locked! What would’ve been the odds that anything other than gloves would’ve been found inside anyway, you wonder.</p><br>",
		"c":"<p>Seeing nothing else of remote importance in the general vicinity, you lift the chain from the rearview mirror and take the key.</p><br>",
		},
	correct: "c",
},

	"tripped_up": { 
	description:"<p>Abrasions and contusions plague your already bewildered body—a constant reminder of your downfall. Dirt has crammed its way underneath your fingernails and it blackens your face. \
	The soil smells of approaching storms.</p> \
	<p>In the distance, the light seems neither closer nor farther than it did before, but looking back at the car is a telling sign of the distance you’ve traveled. It now looks at least a quarter of the \
	size it did when you climbed out of it.</p> \
	<p><i>(But why was I there? Why am I here and not in bed?)</i></p> \
	<p>To your immediate right is a doll resembling a little girl propped neatly up against the tree with her hands in her lap. Her hair is tangled and unkempt; her pastel pink dress filthy; her body weathered from an \
	indeterminate passing of seasons. Clutched in her right hand is a corroded coin.</p> \
	<p>A) Continue running towards the light.<br>B) Investigate the doll.<br>C) Investigate the coin.<br>",
	options:
	{
		"a":"<p>You climb to your feet and free your right ankle from the vine. Without further ado, you return to running towards the light, the only quest you can imagine at the moment. This mysterious \
		light grows brighter and brighter still, but it is still impossible to tell what its intended purpose could be.</p> \
		<p><i>(Someone could be there. Someone who could help.)</i></p> \
		<p>With each breath of the humid summer air you take into your lungs, you feel your stamina starting to wither. Your legs are beginning to burn and your injuries throb with a noticeable but not \
		life-threatening rhythm. As you start to fall back to a walk, you recognize a sound you thought you’d only just imagined...</p><br>",
		"b":"<p>When you pick up the doll, the coin it was clutching falls from its tiny hand and onto the forest floor. Now that the doll is closer, you can see that one of the eyes is cocked to the \
		side and the other is completely black. While you can't put your finger on it, there is something eerily off.</p> \
		<p>In the center of the doll’s back is a ring, which feels as though you could pull it to make her talk.</p><br>",
		"c":"You bend over, pick up the coin, and begin to study it.",
		},
	correct: "a",
},

	"checkdoll": { 
	description:"<p>Your overwhelming sense of curiosity takes over upon gazing at this haggard doll. It reminds you of simpler times, like playing outside with friends and recess at school. But, just like the doll \
	those memories age and decay—wither and rot. While the blood continues thumping in your head, it seems to become muted when you gaze into the one undying eye of this little doll.</p> \
	<p>A) Further investigate the doll.<br>B) Leave the doll alone.<br>C) Take the doll.<br>",
	options:
	{
		"a":"<p>You realize upon picking up the doll that you have seen <i>almost</i> everything you need, except for a little white ring on the back just big enough for your index finger to go through. \
		The memories which rush back are of the toys you had as a kid, which brought you such happiness; however, you can't honestly say if this will bring you that same happiness or not.</p><br>",
		"b":"<p>You decide to leave the doll in the likeness of a happy little girl to the cruel hand of nature and time.</p><br>",
		"c":"You took the doll.",
		"y":"<p>You pull the ring.</p><p>The string is allowed to be pulled back about half a foot before catching. Once you release it, it slowly retracts with a tiny winding sound. Some mechanism inside \
		the doll appears to give the faintest noise, like needle noise from an old record.</p><p>Once the string is retracted, even that sound is gone and you are left in the dark with only the sounds of \
		the wild to keep you company.",
		"n":"<p>You do not pull the ring.</p><p>It was probably better this way, you feel.</p>",
		},
},

	"takedoll": { 
	description:"<p>You come to the sudden realization with a violent shudder that you've been staring at this doll for an interminable amount of time.</p> \
	<p>Take the doll? (Y/N): <br>",
	options:
	{
		"y":"<p>You take the doll.</p>",
		"n":"<p>You throw the doll to the forest floor with reckless abandon.</p>",
		},
},

	"takecoin": { 
	description:"<p>The coin you previously thought to have been corroded beyond recognition actually has the faintest inscription of what you construe to be a buffalo. Your mind thinks perhaps it could be a \
		buffalo nickel, though you’ve only ever heard of such things amongst the old-timers.</p><p>Take the coin? (Y/N): </p>",
	options:
	{
		"y":"<p>You take the coin.</p>",
		"n":"<p>You throw the coin to the forest floor and contemplate continuing forward.</p>",
		},
},

	"at_bridge": { 
	description:"<p>As you walk over the hill, you find a rickety wooden bridge stretched over a rushing river anywhere from ten to fifteen feet across. What you can make of its form in the limited lighting makes \
	you feel as though it could be a beautiful, picturesque scene fit for hanging atop a fireplace if only the sun were shining.</p> \
	<p>You also realize that your tongue has become a dried sponge in your mouth. There’s a nagging voice in your head saying to drink the water that just won’t stop.</p> \
	<p>A) Drink from the river.<br>B) Scream for help.<br>C) Cross the bridge.",
	options:
	{
		"a":"<p>That voice rejoices in your head while you walk towards the river. What a relief it is just to fall to your knees and bow before the river with cupped hands outstretched.</p> \
		<p>You slurp down not one, or two, but three good handfuls of cool resplendence. That nagging voice in your head seems pleased, if only just for the moment.</p>",
		"b":"<p>AHHHHH!</p>",
		"c":"<p>You take one careful step at a time across the bridge. The wood slats give, some more than others, but you are able to make it halfway across the bridge when a faint shape leaps \
		out at you from your periphery.</p> \
		<p>It appears to be a box of sorts.</p>",
		},
	correct: "c",
},

	"on_bridge": { 
	description:"<p>The beautiful perfection of this box's placement is picturesque, as if it were the portrait and the rest of the bridge were merely framing this uneasy utopia. In the center of the bridge \
	even the stream beneath you sounds different. The life which roars beneath you feels reminescent of your own.</p> \
	<p><i>(You can do this... You've got this...)</i></p> \
	<p>A) Investigate the box.<br>B) Continue crossing the bridge.<br>C) Stop to rest again the railing.",
	options:
	{
		"a":"<p>You walk closer to and crouch down in front of the box. There are two simple latches about an inch apart from either edge of the box. You see no harm in opening it, the more you \
		think about it; so you pop the latches and lift the handle...</p>",
		"b":"<p>You make it to the other side of the bridge without issue, in spite of its state of disrepair.</p>",
		"c":"<p>The journey so far has just been more than you can take. Leaning against the railing sounded just perfect, and that voice in your head didn’t object to taking a load off. So, you \
		lean against the railing and feel your muscles sigh with relief. Looking up at the night sky, you ponder what cruel fate lead you here, and what answers you might find when you reach the light.</p> \
		<p><i><b>Crack!</b></i></p><p>The railing breaks as if it was never behind you and you tumble back, shouting out in surprise. Your arms fly back to try to brace yourself for the fall, but the back of your \
		head finds purchase on a jutted out rock.</p> \
		<p>In your last moments of consciousness, you swear a humanoid silhouette is standing on the shore, walking beside you, as if he or she had heard your ... scream for help.</p>",
		},
	correct: "b",
},

	"tacklebox": { 
	description:"<p>It’s a tackle box! Various fishing gear is neatly organized inside. What seems to jump out at you most is a pair of plyers and a fishing hook tied to several feet of fishing line.</p> \
	<p>A) Take the plyers.<br>B) Take the fishing hook and line.<br>C) Close the tackle box.</p>",
	options:
	{
		"a":"<p>You pick up the plyers.</p>",
		"b":"<p>You pick up the fishing hook and line.</p>",
		"c":"<p>You close the tackle box.</p>",
		},
},

	"talisman": { 
	description:"<p>You cross over the last wooden slat and feel your foot settle into the greener grass on the other side of the bridge. There is a sense of peace in your soul, having realized you didn't \
	suffer some unfortunate freak accident, overwritten only by the apprehension of where the journey towards the light might lead you.</p><p>In this thoughtful daze, you come to realize your eyes have fixated \
	on a strange object in a star-like shape hanging from a string.<p><i>(What is this? Some sort of talisman?)</i></p></p><p>Take the supposed talisman? (Y/N): </p>",
	options:
	{
		"y":"<p>You take the supposed talisman.</p>",
		"n":"<p>You decide to leave the supposed talisman.</p>",
		},
},

	"lonewolf": { 
	description:"<p>While you don’t have an illuminated watch, or any way to tell time, it feels to you as if you’ve been walking for anywhere between forty minutes and an hour. In some areas the underbrush \
	has gotten thicker and you’ve had to slow to ensure you don’t fall again, but you still meander on, like a moth drawn to a flame.</p> \
	<p>The night ambience, as peaceful as it had been, was abruptly interrupted by a low growl not too far away. You freeze in place, but it still makes your neck hair stand and your blood run cold.</p> \
	<p>You turn your head towards the sound of the growl to see what appears to be a canid standing tall with his ears, tail, and hackles standing taller.</p> \
	<p>A) Scream for help.<br>B) Make a run for it.<br>C) Intimidate the creature.",
	options:
	{
		"a":"<p>You let out a scream to the high heavens, one which faintly echoes back. In the distance, somewhere far behind you, you hear a respondent howl. This, much to your delight, is enough to stir \
		the creature to move away from you, seemingly disinterested.</p>",
		"b":"<p><i>(I'm gonna do it. I'm gonna make a run for it.)</i></p>",
		"c":"<p>(I'm gonna do it. I'm gonna scare this thing.)</p>",
		},
},

	"at_house": { 
	description:"<p>You walk for what now feels like to your paranoid mind an eternity. Constantly, you look over your shoulder to see if you’re being followed. Maybe the creature changed its mind—or maybe \
	it simply went to go get friends. Every change in ambiance, every sudden sound makes your skin crawl.</p> \
	<p>A new thought passes into your mind. The tree line is thinning. It has to be!</p> \
	<p>And it is. Within another fifty yards, you finally step out of the forest and into a long, sprawling countryside. And there it is: the source of the light.</p> \
	<p>Several hundred yards away is a shimmering, sometimes flickering, lamp atop a post which serves to illuminate the dooryard of the house whose property it resides on.</p> \
	<p>The urge to run overwhelms you, and you take off towards the light. As you close in, you begin to hear what you can only assume is a trunk idling. One window on the side of the house facing you even \
	has a light on! You run until your legs can’t anymore and then still manage to keep a fast pace as your salvation is at hand, with the house merely fifty feet away.</p> \
	<p>Then the idling truck sputters to a stop and you realize it wasn’t a truck at all. It was only the generator which was powering the house and the lamp post, and now you are once more standing in pitch \
	darkness.</p> \
	<p>You stop just short of the dark porch with the door not too far from you now and contemplate the best way to proceed. You do, however, let out a deep exhalation with the realization that you’re at \
	least out of the woods—in a literal sense.</p> \
	<p>Thinking of no better option, you trudge across the creaky boards of the porch to the door and give three loud raps. And then three more.</p> \
	<p>No answer. No sounds other than the ambiance of the night.</p> \
	<p>A) Wait on the porch.<br>B) Investigate the house.<br>C) Scream for help.",
	options:
	{
		"a":"<p><i>(Maybe the owner is alseep. I should wait.)</i></p> \
		<p>So, you wait.</p><p>Your mind is rife with thoughts of things like how you could've gotten here, and even that uneasy feeling you can't quite put your finger on. Is it a feeling of impending doom? \
		Is it a feeling of nothing in your surroundings adding up? Maybe it's just a feeling of being watched that has you on edge.</p><p>You realize, however, that standing around waiting is ultimately fruitless \
		and that it will continue to fall on your own shoulders to find your way out of this hellscape.</p>",
		"b":"<p><i>(I'm gonna do it. I'm gonna make a run for it.)</i></p>",
		"c":"<p>AHHHHHHH!!!!!!!!</p>",
		},
},

	"gameover": { 
	description:"<h1 align=\"center\"><p>YOU DIED</p></h1><p>Would you like to begin a new game?</p>",
	options:
	{
		"y":"<p></p>",
		"n":"<p></p>",
		},
},

};