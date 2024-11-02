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

  // check user email has already exits or not
if(users){
for(let i=0 ; i < users.length ; i++){
      if(users[i].email == email){
    alert("Email Already Exits")
    return
    }
}
}

// first check if user has exits so its add new email
// if its not exits it will add the email.
  if (users) {
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "./login.html";
  } else {
    localStorage.setItem("users", JSON.stringify([userData]));
    window.location.href = "./login.html";
  }
}


// login function ;

function login() {
  let inputEmail = document.getElementById("inputEmail").value;
  let inputPassword = document.getElementById("inputPassword").value;
  let allUsers = JSON.parse(localStorage.getItem("users"));

  // it will check email had matched or not
  let emailMatch = true;

  // in the allusers we have all users emails
  // if alluser exits so it will check all the email and compare it to the login email.
  
  if (allUsers) {
    for (let i = 0; i < allUsers.length; i++) {
      if (allUsers[i].email == inputEmail) {
        emailMatch = false;
        if (inputPassword == allUsers[i].password) {
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
