var quiz =[];
var correctAnswer = ""
var wrongAnswer = ""
var unanswered = ""
var number = 30;
var intervalId;
// Trying to create an array to store the questions and answers.
// Also must create radio buttons for the answers to be selected.
// Will have to create a boolean if statement to run the counters for correct and wrong answers along with the 
// questions not answered.
// Questions are being displayed in the html but are not joined with the correct answers.
var quizQuestion = [
    {
        question: "<div>Where was the first Nascar race held?</div>",
        answers: [
            '<div data-answer="false">Datona Speedway</div>',
            '<div data-answer="true">Charlotte Speedway</div>',
            '<div data-answer="false">Martinsville Speedway</div>',
        ]
    },
    {
        question: "<div>Which driver has the most overall Nascar wins?</div>",
        answers: [
            '<div data-answer="false">Darrell Waltrip</div>',
            '<div data-answer="false">Dale Earnhardt</div>',
            '<div data-answer="true">Richard Petty</div>',
        ]
       
    },
    {
        question: "<div>Which is the fastest Nascar track?</div>",
        answers: [
            '<div data-answer="true">Michigan Speedway</div>',
            '<div data-answer="false">Atlanta Motor Speedway</div>',
            '<div dta-answer="false">Talladega Superspeedway</div>',
        ]
      
    },
    {
        question: "<div>Who is the youngest Nascar driver ever to win a race?</div>",
        answers: [
             '<div data-answer="false">Casey Atwood</div>',
             '<div data-answer="false">Harrison Burton</div>',
             '<div data-answer="true">Joey Logano</div>',
        ]
        
    },
    {
        question: "<div>Which female driver has the most overall wins?</div>",
        answers: [
             '<div adat-answer="false">Sara Christian</div>',
             '<div data-answer="true">Danica Patrick</div>',
             '<div data-answer="false">Patty Moise</div>',
    ]

    },
];
// Trying to get html Id's to set to variables.
var question = document.getElementById('questiondisplay');
var result = document.getElementById('results');
var submitButton = document.getElementById('submit');

function displayQuestions(quizQuestion) {
    var output = [];
    var answers = [];
    for(var i=0; i<quizQuestion.length; i++) {
       for(var j = 0; j < quizQuestion[i].answers.length; j++){
           var answerChoice = quizQuestion[i].answers[j]
           answers.push(answerChoice);
       }
    
            console.log(answers);
        
// Trying to send output of the for loop to the html
        output.push(quizQuestion[i].question)
        output.push(answers.join(""));
        question.innerHTML = output.join('');
        
        
        }
        console.log(output)
}
displayQuestions(quizQuestion)


// Getting the timer to work and the message of "time up" to be displayed.
    $(".btn").one("click", run)
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    $(".question").html(quizQuestion);
}


function decrement() {
    number--;

    $(".timer").html("<h2>" +number + "</h2>");

    if (number === 0) {
        stop();
        $(".timedisplay").html("Time is up!");
        
        
    }
}


function stop() {
    clearInterval(intervalId);
    // function reset();
};

// function quizQuestions(questions)

