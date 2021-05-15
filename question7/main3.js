let circle = document.getElementById("circle");
let blackBox = document.getElementById("blackbox");
let redBox = document.getElementById("redbox");
let spec = document.getElementById("spec");
let another = document.getElementById("another");
document.addEventListener("mousemove", coordinatorAndMover, true);
blackBox.addEventListener("mousemove", colorChanger, false);
redBox.addEventListener("mousemove", colorChanger1, false);

function coordinatorAndMover(event) {
  let x = event.clientX;
  let y = event.clientY;

  spec.innerText = `mouse : ${x} , ${y} \n circle: ${x + 20} , ${
    y + 20
  } \n black circle (red circle): .........`;
  circle.style.left = x + 20 + "px";
  circle.style.top = y + 20 + "px";
  circle.style.backgroundColor = "blue";
}

function colorChanger(event) {
  let x = event.clientX;
  let y = event.clientY;
  circle.style.left = x + 20 + "px";
  circle.style.top = y + 20 + "px";
  circle.style.backgroundColor = "red";
  let boxTop = blackBox.getBoundingClientRect().top;
  let boxleft = blackbox.getBoundingClientRect().left;
  spec.innerText = `mouse : ... \n circle ... \n black circle (red circle): ${
    x - boxleft + 20
  } , ${y - boxTop + 20}`;
}
function colorChanger1(event) {
  let x = event.clientX;
  let y = event.clientY;
  circle.style.left = x + 20 + "px";
  circle.style.top = y + 20 + "px";
  circle.style.backgroundColor = "black";
  let redBoxTop = redBox.getBoundingClientRect().top;
  let redBoxleft = redBox.getBoundingClientRect().left;
  console.log(redBoxleft , redBoxTop);
  spec.innerText = `mouse : ... \n circle ... \n black circle (red circle): ${
    (x - redBoxleft) + 20
  } , ${(y - redBoxTop) + 20}`;
}
