var quiz =[];
var correctAnswer = ""
var wrongAnswer = ""
var unanswered = ""
var number = 30;
var intervalId;

var quizQuestion = [
    {
        question: "Where was the first Nascar race held?",
        answers: {
            a: 'Datona Speedway',
            b: 'Charlotte Speedway',
            c: 'Martinsville Speedway',
        },
        correctAnswer: 'b'
    },
    {
        question: "Which driver has the most overall Nascar wins?",
        answer: {
            a: 'Darrell Waltrip',
            b: 'Dale Earnhardt',
            c: 'Richard Petty',
        },
        correctAnswer: 'c'
    },
    {
        question: "Which is the fastest Nascar track?",
        answer: {
            a: 'Michigan Speedway',
            b: 'Atlanta Motor Speedway',
            c: 'Talladega Superspeedway',
        },
        correctAnswer: 'a'
    },
    {
        question: "Who is the youngest Nascar driver ever to win a race?",
        answer: {
            a: 'Casey Atwood',
            b: 'Harrison Burton',
            c: 'Joey Logano',
        },
        correctAnswer: 'c'
    },
    {
        question: "Which female driver has the most overall wins?",
        answer: {
            a: 'Sara Christian',
            b: 'Danica Patrick',
            c: 'Patty Moise',
        },
        correctAnswer: 'b'
    },
];

var question = document.getElementById('questions');
var result = document.getElementById('results');
var submitButton = document.getElementById('submit');

function displayQuestions(quizQuestion) {
    var output = [];
    var answers = [];
    for(var i=0; i<quizQuestions.length; i++) {
        for(letter in questios[i].answers) {
            answer.push(
                '<label>'
                + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                + letter + ': '
                + quetions[i].answers[letter]
            + '</label>'
            );
        }

        output.push(
            '<div class="question">' + questions[i].question + '</div>'
            + '<div class="anwsers">' + answers.join('') + '</div>' 
        );
        question.innerHTML = output.join('');
}
}





// function reset() {
 
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

