// Development Variables
let state = {}
let locations = ['intro', 'introhandle', 'trunk_open', 'trunk_out', 'tripped_up','at_bridge','on_bridge','lonewolf','at_house','house_bporch','house_side']
let locationInt = 0
let currentLocation = locations[locationInt]
let currentOption = ""
let previousLocation = ""
var choice = ""

// Inventory Variables

var invTireIron = 0;
var invKey = 0;
var invDoll = 0;
var invCoin = 0;
var invPlyers = 0;
var invHookLine = 0;
var invTalisman = 0;

// Status Variables
var screamCount = 0;
var screamMax = 0;
var drinkRiver = 0;
var ringPulled = 0;
var closeTacklebox = 0;
var doorKnocked = 0;

// Investigation Status Variables
var checkPockets = 0;
var investigateTrunk = 0;
var investigateVehicle = 0;
var investigateDoll = 0;
var investigateCoin = 0;
var investigatePlyers = 0;
var investigateHookLine = 0;
var investigateFrontdoor = 0;
var investigateGarage = 0;