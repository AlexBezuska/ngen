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
			"frames": 1,
			"msPerFrame": 400
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
var debug = false;

function randompick(array) {
	return Math.floor(Math.random() * array.length);
}

function randomBetween(min, max) {
	return Math.floor(Math.random() * max) + min;
}


/*
 * uses sprite property object to tile an area randomly
 * using the given sprite array
 */
function tileArea(properties) {
	var array = [];
	// var tileWidth = properties.sprites[0].width;
	// var tileHeight= properties.sprites[0].height;
	// var tilesWide = properties.xRange[1] / tileWidth;
	// var tilesTall = properties.yRange[1] / tileHeight;
	// //create column
	// for (var i = 0; i < tilesTall; i++) {
	// 	var thisSprite = properties.sprites[randompick(properties.sprites)];
	// 	var tileYOrigin = properties.yRange[0] + (tileHeight * (i+ 1));

	// 	array.push(new Splat.AnimatedEntity(positionX, positionY, thisSprite.width, thisSprite.height, thisSprite, 0, 0));
	// }



	for (var w = 0; w < canvas.width; w += properties.sprites[0].width) {
		for (var h = 0; h < canvas.height; h += properties.sprites[0].height) {
			var thisSprite = properties.sprites[randompick(properties.sprites)];
			array.push(new Splat.AnimatedEntity(w, h, thisSprite.width, thisSprite.height, thisSprite, 0, 0));
		}
	}

	return array;
}

/*
 * adds plant entityies to the array,
 * use properties object to define plant characteristics
 */
function createPlants(properties, quantity) {
	var array = [];
	for (var i = 0; i < quantity; i++) {
		var thisSprite = properties.sprites[randompick(properties.sprites)];

		var positionX = randomBetween(properties.xRange[0] - (thisSprite.width / 2), properties.xRange[1] + (thisSprite.width / 2));
		var positionY = randomBetween(properties.yRange[0] - thisSprite.height, properties.yRange[1]);

		array.push(new Splat.AnimatedEntity(positionX, positionY, thisSprite.width, thisSprite.height, thisSprite, 0, 0));
	}

	return array;
}

var game = new Splat.Game(canvas, manifest);

function centerText(context, text, offsetX, offsetY) {
	var w = context.measureText(text).width;
	var x = offsetX + (canvas.width / 2) - (w / 2) | 0;
	var y = offsetY | 0;
	context.fillText(text, x, y);
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

	this.testTreeSprites = [
		game.animations.get("bush-large-1"),
		game.animations.get("bush-med-1"),
		game.animations.get("bush-small-1"),
		game.animations.get("bush-small-2"),
		game.animations.get("tree-dead-1"),
		game.animations.get("tree-dead-2"),
		game.animations.get("tree-oak-large-bare"),
		game.animations.get("tree-oak-large"),
		game.animations.get("tree-pine-med"),
		game.animations.get("tree-pine-small"),
		game.animations.get("tree-redwood-large"),
		game.animations.get("tree-redwood-med-bare"),
		game.animations.get("tree-redwood-med"),
		game.animations.get("tree-redwood-large-bare")
	];

	this.testTreeProperties = {
		sprites: this.testTreeSprites,
		xRange: [0, 640],
		yRange: [0, 640]
	};

	this.trees = createPlants(this.testTreeProperties, 65);


	this.goundSprites = [
		game.animations.get("bg-1"),
		game.animations.get("bg-2"),
		game.animations.get("bg-3"),
		game.animations.get("bg-4"),
		game.animations.get("bg-5"),
		game.animations.get("bg-6"),
		game.animations.get("bg-7"),
		game.animations.get("bg-8"),
		game.animations.get("bg-9"),
		game.animations.get("bg-10"),
		game.animations.get("bg-11"),
		game.animations.get("bg-12"),
		game.animations.get("bg-13"),
		game.animations.get("bg-14"),
		game.animations.get("bg-15"),
		game.animations.get("bg-16"),
		game.animations.get("bg-17"),
	];

	this.groundArea = {
		sprites: this.goundSprites,
		xRange: [0, 640],
		yRange: [0, 640]
	};

	this.ground = tileArea(this.groundArea);

}, function(elapsedMilis) {
	for (var a = 0; a < this.testTreeSprites.length; a++) {
		this.testTreeSprites[a].move(elapsedMilis);
	}
	// simulation
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