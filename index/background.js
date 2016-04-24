function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// because I'm lazy
function cout(t) {
    console.log(t);
}

var renderer = PIXI.autoDetectRenderer($(window).width(), $(window).height());
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();

var graphics = new PIXI.Graphics();

var arr = [];

function generateGrid(w, h) {
    for(var y = 0; y < h; y++) {
	arr.push(new Array());
    }
    for(var y = 0; y < h; y++) {
	for(var x = 0; x < w; x++) {
	    var tmpx = 100 * x;
	    graphics.beginFill(255);
	    var a = graphics.drawRect(40 * x, 40 * y, 30, 30);
	    arr[x].push(a);
        }
    }
}

function chColor(obj, color) {
    var x = obj.x;
    var y = obj.y;
    //obj.destroy();
    graphics.beginFill(color);
    graphics.drawRect(x, y, 30, 30);
}

cout(arr);

generateGrid(100, 100);

chColor(arr[10][10], 0x00FF00);

// end the fill
graphics.endFill();
 
// add it the stage so we see it on our screens..
stage.addChild(graphics);

renderer.render(stage);
