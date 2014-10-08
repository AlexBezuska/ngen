"use strict";

var Splat = require("splatjs");
var canvas = document.getElementById("canvas");

var manifest = {
	"images": {

	},
	"sounds": {},
	"fonts": {},
	"animations": {
		"bush-large-1": {
			"strip": "img/bush-large-1.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"bush-med-1": {
			"strip": "img/bush-med-1.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"bush-small-1": {
			"strip": "img/bush-small-1.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"bush-small-2": {
			"strip": "img/bush-small-2.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"tree-dead-1": {
			"strip": "img/tree-dead-1.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"tree-dead-2": {
			"strip": "img/tree-dead-2.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"tree-oak-large-bare": {
			"strip": "img/tree-oak-large-bare.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"tree-oak-large": {
			"strip": "img/tree-oak-large.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"tree-pine-med": {
			"strip": "img/tree-pine-med.png",
			"frames": 3,
			"msPerFrame": 1500
		},
		"tree-pine-small": {
			"strip": "img/tree-pine-small.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"tree-redwood-large": {
			"strip": "img/tree-redwood-large.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"tree-redwood-med-bare": {
			"strip": "img/tree-redwood-med-bare.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"tree-redwood-med": {
			"strip": "img/tree-redwood-med.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"tree-redwood-large-bare": {
			"strip": "img/tree-redwood-large-bare.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"flowers-2": {
			"strip": "img/flowers-2.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"ice-plant": {
			"strip": "img/ice-plant.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"tropical-flowers": {
			"strip": "img/tropical-flowers.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"flowers-1": {
			"strip": "img/flowers-1.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"tropical-bush-1": {
			"strip": "img/tropical-bush-1.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"palm-tree-2": {
			"strip": "img/palm-tree-2.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"palm-tree": {
			"strip": "img/palm-tree.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"winter-tree-1": {
			"strip": "img/winter-tree-1.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"cactus-mini-5": {
			"strip": "img/cactus-mini-5.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"mushroom-2": {
			"strip": "img/mushroom-2.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"mushroom-1": {
			"strip": "img/mushroom-1.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"cactus-mini-4": {
			"strip": "img/cactus-mini-4.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"cactus-mid-3": {
			"strip": "img/cactus-mid-3.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"cactus-mid-2": {
			"strip": "img/cactus-mid-2.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"cactus-mid": {
			"strip": "img/cactus-mid.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"cactus-mini-3": {
			"strip": "img/cactus-mini-3.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"cactus-mini-2": {
			"strip": "img/cactus-mini-2.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"cactus-mini": {
			"strip": "img/cactus-mini.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"bg-1": {
			"strip": "img/bg-1.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"bg-2": {
			"strip": "img/bg-2.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"bg-3": {
			"strip": "img/bg-3.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"bg-4": {
			"strip": "img/bg-4.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"bg-5": {
			"strip": "img/bg-5.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"bg-6": {
			"strip": "img/bg-6.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"bg-7": {
			"strip": "img/bg-7.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"bg-8": {
			"strip": "img/bg-8.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"bg-9": {
			"strip": "img/bg-9.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"bg-10": {
			"strip": "img/bg-10.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"bg-11": {
			"strip": "img/bg-11.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"bg-12": {
			"strip": "img/bg-12.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"bg-13": {
			"strip": "img/bg-13.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"bg-14": {
			"strip": "img/bg-14.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"bg-15": {
			"strip": "img/bg-15.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"bg-16": {
			"strip": "img/bg-16.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"bg-17": {
			"strip": "img/bg-17.png",
			"frames": 1,
			"msPerFrame": 400
		}

	}
};

var game = new Splat.Game(canvas, manifest);
var debug = false;
var masterHeat = 0;

var masterMoisture = 0;

var qs = getQueryStrings();
var qsHeat = qs.heat;
if (qsHeat) {
	masterHeat = parseInt(qsHeat);
}
var qsMoisture = qs.moisture;
if (qsMoisture) {
	masterMoisture = parseInt(qsMoisture);
}



var submit = document.getElementById("submit");

var txtHeat = document.getElementById("txtHeat");
txtHeat.value = masterHeat;
var txtMoisture = document.getElementById("txtMoisture");
txtMoisture.value = masterMoisture;

submit.addEventListener("click", function() {
	console.log("click");
	var thisHeat = 0;
	if (txtHeat.value > 0) {
		if (txtHeat.value > 3) {
			thisHeat = 3;
		} else {
			thisHeat = txtHeat.value;
		}
	}
	var thisMoisture = 0;
	if (txtMoisture.value > 0) {
		if (txtMoisture.value > 2) {
			thisMoisture = 2;
		} else {
			thisMoisture = txtMoisture.value;
		}
	}
	window.location = "index.html?heat=" + thisHeat + "&moisture=" + thisMoisture;
});

/*
 * Pick a random index from an array, returns a number
 */
function randomPick(array) {
	return Math.floor(Math.random() * array.length);
}

