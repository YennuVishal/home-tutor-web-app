
let studentbtn = document.getElementById("student-btn");
studentbtn.addEventListener("click", function(){
    localStorage.setItem("role", "student");
    window.location.href="student.html";
});

let tutorbtn = document.getElementById("tutor-btn");
tutorbtn.addEventListener("click", function(){
    localStorage.setItem("role", "tutor");
    window.location.href="tutor.html";
});

