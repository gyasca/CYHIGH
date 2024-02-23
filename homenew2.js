function startquiz() {
    document.getElementById("question").innerHTML=myQuestions[qncount];
    document.getElementById("qnresponse").innerHTML=myQuestionsInput[qninputcount];
    qncount += 1
    qninputcount += 1
    document.getElementById("start").style.visibility="hidden";
    document.getElementById('submit').style.visibility="visible";
}

function updateqns() {
    document.getElementById("question").innerHTML=myQuestions[qncount];
    document.getElementById("qnresponse").innerHTML=myQuestionsInput[qninputcount];
    qncount += 1
    qninputcount += 1
}

