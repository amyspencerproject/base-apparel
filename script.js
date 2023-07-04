const submitEmail = document.querySelector(".input-submit");
const emailInputField = document.querySelector("#email-address");
const errorMessage = document.querySelector(".error-message");

// event listerner for submit button

submitEmail.addEventListener("click", function (e) {
  const emailText = emailInputField.value;
  console.log(emailText);
  e.preventDefault();
  console.log("Enter on button registered as an event!");

  //clear out the error message
  errorMessage.innerText = "";

  // validate the email address
  let validEmail = inputValidator(emailText);
  //   console.log(validEmail);

  //clear out input field if valid
  if ((validEmail = true)) {
    emailInputField.value = "";
  }
});

const inputValidator = function (emailText) {
  const acceptedEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // error message for invalid email address w/ JSX
  if (!emailText.match(acceptedEmail)) {
    errorMessage.innerText = "Please provide a valid email";
  }
};

//store email address in local.storage?
