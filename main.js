canvas=new fabric.Canvas('myCanvas');
playerx= 10;
playery= 10;
block_width= 30;
block_height= 30;

player_object="";
block_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(img){
        player_object=img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: playery,
            left: playerx
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(img){
        block_object=img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: playery,
            left: playerx
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keypressed= e.keyCode;
console.log(keypressed);

if (e.shiftKey==true && keypressed=='80'){
    console.log("shiftKey and p are pressed together");
    block_width=block_width+10;
    block_height=block_height+10;
    document.getElementById('current_width').innerHTML=block_width;
    document.getElementById('current_height').innerHTML=block_height;
}

if (e.shiftKey==true && keypressed=='77'){
    console.log("shiftKey and m are pressed together");
    block_width=block_width-10;
    block_height=block_height-10;
    document.getElementById('current_width').innerHTML=block_width;
    document.getElementById('current_height').innerHTML=block_height;
}
if (keypressed=='38'){
    up();
    console.log("up");
}

if (keypressed=='40'){
    down();
    console.log("down");
}

if (keypressed=='37'){
    left();
    console.log("left");
}

if (keypressed=='39'){
    right();
    console.log("right");
}

if (keypressed=='87'){
  new_image("wall.jpg");
    console.log("w");
}

if (keypressed=='71'){
    new_image("ground.png");
      console.log("g");
  }

  if (keypressed=='76'){
    new_image("light_green.png");
      console.log("l");
  }

  if (keypressed=='84'){
    new_image("trunk.jpg");
      console.log("t");
  }

  if (keypressed=='82'){
    new_image("roof.jpg");
      console.log("r");
  }

  if (keypressed=='89'){
    new_image("yellow_wall.png");
      console.log("y");
  }

  if (keypressed=='68'){
    new_image("dark_green.png");
      console.log("d");
  }

  if (keypressed=='85'){
    new_image("unique.png");
      console.log("u");
  }

  if (keypressed=='67'){
    new_image("cloud.jpg");
      console.log("c");
  }
}

function up(){
if (playery>=0){
  playery=playery - block_height;
  canvas.remove(player_object);
  player_update();
  console.log("block height ="+ block_height);
  console.log("x position ="+ playerx + "y position ="+ playery);
}
}

function down(){
  if (playery<=500){
    playery=playery + block_height;
    canvas.remove(player_object);
    player_update();
    console.log("block height ="+ block_height);
    console.log("x position ="+ playerx + "y position ="+ playery);
  }
  }

  function right(){
    if (playerx<=900){
      playerx=playerx + block_width;
      canvas.remove(player_object);
      player_update();
      console.log("block width ="+ block_width);
      console.log("x position ="+ playerx + "y position ="+ playery);
    }
    }

    function left(){
      if (playerx>=0){
        playerx=playerx - block_width;
        canvas.remove(player_object);
        player_update();
        console.log("block width ="+ block_width);
        console.log("x position ="+ playerx + "y position ="+ playery);
      }
      }