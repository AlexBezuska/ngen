"use strict";

var Splat = require("splatjs");
var canvas = document.getElementById("canvas");

var manifest = {
	"images": {

	},
	"sounds": {},
	"fonts": {},
	"animations": {
		"tree-sprite-1": {
			"strip": "img/tree-sprite-1.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"tree-sprite-2": {
			"strip": "img/tree-sprite-2.png",
			"frames": 1,
			"msPerFrame": 400
		},
		"tree-sprite-3": {
			"strip": "img/tree-sprite-3.png",
			"frames": 1,
			"msPerFrame": 400
		},
	}
};
var debug = true;

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
		console.log(thisSprite);
		array.push(new Splat.AnimatedEntity(positionX, positionY, thisSprite.width, thisSprite.height, thisSprite, 0, 0));
	}
	console.log(array);
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
	return entities.sort(function(a, b) {
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
		game.animations.get("tree-sprite-2"),
		game.animations.get("tree-sprite-3")
	];

	this.testTreeProperties = {
		sprites: this.testTreeSprites,
		xRange: [200, 250],
		yRange: [200, 250]
	};

	this.trees = createPlants(this.testTreeProperties, 14);

}, function(elapsedMilis) {
	for (var a = 0; a < this.testTreeSprites.length; a++) {
		this.testTreeSprites[a].move(elapsedMilis);
	}
	// simulation
}, function(context) {
	// draw
	context.fillStyle = "black";
	context.fillRect(0, 0, canvas.width, canvas.height);

	context.fillStyle = "#fff";
	context.font = "25px helvetica";
	centerText(context, "main", 0, 20);

	sortAndDraw(context, this.trees);

	drawOutlines(context, this.trees, "white");

	if (debug) {
		context.strokeStyle = "white";
		context.strokeRect(this.testTreeProperties.xRange[0], this.testTreeProperties.yRange[0], this.testTreeProperties.xRange[1], this.testTreeProperties.yRange[1]);
	}

}));



game.scenes.switchTo("loading");