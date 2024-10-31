function signup() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let userData = {
    name: name,
    email: email,
    password: password,
  };

  // localStorage.setItem("users" , JSON.stringify(userData))

  let users = JSON.parse(localStorage.getItem("users"));

  if (users) {
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "./login.html";
  } else {
    localStorage.setItem("users", JSON.stringify([userData]));
    window.location.href = "./login.html";
  }
}

function login() {
  let inputEmail = document.getElementById("inputEmail").value;
  let inputPassword = document.getElementById("inputPassword").value;
  let allUsers = JSON.parse(localStorage.getItem("users"));

  let emailMatch = true;
  if (allUsers) {
    for (let i = 0; i < allUsers.length; i++) {
      if (allUsers[0].email == inputEmail) {
        emailMatch = false;
        if (inputPassword == allUsers[0].password) {
          window.location.href = "./about.html";
        } else {
          alert("Invalid Password");
        }
        break;
      }
    }
    if (emailMatch) {
      alert("Email did not match!");
    }
  } else {
    alert("Please Register first");
  }

  // for single email only  ////

  //    let userData =  JSON.parse(localStorage.getItem("users"));

  //     if(userData){
  //         if(inputEmail == userData.email){
  //             if(inputPassword == userData.password){
  //                 // alert("Success")
  //                 window.location.href = "./about.html"
  //             }else{
  //                 alert("Invalid Password")
  //             }
  //         }else{
  //             alert("Invalid Email")
  //         }
  //     }else{
  //         alert("Please Register User First")
  //     }
}
