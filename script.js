const submitEmailButton = document.querySelector(".input-submit");
const submitEmail = document.querySelector(".email-submit");
const emailInputField = document.querySelector("#email-address");
const userMessage = document.querySelector(".user-message");
const warningIcon = document.querySelector(".warning");

// event listerner for submit button

submitEmailButton.addEventListener("click", function (e) {
  const emailText = emailInputField.value;
  console.log(emailText);
  e.preventDefault();

  //clear out the error message
  userMessage.innerText = "";

  // validate the email address
  let validEmail = inputValidator(emailText);

  //clear out input field if valid
  if ((validEmail = true)) {
    emailInputField.value = "";
  }
});

// event listener for submit form

// submitEmail.addEventListener("submit", function (e) {
//   const emailText = emailInputField.value;
//   console.log(emailText);
//   e.preventDefault();

//   //clear out the error message
//   userMessage.innerText = "";

//   // validate the email address
//   let validEmail = inputValidator(emailText);

//   //clear out input field if valid
//   if ((validEmail = true)) {
//     emailInputField.value = "";
//   }
// });

const inputValidator = function (emailText) {
  const acceptedEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // user message and warning icon for invalid email address
  if (!emailText.match(acceptedEmail)) {
    userMessage.innerText = "Please provide a valid email";
    warningIcon.style.display = "block";
  } else {
    userMessage.innerText = "Thank you for siging up!";
  }
};
