// var userName = prompt("Enter Your Name");
// var userAge = +prompt("Enter your age");

// function User(name, age) {
//   this.userName = name;
//   this.userAge = age;
//   this.id = new Date().getTime();
// }

// var user1 = new User(userName, userAge);
// console.log(user1);

// var user = {
//   name: "Atif",
//   age: 20,
//   course: "Full Stack Development",
//   cnic: 123456,
//   gender: "Male",
//   hobbies: ["Cricket", "Gym"],
// };
// // console.log(user);
// // For In Loop
// for (var key in user) {
//   console.log(user[key]);
// }

// user.age
// user['age']

// var user = {
//   name: "Atif",
//   age: 20,
//   course: "Full Stack Development",
//   cnic: 123456,
//   gender: "Male",
//   hobbies: ["Cricket", "Gym"],
// };

// // for (var key in user) {
// // //   if (user.hasOwnProperty("hobbies")) {
// // //     console.log("Found");
// // //   }
// // //   if (key === "hobbies") {
// // //     console.log("Found");
// // //   }
// // }

// console.log(user.hasOwnProperty('email'));

// var btn = document.getElementById("btn");

// function navigation() {
//   //   window.location.replace("https://www.facebook.com");
//   //   https://www.facebook.com/
//   window.location.href = "https://www.facebook.com";
// }

// btn.addEventListener("click", navigation);

// console.log(window.location.origin);

var btn = document.getElementById("btn");
function navigation() {
  window.location.href = "about/about.html";
}

btn.addEventListener("click", navigation);
