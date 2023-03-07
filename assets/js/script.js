// Question and Answer object variables
let quiz = [
    { /* Question 1 index 0 */
        query: "What JavaScript used for?", 
        ansA: "A.) Makes the website look nice",
        ansB: "B.) Make the website interactive", /* correct */
        ansC: "C.) Give structure to website content",
        ansD: "D.) Store data used to create websites in a remote location",
        correct: "B.) Make the website interactive",
    }, { /* Question 2 index 1 */
        query: "2.) What is the element within HTML that contains the JavaScript source?",
        ansA: "A.) <JSON>",
        ansB: "B.) <js>",
        ansC: "C.) <link>",
        ansD: "D.) <script>", /* correct */
        correct: "D.) <script>",
    }, { /* Question 3 index 2 */
        query: "3.) How do you find a HTML element with JavaScript?",
        ansA: "A.) var",
        ansB: "B.) function",
        ansC: "C.) querySelector", /* correct */
        ansD: "D.) addEventListener", 
        correct: "C.) querySelector",
    }, { /* Question 4 index 3 */
        query: "4.) The JavaScript file type in the repository must be called what?",
        ansA: "A.) .script",
        ansB: "B.) js.",
        ansC: "C.) .java",
        ansD: "D.) .js", /* correct */
        correct: "D.) .js",
    }, { /* Question 5 index 4 */
        query: "5.) What is the correct way to start writing a function?",
        ansA: "A.) function quiz()",
        ansB: "B.) function = quiz",
        ansC: "C.) function: quiz",
        ansD: "D.) function.quiz",
        correct: "A.) function quiz()", /* correct */
    }, { /* Question 6 index 5 */
        query: "6.) What is a loop used for?",
        ansA: "A.) to compare variable values",
        ansB: "B.) to contain a sequence of characters",
        ansC: "C.) to repeatedly run a function until a condition is met", /* correct */
        ansD: "D.) to perform math based calculations",
        correct: "C.) to repeatedly run a function until a condition is met", /* correct */
    }, { /* Question 7 index 6 */
        query: "7.) How would you put a comment within a line of functional JavaScript code?", 
        ansA: "A.) //",
        ansB: "B.) <--! -->",
        ansC: "C.) ' '",
        ansD: "D.) /* */", /* correct */
        correct: "D.) /* */", /* correct */
    }, { /* Question 8 index 7 */
        query: "8.) What does the ! represent in JavaScript?",
        ansA: "A.) exactly",
        ansB: "B.) not", /* correct */
        ansC: "C.) alert",
        ansD: "D.) error",
        correct: "B.) not", /* correct */
    }, { /* Question 9 index 8 */
        query: "9.) Which causes an event when a HTML element is clicked",
        ansA: "A.) 'click'", /* correct */
        ansB: "B.) .click",
        ansC: "C.) .on",
        ansD: "D.) .addEventListener",
        correct: "A.) 'click'", /* correct */
    }, {  /* Question 10 index 9 */
        query: "10.) What is NOT a common data type ",
        ansA: "A.) boolean",
        ansB: "B.) prompt", /* correct */
        ansC: "C.) numbers",
        ansD: "D.) stings",
        correct: "B.) prompt", /* correct */
    }];
// identifies specific elements in the html
    // timer identifier
    let timeEl = document.querySelector("#timer");
    // before quiz section
    let b4Quiz = document.querySelector("#b4Quiz");
    // start button identifier
    let startBtn = document.querySelector("#start");
    // quiz question identifier
    let questionEl = document.querySelector("#questionText");
    // answer button area identifier
    let answer = document.querySelector("#answerBtns");
    // individual answer buttons identifiers
    let ansABtn = document.querySelector("#ansA");
    let ansBBtn = document.querySelector("#ansB");
    let ansCBtn = document.querySelector("#ansC");
    let ansDBtn = document.querySelector("#ansD");
    // score board section identifier
    let scoreBoard = document.querySelector("#recordedScores")
    // high scores button identifier
    let highScore = document.querySelector("#highScores");
// global variables in JavaScript
    let secondsLeft = 100;
    let ansBonus = 0;
// function to set the timer and adjust it to count down by 1 second and display it on the HTML and stop it at 0
    function setTime() {
        let timerInterval = setInterval(function () {
            secondsLeft--;
            timeEl.textContent = secondsLeft+ansBonus;
            // checks for a value of 0 in the timer and stops the function from running and call for function to create a append message of 0 in the timer
            if (secondsLeft === 0) {
                clearInterval(timerInterval);
            };
            // countdown by 1 second calculated in milliseconds
        }, 1000);
    };
// function to generate quiz questions after start button
    function showQuiz() {
        let current = 0; /* console.log(current); */
        let askQ = quiz[current].query; /* console.log(askQ); */
        let askA = quiz[current].ansA; /* console.log(askA); */
        let askB = quiz[current].ansB; /* console.log(askB); */
        let askC = quiz[current].ansC; /* console.log(askC); */
        let askD = quiz[current].ansD; /* console.log(askD); */
        let corrAns = quiz[current].correct;  console.log(corrAns); 
        for (let i = current; i<quiz.length; i++) {
            questionEl.innerHTML = askQ;
            ansABtn.innerHTML = askA;
            ansBBtn.innerHTML = askB;
            ansCBtn.innerHTML = askC;
            ansDBtn.innerHTML = askD; console.log(quiz.length);
        }; answer.addEventListener("click",checkAns);
        function checkAns(event) {
            if (event.target.textContent == corrAns) {
                alert("Correct! +5 seconds");
                ansBonus = 5;
                current++;
                document.querySelector("#timer") + ansBonus
            } else {
                alert("Wrong! -10 seconds");
                ansBonus = -10;
            };
        }
    };
    
// add event listeners
    // start button event
    startBtn.addEventListener("click", function () {
        setTime();
        showQuiz();
    })