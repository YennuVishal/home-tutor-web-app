let signupbut = document.getElementById("sign-up but");
if(signupbut){ 
signupbut.addEventListener("click", function(){
    event.preventDefault();
    let username = document.getElementById("name").value;
    let email = document.getElementById("Email").value;
    let password = document.getElementById("pass").value;
    let confirmpassword = document.getElementById("confirm").value;

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("confirmpassword", confirmpassword);
    localStorage.removeItem("role");
    alert("Signup Successful");

    window.location.href = "login.html";

});
}
let loginBtn = document.getElementById("login-btn");
if(loginBtn){

loginBtn.addEventListener("click", function(){

    let loginName = document.getElementById("name").value;

    let loginPass = document.getElementById("Pass").value;

    let savedUsername = localStorage.getItem("username");

    let savedEmail = localStorage.getItem("email");

    let savedPassword = localStorage.getItem("password");


    if(
        (loginName === savedUsername || loginName === savedEmail)
        &&
        loginPass === savedPassword
    ){

        alert("Login Successful");
        //
   let savedrole = localStorage.getItem("role");

            console.log(savedrole);



            if(savedrole == "student"){

                window.location.href = "student.html";

            }

            else if(savedrole == "tutor"){

                window.location.href = "tutor.html";

            }

            else{

                window.location.href = "role.html";

            }

        }

        else{

            alert("Invalid Username or Password");

        }

    });

}