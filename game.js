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
var heat = 0;
var moisture = 0;


/*
 * Pick a random index from an array, returns a number
 */
function randomPick(array) {
	return Math.floor(Math.random() * array.length);
}

function filterByClimate(array, heat, moisture) {
	var filteredArray = [];
	for (var i = 0; i < array.length; i++) {
		if (inArray(array[i].heat, heat)) {
			if (inArray(array[i].moisture, moisture)) {
				filteredArray.push(array[i]);
			}
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
	var filteredSprites = filterByClimate(sprites, heat, moisture);
	for (var w = x; w < width; w += filteredSprites[0].width) {
		for (var h = y; h < height; h += filteredSprites[0].height) {
			var thisSprite = filteredSprites[randomPick(filteredSprites)];
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
	for (var i = 0; i < quantity; i++) {
		var thisSprite = sprites[randomPick(sprites)];
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
	alert(haystack.length);
	for (var i = 0; i < haystack.length; i++) {
		return (haystack[i] === needle);
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
		sprite: game.animations.get("bush-large-1"),
		heat: [2, 3],
		moisture: [1, 2]
	}, {
		sprite: game.animations.get("bush-med-1"),
		heat: [2, 3],
		moisture: [1, 2]
	}, {
		sprite: game.animations.get("bush-small-1"),
		heat: [2, 3],
		moisture: [1, 2]
	}, {
		sprite: game.animations.get("bush-small-2"),
		heat: [2, 3],
		moisture: [1, 2]
	}, {
		sprite: game.animations.get("tree-dead-1"),
		heat: [2, 3],
		moisture: [1, 2]
	}, {
		sprite: game.animations.get("tree-dead-2"),
		heat: [2, 3],
		moisture: [1, 2]
	}, {
		sprite: game.animations.get("tree-oak-large-bare"),
		heat: [2, 3],
		moisture: [1, 2]
	}, {
		sprite: game.animations.get("tree-oak-large"),
		heat: [2, 3],
		moisture: [1, 2]
	}, {
		sprite: game.animations.get("tree-pine-med"),
		heat: [1],
		moisture: [0, 1, 2]
	}, {
		sprite: game.animations.get("tree-pine-small"),
		heat: [1],
		moisture: [0, 1, 2]
	}, {
		sprite: game.animations.get("tree-redwood-large"),
		heat: [2],
		moisture: [2]
	}, {
		sprite: game.animations.get("tree-redwood-med-bare"),
		heat: [2],
		moisture: [2]
	}, {
		sprite: game.animations.get("tree-redwood-med"),
		heat: [2],
		moisture: [2]
	}, {
		sprite: game.animations.get("tree-redwood-large-bare"),
		heat: [0, 1, 2, 3],
		moisture: [0, 2]
	}];
	//moisture 0-2
	//heat 0-3

	// sprite array, x, y, width, height, quantity
	this.trees = createPlants(this.testTreeSprites, 0, 0, 640, 640, 35);

	this.goundSprites = [
		game.animations.get("bg-1")
		//game.animations.get("bg-6")
	];

	// sprite array, x, y, width, height
	this.ground = tileArea(this.goundSprites, 0, 0, canvas.width, canvas.height);


}, function(elapsedMilis) {
	// simulation
	// this.testTreeSprites[8].move(elapsedMilis);
	// animateEntities(elapsedMilis, this.testTreeSprites);
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
		context.strokeRect(this.testTreeProperties.xRange[0], this.testTreeProperties.yRange[0], this.testTreeProperties.xRange[1], this.testTreeProperties.yRange[1]);
	}

}));



game.scenes.switchTo("loading");