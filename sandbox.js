// variables in milliseconds
const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

var subjectsList = ["math", "kmw", "kazakh", "physics", "chemistry"];
var subjectsAndDates = {"math": "May 3, 2022 10:00", "kmw": "May 5, 2022 10:00", "kazakh": "May 6, 2022 10:00", "physics": "May 11, 2022 10:00", "chemistry": "May 14, 2022 10:00"}

countdown = () => {
    for (var i = 0; i < subjectsList.length; i++) {
        var subject = subjectsList[i];

        // console.log(subject);

        var countdownDate = new Date(subjectsAndDates[subject]).getTime();
        var referenceDate = new Date("January 1, 2022 00:00").getTime();
        var startDate = new Date().getTime();
        var leftTime = countdownDate - startDate;
        var totalTime = countdownDate - referenceDate;

        var daysSelector = "." + subject + " .countdown-days h3";
        var hoursSelector = "." + subject + " .countdown-hours h3";
        var minutesSelector = "." + subject + " .countdown-minutes h3";
        var secondsSelector = "." + subject + " .countdown-seconds h3";

        var barSelector = "." + subject + " .countdown-scroll";
        var progressSelector = "." + subject + " .countdown-progress";

        // console.log(barSelector);

        document.querySelector(daysSelector).textContent = Math.floor(leftTime / day).toString();
        document.querySelector(hoursSelector).textContent = Math.floor((leftTime % day) / hour).toString();
        document.querySelector(minutesSelector).textContent = Math.floor((leftTime % hour) / minute).toString();
        document.querySelector(secondsSelector).textContent = Math.floor((leftTime % minute) / second).toString();

        var progressPercent = 100 - (leftTime / totalTime) * 100;
        progressPercentText = progressPercent.toString() + "%";
        document.querySelector(barSelector).style.width = progressPercentText;

        // console.log(progressPercentText);

        if (progressPercent >= 80) {
            document.querySelector(progressSelector).style.background = "orange";
        } else if (progressPercent >= 90) {
            document.querySelector(progressSelector).style.background = "red";
        }
    }
}

countdown();

setInterval(countdown, 1000);