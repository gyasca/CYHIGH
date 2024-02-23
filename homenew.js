/* Steps for quiz
1. If user press start button, call a function to show the new question ( from the qn array ) AND hide the proceed button and reveal a submit(required) button.
Show the radio options (Placed under a questionResponse div) for the question.
3. When user press the radio button and submit, then the submit button calls for function which add to a global bike score counter if user press yes/no YES: add NO: dont add, then outside of the if
else statement is the the function replacing the question with the next question from the array. 
3. the previous radios under the questionResponse div are to be ovewritten with new options radios. */

var myQuestions = ["Do you prefer cycling longer distances?",        /*1. Yes: Add roadbike and fldbike No: add mtnbike. 2. Yes: Add rdbike, No: Add mtnbike--- 3. 3-8: kidbike += 10, 8-15: fldbike += 10, 55+: rdbike - 1 mtnbike +1  4. Yes: fldbike +1, rdbike +1*/
"Do you prefer efficiency over comfort?", "Do you cycle to work often?",
"Are you above 60?"
];
var qncount = 0;

var rdbike = 0; var mtnbike = 0; var kidbike = 0; var fldbike = 0//if mtn and rd is equal then hybrid or roadbike.

var myQuestionsInput = ["<label for='respy'><input type='radio' id='respy' name='resp'> Yes</label><br><label for='respn'><input type='radio' id='respn' name='resp'> No</label>", 
"<label for='respy2'><input type='radio' id='respy2' name='resp'> Yes</label><br><label for='respn2'><input type='radio' id='respn2' name='resp'> No</label>",
"<label for='respy3'><input type='radio' id='respy3' name='resp'> Yes</label><br><label for='respn3'><input type='radio' id='respn3' name='resp'> No</label>",
"<label for='respy4'><input type='radio' id='respy4' name='resp'> Yes</label><br><label for='respn4'><input type='radio' id='respn4' name='resp'> No</label>"];

/* qn 3 code <label for='young'><input type='radio' id='young' name='age'> 3-8 years</label>
    <br><label for='tween'><input type='radio' id='tween' name='age'> 8-15</label>
    <br><label for='adult'><input type='radio' id='adult' name='age'> 16-55</label>
    <br><label for='old'><input type='radio' id='old' name='age'> 55+</label>*/

var qninputcount = 0;

function startquiz() {
    document.getElementById("question").innerHTML=myQuestions[qncount];
    document.getElementById("qnresponse").innerHTML=myQuestionsInput[qninputcount];
    qncount += 1
    qninputcount += 1
    document.getElementById("start").style.visibility="hidden";
    document.getElementById('submit').style.visibility="visible";
}

function getans() {
    for (item in myQuestions) {
        if (item+1 == 1) {
            var respy = document.getElementById("respy");
            var respn = document.getElementById("respn");
            if (respy.checked = true) {
                rdbike += 1;
                console.log(rdbike)
            }
            else if (respn.checked = true) {
                mtnbike += 1;
            }
        } 
    
        else if (item+1 == 2) {
            var respy = document.getElementById("respy2");
            var respn = document.getElementById("respn2");
            if (respy.checked = true) {
                rdbike += 1;
            }
            else if (respn.checked = true) {
                mtnbike += 1;
            }
        } 

        else if (item+1 == 3) {
            var respy = document.getElementById("respy3");
            var respn = document.getElementById("respn3");
            if (respy.checked = true) {
                rdbike += 1;
            }
            else if (respn.checked = true) {
                mtnbike += 1;
            }
        } 
    }
    console.log(rdbike)
}

function updateqns() {
    document.getElementById("question").innerHTML=myQuestions[qncount];
    document.getElementById("qnresponse").innerHTML=myQuestionsInput[qninputcount];
    qncount += 1
    qninputcount += 1
}

