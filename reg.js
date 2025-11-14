let signUp = document.getElementById("signUpBtn");

signUp.addEventListener("click", function (event) {
  event.preventDefault(); // prevent form submission

  // Get input values
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const password = document.getElementById("password").value.trim();
  const birthMonth = document.getElementById("birthMonth").value;
  const birthDate = document.getElementById("birthDay").value;
  const birthYear = document.getElementById("birthYear").value;
  const genderInputs = document.getElementsByName("gender");

  // Email pattern validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Determine selected gender
  let selectedGender = "";
  for (let i = 0; i < genderInputs.length; i++) {
    if (genderInputs[i].checked) {
      selectedGender = genderInputs[i].value;
      break;
    }
  }

  // Basic validation checks
  if (!firstName || !lastName || !contact || !password) {
    alert("Please fill in all required fields.");
    return;
  }

  if (!emailPattern.test(contact)) {
    alert("Please enter a valid email address (e.g., example@gmail.com).");
    return;
  }

  if (!selectedGender) {
    alert("Please select your gender.");
    return;
  }

  // Build user object
  const userData = {
    firstName,
    lastName,
    contact,
    password,
    gender: selectedGender,
    birthMonth,
    birthDate,
    birthYear,
  };

  // Get existing users
  let usersArr = JSON.parse(localStorage.getItem("usersData")) || [];

  // Check for duplicate contact/email
  const duplicateUser = usersArr.find((user) => user.contact === contact);
  if (duplicateUser) {
    alert("This email is already registered! Redirecting to login...");
    setTimeout(() => {
      window.location = "login.html";
    }, 1000);
    return;
  }

  // Add new user
  usersArr.push(userData);

  // Save users back to localStorage
  localStorage.setItem("usersData", JSON.stringify(usersArr));

  console.log("Saved users:", usersArr);
  alert("Registration successful! Redirecting to login page...");
  window.location = "login.html";
});
