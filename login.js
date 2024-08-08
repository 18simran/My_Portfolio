const popupContainer = document.querySelector(".m");
const SignupForm = document.querySelector(".sign-form");
const LoginForm = document.querySelector(".login-form");

function openPopup() {
  setTimeout(() => {
    SignupForm.style.display = "none";
    popupContainer.classList.add("popup");
  }, 30);
}
document.addEventListener("DOMContentLoaded", openPopup);
const signBtn = document.querySelector("#sign-btn");
const signup = document.querySelector(".s");
signBtn.addEventListener("click", function (e) {
  e.preventDefault();
  setTimeout(() => {
    LoginForm.style.display = "none";
    SignupForm.style.display = "block";
    popupContainer.classList.remove("popup");
    signup.classList.add("signup");
  }, 30);
});
const logBtn = document.querySelector("#log-btn");
logBtn.addEventListener("click", function () {
  LoginForm.style.display = "block";
  signup.classList.remove("signup");
  openPopup();
});
