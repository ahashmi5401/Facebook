let loginBtn = document.getElementById("logIn");

function login() {
  // Get users from localStorage or an empty array
  let usersArr = JSON.parse(localStorage.getItem("usersData")) || [];

  // Get login input values
  let enteredEmail = document.getElementById("loginEmail").value;
  let enteredPass = document.getElementById("loginPass").value;

  console.log("Stored users:", usersArr);
  console.log(`Email entered: ${enteredEmail}`);
  console.log(`Password entered: ${enteredPass}`);

  let foundUser = false;

  for (let i = 0; i < usersArr.length; i++) {
    let user = usersArr[i];

    if (user.contact === enteredEmail && user.password === enteredPass) {
      alert("Login confirmed!");
      foundUser = true;
      console.log("User found:", user);
      break;
    } else if (user.contact === enteredEmail && user.password !== enteredPass) {
      alert("Incorrect password");
      foundUser = true;
      break;
    }
  }

  if (!foundUser) {
    alert("User not registered");
    window.location = "reg.html";
  }
}


