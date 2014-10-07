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

}, function(elapsedMilis) {
	for (var a = 0; a < this.testTreeSprites.length; a++) {
		this.testTreeSprites[a].move(elapsedMilis);
	}
	// simulation
}, function(context) {
	// draw
	context.fillStyle = "#425838";
	context.fillRect(0, 0, canvas.width, canvas.height);


	sortAndDraw(context, this.trees);


	if (debug) {
		context.strokeStyle = "white";
		drawOutlines(context, this.trees, "white");
		context.strokeRect(this.testTreeProperties.xRange[0], this.testTreeProperties.yRange[0], this.testTreeProperties.xRange[1], this.testTreeProperties.yRange[1]);
	}

}));



game.scenes.switchTo("loading");