function filterByClimate(array) {
	var filteredArray = [];
	for (var i = 0; i < array.length; i++) {
		if (inArray(array[i].heat, masterHeat)) {
			if (inArray(array[i].moisture, masterMoisture)) {
				filteredArray.push(array[i]);
			}
		} else {
			console.log("No sprites match this, or error");
		}
	}
	return filteredArray;
}

/*
 * Pick a random number between min and max
 */
function randomBetween(min, max) {
	return Math.floor(Math.random() * max) + min;
}

/*
 * Fills a rectangle with sprites from an array
 */
function tileArea(sprites, x, y, width, height) {
	var array = [];
	for (var w = x; w < width; w += sprites[0].width) {
		for (var h = y; h < height; h += sprites[0].height) {
			var thisSprite = sprites[randomPick(sprites)];
			array.push(new Splat.AnimatedEntity(w, h, thisSprite.width, thisSprite.height, thisSprite, 0, 0));
		}
	}
	return array;
}

/*
 * adds plant entityies to the array,
 * use properties object to define plant characteristics
 */
function createPlants(sprites, x, y, width, height, quantity) {
	var array = [];
	var filteredSprites = filterByClimate(sprites);
	for (var i = 0; i < quantity; i++) {
		var thisSprite = filteredSprites[randomPick(filteredSprites)];
		var positionX = randomBetween(x - (thisSprite.sprite.width / 2), width + (thisSprite.sprite.width / 2));
		var positionY = randomBetween(y - thisSprite.sprite.height, height);
		array.push(new Splat.AnimatedEntity(positionX, positionY, thisSprite.sprite.width, thisSprite.sprite.height, thisSprite.sprite, 0, 0));
	}
	return array;
}

function sortEntities(entities) {
	return entities.sort(function(b, a) {
		return (b.y + b.height) - (a.y + a.height);
	});
}

function sortAndDraw(context, entities) {
	var array = sortEntities(entities);
	for (var i = 0; i < array.length; i++) {
		array[i].draw(context);
	}
}

function centerText(context, text, offsetX, offsetY) {
	var w = context.measureText(text).width;
	var x = offsetX + (canvas.width / 2) - (w / 2) | 0;
	var y = offsetY | 0;
	context.fillText(text, x, y);
}


function inArray(haystack, needle) {
	for (var i = 0; i < haystack.length; i++) {
		if (haystack[i] === needle) {
			return true;
		}
	}
	return false;
}

/*
 * Return true if the variable is an array
 */
function isArray(someVar) {
	if (Object.prototype.toString.call(someVar) === "[object Array]") {
		return true;
	}
}

function drawEntityDeminsions(context, entity) {
	context.fillText(" w: " + entity.width + " h: " + entity.height, entity.x + (entity.width + 5), entity.y + (entity.height + 18));
}

function drawEntityOrigin(context, entity) {
	context.fillText(" x: " + entity.x + " y: " + entity.x, entity.x + (entity.width + 5), entity.y + (entity.height + 5));
}

function drawEntityInfo(context, entity, color) {
	context.fillStyle = color;
	context.font = "12px helvetica";
	drawEntityDeminsions(context, entity);
	drawEntityOrigin(context, entity);
}

function drawOutlines(context, entities, color) {
	context.strokeStyle = color;
	if (isArray(entities)) {
		for (var i = 0; i < entities.length; i++) {
			context.strokeRect(entities[i].x, entities[i].y, entities[i].width, entities[i].height);
			if (debug) {
				drawEntityInfo(context, entities[i], color);
			}
		}
	} else {
		context.strokeRect(entities.x, entities.y, entities.width, entities.height);
		if (debug) {
			drawEntityInfo(context, entities, color);
		}
	}
}

function animateEntities(elapsedMilis, entities) {
	if (isArray(entities)) {
		for (var a = 0; a < elapsedMilis.length; a++) {
			entities[a].move(elapsedMilis);
		}
	} else {
		entities.move(elapsedMilis);
	}
}

function getQueryStrings() {
	var assoc = {};
	var decode = function(s) {
		return decodeURIComponent(s.replace(/\+/g, " "));
	};
	var queryString = location.search.substring(1);
	var keyValues = queryString.split("&");
	for (var i = 0; i < keyValues.length; i++) {
		var key = keyValues[i].split("=");
		if (key.length > 1) {
			assoc[decode(key[0])] = decode(key[1]);
		}
	}


	return assoc;
}


game.scenes.add("title", new Splat.Scene(canvas, function() {
	// initialization
	this.timers.expire = new Splat.Timer(undefined, 100, function() {
		game.scenes.switchTo("main");
	});
	this.timers.expire.start();
}, function() {
	// simulation
}, function(context) {
	// draw
	context.fillStyle = "black";
	context.fillRect(0, 0, canvas.width, canvas.height);

	context.fillStyle = "#fff";
	context.font = "25px helvetica";
	centerText(context, "ngen", 0, canvas.height / 2 - 13);
}));


