var x = 80     //40px by 40px
var y = 80
//var c = document.getElementById("myCanvas");
//var ctx = c.getContext("2d");
var xblock = []
var yblock = []      //ctx.strokeStyle = "red";
var typeblock = []       //penState = "down"
var howMblock = 0
var xc = 0
var yc = 0
var blockOn = 1
var hotbar = ["dirt", "grass", "stone", "wood", "leaves", "", "", "", ""]

//go() it abdeit a screan


function block(xb, yb, tb) {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var color = "black";

  if (tb === "stone") {
    renderStone(ctx, xb, yb);
    return;
    color = "grey";
  }

  if (tb === "dirt") {
    color = "dark brown";
  }

  if (tb === "") {
    color = "red";
  }

  if (tb === "wood") {
    color = "#442f26ff";//"coral";
  }

  if (tb === "grass") {
    color = "olive";
  }

  if (tb === "leaves") {
    color = "green";
  }


  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.moveTo(x + xb - 19, y + yb - 19);
  ctx.lineTo(x + xb - 19, y + yb + 19);
  ctx.lineTo(xb + x + 19, y + yb + 19);
  ctx.lineTo(xb + x + 19, y + yb - 19);
  ctx.lineTo(xb + x - 19, y + yb - 19);
  ctx.lineTo(x + xb - 19, y + yb + 19);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x + xb - 1, y + yb - 1);
  ctx.lineTo(x + xb - 1, y + yb + 1);
  ctx.lineTo(x + xb + 1, y + yb + 1);
  ctx.lineTo(x + xb + 1, y + yb - 1);
  ctx.stroke();

}

function cros() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");






  ctx.beginPath();
  ctx.strokeStyle = "gold";
  ctx.lineWidth = 2;
  ctx.moveTo(x + xc - 20, y + yc - 20);
  ctx.lineTo(x + xc - 20, y + yc + 20);
  ctx.lineTo(xc + x + 20, y + yc + 20);
  ctx.lineTo(xc + x + 20, y + yc - 20);
  ctx.lineTo(xc + x - 20, y + yc - 20);
  ctx.lineTo(x + xc - 20, y + yc + 20);


  ctx.stroke();

}






function go() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  ctx.reset()
  howMblock = xblock.length
  console.log("how many blocks" + howMblock)

  for (let i = 0; i < howMblock; i++) {
    block(xblock[i], yblock[i], typeblock[i])
    console.log(typeblock[i])
  }

  cros(xc, yc)
}

function p() {

  let found = false;
  howMblock = xblock.length
  for (let i = 0; i < howMblock; i++) {
    if (xblock[i] === xc && yblock[i] === yc) {
      found = true;
    }
  }

  if (!found) {

    var blockTipe = ""
    var blockFound = false;

    xblock.push(xc);
    yblock.push(yc);
    typeblock.push(hotbar[blockOn - 1]);



  }
  go()
  //console.log("how many blocks" + xblock.length)
}



function del() {

  howMblock = xblock.length

  for (let i = 0; i < howMblock; i++) {
    if (xblock[i] === xc && yblock[i] === yc) {
      xblock.splice(i, 1);
      yblock.splice(i, 1);
      typeblock.splice(i, 1);
    }
  }
  go();
}


function bl() {
  blockOn = blockOn - 1

  if (blockOn < 1) {
    blockOn = 9
  }
  console.log(blockOn)

  console.log(hotbar[blockOn - 1])


}

//blockOn

function br() {
  blockOn = blockOn + 1

  if (blockOn > 9) {
    blockOn = 1
  }
  console.log(blockOn)

  console.log(hotbar[blockOn - 1])
}









function goleft() {
  x = x - 10
  console.log("x = ", x, "y = ", y)
  go()
  abdeit()
}

function goright() {
  x = x + 10
  console.log("x = ", x, "y = ", y)
  go()
  abdeit()
}

function goup() {
  y = y - 10
  console.log("x = ", x, "y = ", y)
  go()
  abdeit()
}

function godown() {
  y = y + 10
  console.log("x = ", x, "y = ", y)
  go()
  abdeit()
}

function lc() {
  xc = xc - 40
  console.log("xc = ", xc, "yc = ", yc)
  go()
  abdeit()
}

function rc() {
  xc = xc + 40
  console.log("x = ", xc, "y = ", yc)
  go()
  abdeit()
}

function uc() {
  yc = yc - 40
  console.log("x = ", xc, "y = ", yc)
  go()
  abdeit()
}

function dc() {
  yc = yc + 40
  console.log("x = ", xc, "y = ", yc)
  go()
  abdeit()
}


function abdeit() {
}




window.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowUp":
      uc();
      console.log("Up");
      break;
    case "ArrowDown":
      dc();
      console.log("Down");
      break;
    case "ArrowLeft":
      lc();
      console.log("Left");
      break;
    case "ArrowRight":
      rc();
      console.log("Right");
      break;

    case "w":
    case "W":
      goup();
      console.log("W");
      break;
    case "s":
    case "S":
      godown();
      console.log("S");
      break;
    case "a":
    case "A":
      goleft();
      console.log("A");
      break;
    case "d":
    case "D":
      goright();
      console.log("D");
      break;

    case "r":
    case "R":
      p();
      console.log("R");
      break;

    case "f":
    case "F":
      del();
      console.log("F");
      break;


    case "1":
      blockOn = 1
      console.log(blockOn)
      break;

    case "2":
      blockOn = 2
      console.log(blockOn)
      break;

    case "3":
      blockOn = 3
      console.log(blockOn)
      break;

    case "4":
      blockOn = 4
      console.log(blockOn)
      break;

    case "5":
      blockOn = 5
      console.log(blockOn)
      break;


    case "6":
      blockOn = 6
      console.log(blockOn)
      break;

    case "7":
      blockOn = 7
      console.log(blockOn)
      break;

    case "8":
      blockOn = 8
      console.log(blockOn)
      break;


    case "9":
      blockOn = 9
      console.log(blockOn)
      break;



  }

  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "w", "a", "s", "d", "W", "A", "S", "D"].includes(event.key)) {
    event.preventDefault();
  }
});
