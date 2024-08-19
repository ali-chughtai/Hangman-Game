const hangmanQuestions = {
    "Who is the most favourite politician of pakistan?":"imrankhan",
    "National car of pakistan is?":"mehran",
    "Students second home...":"quettahotel",
    "A mans bestfriend? ":"bike",
    "Qaidi no?":"804",
    "What does every pakistani student wants rn?":"visa",
}

const numberOfQuestions = Object.keys(hangmanQuestions).length;
var incorrectAnswers = 0; //default
var combinedAnswers = "";
const questionNumber = Math.floor(Math.random() * numberOfQuestions);

// Get a random question key
const randomQuestionKey = Object.keys(hangmanQuestions)[questionNumber];
const answer = hangmanQuestions[randomQuestionKey];
const answerLength = answer.length;

// Select the first element with class "question"
const questionElement = document.getElementsByClassName("question")[0];
questionElement.innerHTML = randomQuestionKey;

const list = document.querySelectorAll("#list li");
for(var i = 0; i<answerLength ; i++){
    list[i].style.display = "block";
}

// Select all button elements
const buttons = document.querySelectorAll(".keyboard button");
const images = document.querySelectorAll("img")
// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener("click", function () {
        if (answer.includes(this.value)) {
            combinedAnswers += this.value;
            this.disabled = true;
            this.style.backgroundColor = "#bdc0ff";
            alert(combinedAnswers)
            if(combinedAnswers.length === answerLength){
                alert ("You won hehe");
                location.reload();

            }
        } else {
            incorrectAnswers += 1;
            images.forEach(img => {
                if (img.getAttribute('data-state') === String(incorrectAnswers)) {
                    img.style.display = "block";
                } else {
                    img.style.display = "none";
                }
            });
            document.getElementsByClassName("incorrect")[0].innerText = incorrectAnswers;
            if (incorrectAnswers === 6){
                alert("Game Over")
                location.reload();
            }
        }
    });
});
