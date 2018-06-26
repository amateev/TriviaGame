// set time of 30 sec
const countDownStart = 30;

// 1. function: on click of a START btn:
$('.success').on('click', function () {
    // alert("hello");
    // hide: START btn
    $('.success').hide();
    // hide: card subtitle
    $(".card-subtitle").hide();
    // Trigger and add: countdown timer starting from 30 sec
    function countDownTimer() {
        var countDownCurrent = countDownStart--;
        var paragraph = $("<p>").addClass('countdown');
        var timer = paragraph.html(countDownCurrent + "seconds");
        $(".countdown").append(timer);
        return;
    }


})



// add: Q string and radiobuttons GUI elements
// 3.function: 
// i. if correct choice, add to Correct Answer
// ii. if incorrect choice, add to Incorrect Answer
// iii. if no btns chosen points added to Unanswered
// add: btn DONE

// 2. function: time is 0 or/and on click of a DONE btn:
// hide: countdown timer
// hide: Q and radiobuttons
// hide: btn DONE
// add: 'All Done!' string
// add: Correct Answer total points 
// add: Incorrect Answer total points 
// add: Unanswered total points 