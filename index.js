const signUpForm = document.querySelector(".sign-up-section__form");
const errorMsg = document.querySelector(".error-msg");
signUpForm.noValidate = true;
signUpForm.addEventListener("submit", (e) => {
    if (signUpForm.checkValidity()) {
      errorMsg.style.display = "none";
      
  } else {
      errorMsg.style.display = "initial";
    e.preventDefault();
  }
});
