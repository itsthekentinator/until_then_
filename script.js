var timerElement = document.querySelector('.timer');
var countdownDate = new Date('May 28, 2023 10:00:00').getTime();

function updateTimer() {
  var now = new Date().getTime();
  var distance = countdownDate - now;

  if (distance <= 0) {
    timerElement.textContent = "00:00:00:00";
    clearInterval(intervalId);
    return;
  }

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var timerText = days.toString().padStart(2, '0') + ':' +
                  hours.toString().padStart(2, '0') + ':' +
                  minutes.toString().padStart(2, '0') + ':' +
                  seconds.toString().padStart(2, '0');
  
  timerElement.textContent = timerText;
}

var intervalId = setInterval(updateTimer, 1000);
