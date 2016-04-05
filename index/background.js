// Copyright 2016 Jakub Kukiełka

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var renderer = PIXI.autoDetectRenderer($(window).width(), $(window).height());
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();

var sprites = new PIXI.ParticleContainer(90, {
    position: true,
    rotation: true,
    uvs: true,
    alpha: true
});
stage.addChild(sprites);

window.onresize = function (event) {
    var w = window.innerWidth;
    var h = window.innerHeight;    //this part resizes the canvas but keeps ratio the same
    renderer.view.style.width = w + "px";
    renderer.view.style.height = h + "px";    //this part adjusts the ratio:
    renderer.resize(w,h);
}

// create an array to store all the sprites
var ships = [];

var totalSprites = renderer instanceof PIXI.WebGLRenderer ? 90 : 90;

var imageIndex = rand(1, 26);
var fixedDirection = Math.PI / rand(1, 4);

for (var i = 0; i < totalSprites; i++)
{
    // create a new Sprite
    var entity = PIXI.Sprite.fromImage('/index/all/' + imageIndex + '.png');

       entity.anchor.set(0.5);

       // different ships, different sizes
       entity.scale.set(1);

       // scatter them all
       entity.x = Math.random() * renderer.width;
       entity.y = Math.random() * renderer.height;

       // create a random direction in radians
       entity.direction = fixedDirection;

       // this number will be used to modify the direction of the sprite over time
       entity.turningSpeed = Math.random() - 0.8;

       // create a random speed between 0 - 2, and these ships are slooww
       entity.speed = (2 + Math.random() * 2) * 0.2;

       //    entity.offset = Math.random() * 100;
    // finally we push the entity into the ships array so it it can be easily accessed later
    ships.push(entity);

    sprites.addChild(entity);
    entity = null;
}

// create a bounding box box for the little ships
 var entityBoundsPadding = 100;
   var entityBounds = new PIXI.Rectangle(-entityBoundsPadding,
   -entityBoundsPadding,
   renderer.width + entityBoundsPadding * 2,
   renderer.height + entityBoundsPadding * 2); 

var tick = 0;

requestAnimationFrame(animate);

function animate() {

    // iterate through the sprites and update their position
    for (var i = 0; i < ships.length; i++)
    {
        var entity = ships[i];
        entity.position.x += Math.sin(entity.direction) * (entity.speed * entity.scale.y) * 3;
        entity.position.y += Math.cos(entity.direction) * (entity.speed * entity.scale.y) * 3;
        entity.rotation = -entity.direction + Math.PI;

        // wrap the ships
        if (entity.position.x < entityBounds.x)
        {
            entity.position.x += entityBounds.width;
        }
        else if (entity.position.x > entityBounds.x + entityBounds.width)
        {
            entity.position.x -= entityBounds.width;
        }

        if (entity.position.y < entityBounds.y)
        {
            entity.position.y += entityBounds.height;
        }
        else if (entity.position.y > entityBounds.y + entityBounds.height)
        {
            entity.position.y -= entityBounds.height;
        }
    }

    // increment the ticker
    tick += 0.1;

    // time to render the stage !
    renderer.render(stage);

    // request another animation frame...
    requestAnimationFrame(animate);
}
