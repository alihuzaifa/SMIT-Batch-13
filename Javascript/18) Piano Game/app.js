// var music1 = new Audio();
// music1.src = "music/music-1.mp3";

// var music2 = new Audio();
// music2.src = "music/music-2.mp3";

// var music3 = new Audio();
// music3.src = "music/music-3.mp3";

// var music4 = new Audio();
// music4.src = "music/music-4.mp3";

// function Audio1() {
//   music2.pause();
//   music3.pause();
//   music4.pause();
//   music1.play();
// }
// function Audio2() {
//   music2.play();
// }
// function Audio3() {
//   music3.play();
// }
// function Audio4() {
//   music4.play();
// }

// var container = document.getElementById("box");
// // container.style.backgroundColor = "black";

// container.style.display = "block";
// container.className = "box2"

var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
var email = "test@gmail.";

if (emailRegex.test(email)) {
  console.log("Valid");
} else {
  console.error("Invalid");
}
