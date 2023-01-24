var timer = document.querySelector('#time');
var highScore = document.querySelector('.score');
var startButtom = document.querySelector('#start');
var questionsTitle = document.querySelector('#question-title');
var choices1 = document.querySelector('#choices-1');
var choices2 = document.querySelector('#choices-2');
var choices3 = document.querySelector('#choices-3');
var choices4 = document.querySelector('#choices-4');
var finalScore = document.querySelector('#final-score');
var initials = document.querySelector('#initials');
var submit = document.querySelector('#submit');

var timer;
var timeCount;


let currentQuestions = {}

let score = 0
let questionCounter = 0
let availableQuestions = []



let questions = [
    {
        questionsTitle: 'Commonly used JavaScript...',
        choice1: 'String',
        choice2: 'Boolean',
        choice3: 'Alerts',
        choice4: 'Numbers',
        answer: 1,
    },
    {
        questionsTitle: 'he conditions in an if / else statement is enclosed with ___.',
        choice1: 'Quotes',
        choice2: 'Curly brackets',
        choice3: 'Parentheses',
        choice4: 'qaure bracketss',
        answer: 1,
    },
    {
        questionsTitle: 'Arrays in JavaScript can be used to store ___.',
        choice1: 'Numbers and strings',
        choice2: 'Boolean',
        choice3: 'Other arrays',
        choice4: 'All of the above',
        answer: 4,
    },
    {
        questionsTitle: 'tring values must be enclosed within ____ when being assigned to variables.',
        choice1: 'Commas',
        choice2: 'Curly brackets',
        choice3: 'Alerts',
        choice4: 'Numbers',
        answer: 1,
    }
]

const MaxQuest = 4

 startQuiz = () => {
    questionCounter = 0
    score = 0
   
    document.getElementById('questions').classList.remove('hide')
    document.getElementById('start-screen').classList.add('hide')
    getNewQuest()

}

getNewQuest = () => {
    questionsTitle.innerText = questions [questionCounter].questionsTitle
    choices1.innerText = questions [questionCounter].choice1
    choices2.innerText = questions [questionCounter].choice2
    choices3.innerText = questions [questionCounter].choice3
    choices4.innerText = questions [questionCounter].choice4
        
    
}
acceptingAnswers = (event) => {
    var idanswer = event.target.getAttribute('id').split("-")[1]
    console.log(idanswer)
    if (idanswer == questions [questionCounter].answer)
    {
        score = score + 10
    }
    else {

    }
    if (questionCounter < questions.length -1) {
        questionCounter++ 
        getNewQuest ()
    }
}


startButtom.addEventListener('click', startQuiz) 
choices1.addEventListener('click', acceptingAnswers)
choices2.addEventListener('click', acceptingAnswers)
choices3.addEventListener('click', acceptingAnswers)
choices4.addEventListener('click', acceptingAnswers)