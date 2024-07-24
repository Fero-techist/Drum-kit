var NumberOfDrumClicked = document.querySelectorAll(".drum").length;

for (let i = 0; i < NumberOfDrumClicked; i++) {
  document
    .querySelectorAll(".drum")
    [i].addEventListener("click", function (param) {
      param.preventDefault();

      var buttonInnerHTML = this.innerHTML;

      DetectKeywithSound(buttonInnerHTML);
    });
}

// key Function

function DetectKeywithSound(key) {
  switch (key) {
    case "w":
      var ton1 = new Audio("sounds/tom-1.mp3");
      ton1.play(ton1);

      break;

    case "a":
      var ton2 = new Audio("sounds/tom-2.mp3");
      ton2.play();

      break;
    case "s":
      var ton3 = new Audio("sounds/tom-3.mp3");
      ton3.play();

      break;
    case "d":
      var ton4 = new Audio("sounds/tom-4.mp3");
      ton4.play();

      break;
    case "j":
      var ton5 = new Audio("sounds/snare.mp3");
      ton5.play();

      break;
    case "k":
      var bass = new Audio("sounds/kick-bass.mp3");
      bass.play();

      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();

      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}

// Calculator

function sub(num1, num2) {
  return num1 - num2;
}

function add(num1, num2) {
  return num1 + num2;
}
function div(num1, num2) {
  return num1 / num2;
}
function mul(num1, num2) {
  return num1 * num2;
}

function Calculator(num1, num2, operator) {
  return operator(num1, num2);
}
console.log(Calculator(3, 7, div));

// Objects

// constructor Function

function HouseKeeper(
  name,
  age,
  GoodHealthCondition,
  hasAfamily,
  Cleaningtools
) {
  this.name = name;
  this.age = age;
  this.GoodHealthCondition = GoodHealthCondition;
  this.hasAfamily = hasAfamily;
  this.Cleaningtools = Cleaningtools;
}

var housekeeper1 = new HouseKeeper("kein", 29, true, true, [
  "Broom",
  "cutlass",
]);

housekeeper1.clean();
console.log(housekeeper1);