game.scenes.add("main", new Splat.Scene(canvas, function() {
	// initialization
	this.testTreeSprites = [{
		"sprite": game.animations.get("bush-large-1"),
		"heat": [2, 3],
		"moisture": [1, 2]
	}, {
		"sprite": game.animations.get("bush-med-1"),
		"heat": [2, 3],
		"moisture": [1, 2]
	}, {
		"sprite": game.animations.get("bush-small-1"),
		"heat": [2, 3],
		"moisture": [1, 2]
	}, {
		"sprite": game.animations.get("bush-small-2"),
		"heat": [2, 3],
		"moisture": [1, 2]
	}, {
		"sprite": game.animations.get("tree-dead-1"),
		"heat": [2, 3],
		"moisture": [1, 2]
	}, {
		"sprite": game.animations.get("tree-dead-2"),
		"heat": [2, 3],
		"moisture": [1, 2]
	}, {
		"sprite": game.animations.get("tree-oak-large-bare"),
		"heat": [2, 3],
		"moisture": [1, 2]
	}, {
		"sprite": game.animations.get("tree-oak-large"),
		"heat": [2, 3],
		"moisture": [1, 2]
	}, {
		"sprite": game.animations.get("tree-pine-med"),
		"heat": [1],
		"moisture": [0, 1, 2]
	}, {
		"sprite": game.animations.get("tree-pine-small"),
		"heat": [1],
		"moisture": [0, 1, 2]
	}, {
		"sprite": game.animations.get("tree-redwood-large"),
		"heat": [2],
		"moisture": [2]
	}, {
		"sprite": game.animations.get("tree-redwood-med-bare"),
		"heat": [2],
		"moisture": [2]
	}, {
		"sprite": game.animations.get("tree-redwood-med"),
		"heat": [2],
		"moisture": [2]
	}, {
		"sprite": game.animations.get("tree-redwood-large-bare"),
		"heat": [1, 2],
		"moisture": [2]
	}, {
		"sprite": game.animations.get("flowers-2"),
		"heat": [2],
		"moisture": [1]
	}, {
		"sprite": game.animations.get("ice-plant"),
		"heat": [1],
		"moisture": [0, 1, 2]
	}, {
		"sprite": game.animations.get("tropical-flowers"),
		"heat": [3],
		"moisture": [1]
	}, {
		"sprite": game.animations.get("flowers-1"),
		"heat": [2],
		"moisture": [1]
	}, {
		"sprite": game.animations.get("tropical-bush-1"),
		"heat": [3],
		"moisture": [1]
	}, {
		"sprite": game.animations.get("palm-tree-2"),
		"heat": [3],
		"moisture": [1]
	}, {
		"sprite": game.animations.get("palm-tree"),
		"heat": [3],
		"moisture": [1]
	}, {
		"sprite": game.animations.get("winter-tree-1"),
		"heat": [1],
		"moisture": [1, 2]
	}, {
		"sprite": game.animations.get("cactus-mini-5"),
		"heat": [3],
		"moisture": [0]
	}, {
		"sprite": game.animations.get("mushroom-2"),
		"heat": [2],
		"moisture": [2]
	}, {
		"sprite": game.animations.get("mushroom-1"),
		"heat": [2],
		"moisture": [2]
	}, {
		"sprite": game.animations.get("cactus-mini-4"),
		"heat": [3],
		"moisture": [0]
	}, {
		"sprite": game.animations.get("cactus-mid-3"),
		"heat": [3],
		"moisture": [0]
	}, {
		"sprite": game.animations.get("cactus-mid-2"),
		"heat": [3],
		"moisture": [0]
	}, {
		"sprite": game.animations.get("cactus-mid"),
		"heat": [3],
		"moisture": [0]
	}, {
		"sprite": game.animations.get("cactus-mini-3"),
		"heat": [3],
		"moisture": [0]
	}, {
		"sprite": game.animations.get("cactus-mini-2"),
		"heat": [3],
		"moisture": [0]
	}, {
		"sprite": game.animations.get("cactus-mini"),
		"heat": [3],
		"moisture": [0]
	}];

	//moisture 0-2
	//heat 0-3

	// sprite array, x, y, width, height, quantity
	this.trees = createPlants(this.testTreeSprites, 0, 0, 640, 640, 35);

	this.goundSprites = [
		game.animations.get("bg-1"),
		game.animations.get("bg-6")
	];

	// sprite array, x, y, width, height
	this.ground = tileArea(this.goundSprites, 0, 0, canvas.width, canvas.height);


}, function(elapsedMilis) {
	// simulation

	animateEntities(elapsedMilis, this.goundSprites);

}, function(context) {
	// draw
	context.fillStyle = "#425838";
	context.fillRect(0, 0, canvas.width, canvas.height);

	sortAndDraw(context, this.ground);
	sortAndDraw(context, this.trees);


	if (debug) {
		context.strokeStyle = "white";
		drawOutlines(context, this.trees, "white");

	}

}));



game.scenes.switchTo("loading");