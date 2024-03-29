
/* For the trivia, you can use if else statement to check if
the value of a onclick / onkey / string is equal to a set value to be
compared to, and if yes, can add 1 to a score global variable and alert
the user that they have gotten a particular question correct. */

var bikeQn = document.getElementById("distance");

var myQuestions = [{question:"Do you prefer cycling longer distances?"}, {question:"Select your preference on the comfort versus efficiency scale"}, {question:"What is your age range?"}, {question:"Do you cycle to work often?"}];
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
        var output = [];
        var answers = [];

        //for each qn
        for(var i=0; i<questions.length; i++){
            //reset ans array
            answers = [];

            for (letter in questions[i].answers){
                answers.push(
                    '<input type="radio" name="question'+i+'" value="'+letter+'">' + letter + ': ' + questions[i].answers[letter] + '</label>' 
                );}
            }
        }

        // add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}
        // finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');


	function showResults(questions, quizContainer, resultsContainer){
		// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}
	

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
