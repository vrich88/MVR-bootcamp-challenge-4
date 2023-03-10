// Question and Answer object variables
let quiz = [
    { /* Question 1 index 0 */
        query: "1.) What JavaScript used for?", 
        ansA: "A.) Makes the website look nice",
        ansB: "B.) Make the website interactive", /* correct */
        ansC: "C.) Give structure to website content",
        ansD: "D.) Store data used to create websites in a remote location",
        correct: "B.) Make the website interactive",
    }, { /* Question 2 index 1 */
        query: "2.) What is the element within HTML that contains the JavaScript source?",
        ansA: "A.) &#60;JSON&#62;",
        ansB: "B.) &#60;js&#62;",
        ansC: "C.) &#60;link&#62;",
        ansD: "D.) &#60;script&#62;", /* correct */
        correct: "D.) &#60;script&#62;"/* correct is not registering due to special characters at this time is always a wrong answer */
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
        ansB: "B.) &#60--! --&#62;",
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
// identifies elements in the html
    // high scores identifier
    let HighScoresEl = document.querySelector("#highScores");
    // timer identifier
    let timeEl = document.querySelector("#timer");
    // before quiz section
    let b4Quiz = document.querySelector("#b4Quiz");
    // start button identifier
    let startBtn = document.querySelector("#start");
    // quiz section
    let quizEl = document.querySelector("#takeQuiz");
    // quiz question identifier
    let questionEl = document.querySelector("#questionText");
    // answer button area identifier
    let answer = document.querySelector("#answerBtns");
    // individual answer buttons identifiers
    let ansABtn = document.querySelector("#ansA");
    let ansBBtn = document.querySelector("#ansB");
    let ansCBtn = document.querySelector("#ansC");
    let ansDBtn = document.querySelector("#ansD");
    // recorded scores area section identifier
    let grading = document.querySelector("#gradeArea");
    // instructions for player initials entry w/ grade = timer/score identifier
    let gradeMessage = document.querySelector("#grade");
    // initials input identifier
    let pInitials = document.querySelector("#initialsInput");
    // save grade button identifier
    let svGrdBtn = document.querySelector("#saveGradeBtn");
    // Hall of Records identifiers
    let rankings = document.querySelector("#recordedScores");
    let sortedRanks = document.querySelector("#sortedpRanks");
    let sortedInitials = document.querySelector("#sortedpInitials");
    let sortedScores = document.querySelector("#sortedpScores");
// global variables in JavaScript
    let secondsLeft = 100;
    let ansBonus = 0;
    let timerInterval;
    let current = 0; /* console.log(current); */
    let askQ = quiz[current].query; /* console.log(askQ); */
    let askA = quiz[current].ansA; /* console.log(askA); */
    let askB = quiz[current].ansB; /* console.log(askB); */
    let askC = quiz[current].ansC; /* console.log(askC); */
    let askD = quiz[current].ansD; /* console.log(askD); */
    let corrAns = quiz[current].correct; /* console.log(corrAns); */
    let recordedGrades = JSON.parse(localStorage.getItem("recordedGrades")) || []; console.log(recordedGrades);
// functions used in quiz functionality
    // function to set the timer and adjust it to count down by 1 second and display it on the HTML and stop it at 0
    function setTime() {
        let timerInterval = setInterval(function () {
            secondsLeft--;
            timeEl.textContent = secondsLeft+ansBonus;
            // checks for a value of 0 in the timer and stops the function from running and call for function to create a append message of 0 in the timer
            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                grade();
            };
            // countdown by 1 second calculated in milliseconds
        }, 1000);
    };
    // function to stop clock 
    function stopClock(){
        if (secondsLeft <= 0) {
            secondsLeft = 0;
            grade();
        }
    };
    // function to generate quiz question space after start button is clicked
    function showQuiz() {
        showSection();
            questionEl.innerHTML = askQ;
            ansABtn.innerHTML = askA;
            ansBBtn.innerHTML = askB;
            ansCBtn.innerHTML = askC;
            ansDBtn.innerHTML = askD;
        }; 
    // adds check for correct or wrong answer on user click to add a time "bonus" of +5 or -10 when an answer button is clicked
    function checkAns(event) {
        if (event.target.textContent == corrAns) {
            alert("Correct! +5 seconds");
            scoreBonus(5);
            nextQ();
        } else {
            alert("Wrong! -10 seconds");
            scoreBonus(-10);
            nextQ();
        };
        };
    // function to advance quiz questions
    function nextQ() {
        current++;
        if (current < 10) {
            askQ = quiz[current].query;
            askA = quiz[current].ansA;
            askB = quiz[current].ansB;
            askC = quiz[current].ansC;
            askD = quiz[current].ansD;
            corrAns = quiz[current].correct;
            questionEl.innerHTML = askQ;
            ansABtn.innerHTML = askA;
            ansBBtn.innerHTML = askB;
            ansCBtn.innerHTML = askC;
            ansDBtn.innerHTML = askD; 
        } else {
            grade();
        }
    };
    // function to set answer bonus/penalty
    function scoreBonus(ansBonus) {
        secondsLeft += ansBonus
    };
    // function to end quiz and prompt score save
    function grade() {
        clearInterval(timerInterval);
        quizEl.classList.toggle("hide");
        answer.classList.toggle("hide");  /* this may not be needed but seemed to be sometimes */
        gradeArea.classList.toggle("hide");
        timeEl.classList.toggle("hide");
        gradeMessage.textContent = "Enter your initials to save your score of " + secondsLeft
    };
    // function to save grades to local storage
    function saveLocalGrade(event) {
        event.preventDefault();
        let quizRound = {
            pInput: pInitials.value.trim(),
            pScore: secondsLeft,
        }; console.log(quizRound);
        let recordedGrades = JSON.parse(localStorage.getItem("recordedGrades")) || [];
        recordedGrades.push(quizRound);
        localStorage.setItem("recordedGrades",JSON.stringify(recordedGrades)); /* console.log(recordedGrades) */
        showHallOfRecords();
    };
    // function to show hall of records high scores
    function showHallOfRecords () {
        gradeArea.classList.toggle("hide");
        rankings.classList.toggle("hide");
        // function to sort the saved scores in local storage and display in descending order
        recordedGrades.sort(function(a,b) {
            return b.pScore - a.pScore
        });
        for (rank = 0; rank<recordedGrades.length; rank++) {
            // let pRanksCreate = document.createElement("li"); currently not functioning to set up a positioned rank based off the index of the locally stored saved grades
            // pRanksCreate.textContent = rank.value();
            // sortedRanks.appendChild(pRanksCreate);
            let pInitialsCreate = document.createElement("li");
            pInitialsCreate.textContent = recordedGrades[rank].pInput;
            sortedInitials.appendChild(pInitialsCreate);
            let pScoresCreate = document.createElement("li");
            pScoresCreate.textContent = recordedGrades[rank].pScore;
            sortedScores.appendChild(pScoresCreate);
        }
    };
    // function to toggle hidden class identifiers for hiding different sections
    showSection();
    function showSection() {
        b4Quiz.classList.toggle("hide");
        quizEl.classList.toggle("hide");
    };
// add event listeners
    // start button event
    startBtn.addEventListener("click", function () {
        setTime();
        showQuiz();
    });
    // check for correct/wrong answers event
    answer.addEventListener("click", checkAns);
    // save score event
    svGrdBtn.addEventListener("click", saveLocalGrade);
    // show high scores event
    HighScoresEl.addEventListener("click", showHallOfRecords);