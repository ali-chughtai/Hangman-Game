const hangmanQuestions = {
    "Who is the most favourite politician of pakistan?":"imrankhan",
    "National car of pakistan is?":"mehran",
    "Students second home...":"quettahotel",
    "A mans bestfriend? ":"bike",
    "Qaidi no?":"804",
    "What does every pakistani student wants rn?":"visa",
    "Pakistan best institute of IT":"fast",
    "Pakistan is controlled by?":"army",
    "Most famous athlete of the world":"ronaldo",
    "Friday's Special Dish?":"biryani",
    
}

const numberOfQuestions = Object.keys(hangmanQuestions).length;
var incorrectAnswers = 0; //default
var combinedAnswers = "";
const questionNumber = Math.floor(Math.random() * numberOfQuestions);

const randomQuestionKey = Object.keys(hangmanQuestions)[questionNumber];
const answer = hangmanQuestions[randomQuestionKey];
const answerLength = answer.length;

const questionElement = document.getElementsByClassName("question")[0];
questionElement.innerHTML = randomQuestionKey;

const list = document.querySelectorAll("#list li");
for(var i = 0; i<answerLength ; i++){
    list[i].style.display = "block";
}

const buttons = document.querySelectorAll(".keyboard button");
const images = document.querySelectorAll("img");
const gameOver =  document.getElementsByClassName("gameOver")[0];
const gameOver1 =  document.getElementsByClassName("gameOver")[1];

const gameContainer = document.querySelector(".gameContainer");

var array = [];
buttons.forEach(button => {
    button.addEventListener("click", function () {
        this.disabled = true;
        this.style.backgroundColor = "#bdc0ff";

        if (answer.includes(this.value)) {
            combinedAnswers += this.value;
            for(var i = 0; i<answerLength  ;i++){
                if(answer[i] === this.value){
                    array[i] = this.value
                }
            }
            for(var i = 0; i<array.length ;i++){
                if(array[i]){
                    list[i].innerText = array[i]
                }
            }

            // alert(array)
            // alert(combinedAnswers.length)
            // alert(answerLength)

            let count = 0;
            for(var i = 0; i<array.length; i++){
                if(array[i] !== undefined){
                    count += 1
                } 
            }

            setTimeout(()=>{
                if(count === answerLength){
                     gameOver1.style.display = "flex";
                    gameContainer.style.opacity = "0.5"
                    document.getElementById("answer1").innerText = answer;
                }
            },1000)
            
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
            
            setTimeout(()=>{
                if (incorrectAnswers === 6){
                    gameOver.style.display = "flex";
                    gameContainer.style.opacity = "0.5"
                    document.getElementsByClassName("answer")[0].innerText = answer;

                }
            },1000)
            
            
        }
    });
});

const playAgain = document.getElementById("playAgain")
playAgain.addEventListener("click", function () {
    location.reload();
})

const playAgain2 = document.getElementById("playAgain2")
playAgain2.addEventListener("click", function () {
    location.reload();
})
