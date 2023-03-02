// identifies the start button in the html
var startBtn = document.querySelector("#start");
// identifies the timer element
var timeEl = document.querySelector("#timer");
// sets the variable for the starting time
var secondsLeft = 100;
// function to set the timer and adjust it to count down by 1 and display it on the HTML
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        // checks for a value of 0 in the timer and stops the function from running and call for function to create a append message of 0 in the timer
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
        // countdown by 1 second calculated in milliseconds
    },1000);
}
// function to declare the 
function sendMessage() {
    timeEl.textContent = "0";
}

startBtn.addEventListener("click", function() {
    setTime();
});
