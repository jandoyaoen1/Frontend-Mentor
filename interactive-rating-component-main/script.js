// add the following classes
// .option
// .userRating
// .btn
// .userThankYou
// .userInput

const buttons = document.querySelectorAll(".option");
const submit = document.querySelector(".btn");
const userRating = document.querySelector(".userRating");
const userThankYou = document.querySelector(".userThankYou");
const userInput = document.querySelector(".userInput");
const blurp = document.querySelector(".blurp");
const thankYouParagraph = document.querySelector(".thankYouParagraph");
const thankYouMessage = document.querySelector(".thankYouMessage");
const link = document.createElement("a");
const linkText = document.createTextNode("redo the survey");
link.appendChild(linkText);
link.href = "index.html";
let value = 0;

function switchDisplay() {
    userRating.style.display = "none";
    userThankYou.style.display ="block";
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        buttons.forEach((button) => button.classList.remove("optionChange"));
        e.target.classList.add("optionChange");
        // console.log(e.target.textContent);
        value = e.target.textContent;
        console.log(value);
    })
})

submit.addEventListener("click", () => {
    if(value) {
        userInput.textContent = value;
        switchDisplay();
        
    } else {
        console.log("no value");
        blurp.textContent = "OOOPS!";
        thankYouParagraph.textContent = "You seem to have forgotten to rate us. Click the link above to redo our survey.";
        thankYouMessage.innerHTML = "";
        thankYouMessage.appendChild(link);
        switchDisplay();

    }
})