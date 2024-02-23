send = document.querySelector(".buttonclass");
send.addEventListener("click", submitclearfield);

function clearfield(){
    FeedbackForm.reset();
}

function submitclearfield(){
    alert("Thank you for submitting your feedback!");
    FeedbackForm.reset();
}