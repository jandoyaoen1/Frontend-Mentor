const emailSubmit = document.querySelector("#emailSubmit");
const main = document.querySelector("main");
const article = document.querySelector("article");
const email = document.querySelector("#email");
const errorMessage = document.querySelector(".errorMessage");
let sentEmail = document.querySelector("#sentEmail");
const dismissBtn = document.querySelector("#dismissMessage");
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailForm = document.getElementById("emailForm");

function displayHandler() {
  main.style.display = "none";
  article.style.display = "flex";
  sentEmail.textContent = email.value;
}

function emailSetter() {
  let emailValue = email.value;
  displayer(emailValue);
}

function submit() {
  emailSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    displayHandler();
  });
}

function displayer(email) {
  console.log(regex.test(email));
  if (regex.test(email)) {
    emailSubmit.disabled = false;
    emailSubmit.style.cursor = "pointer";
    errorMessage.style.display = "none";
    submit();
  } else {
    errorMessage.style.display = "block";
    emailSubmit.style.cursor = "not-allowed";
    emailSubmit.disabled = true;
  }
}

function returnHome() {
  email.value = "";
  main.style.display = "flex";
  article.style.display = "none";
  errorMessage.style.display = "none";
}

email.addEventListener("focusout", emailSetter);
dismissBtn.addEventListener("click", returnHome);

