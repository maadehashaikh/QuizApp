// let question1 = document.querySelectorAll("p");
const questions = [
    {
        question:"Which is the largest animal in the world ?",
        answers :[
            {text:"shark",correct:false},
            {text:"Blue whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"For what purpose variables use in programming ?",
        answers :[
            {text:"to store numbers only",correct:false},
            {text:"to fetch data only",correct:false},
            {text:"to store variables only",correct:false},
            {text:"they are digital storage to  store any format of data ",correct:true},
        ]
    },
    {
        question:"JS full form is  ?",
        answers :[
            {text:"Java screen",correct:false},
            {text:"jam's story",correct:false},
            {text:"java Script",correct:true},
            {text:"Java sources",correct:false},
        ]
    },
    {
        question:"what programming language means ?",
        answers :[
            {text:"it means a language that can be easily understandable by computers only ",correct:true},
            {text:"it means a language that can be easily understandable by humans only ",correct:false},
            {text:"it means a language that can be easily understandable by alians only ",correct:false},
            {text:"None of these ",correct:false},
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score =0;
 
function startQuiz(){
      currentQuestionIndex = 0;
      score = 0;
      nextButton.innerHTML = "Next";
      showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion  = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    questionElement.innerHTML= questionNum + " . " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{ 
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
          button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
      answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
       selectedBtn.classList.add("correct");
       score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
   resetState();
   questionElement.innerHTML=`you scored ${score} out of ${questions.length} ! `;
   nextButton.innerHTML = "Play Again";
   nextButton.style.display =  "block";
}

function handleNextButton(){
   currentQuestionIndex++;
   if(currentQuestionIndex < questions.length){
    showQuestion();
   }
   else{
    showScore();
   }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex <questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();
