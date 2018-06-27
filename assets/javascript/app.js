// set time of 30 sec
var countDownStart = 30;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;




//1. function: on click of a START btn:
$('#start_btn').on('click', function () {
    // alert("hello");

    // hide: START btn
    $('.success').hide();
    // hide: card subtitle
    $(".card-subtitle").hide();
    //add: countdown timer starting from 30 sec
    var countDownCurrent = countDownStart;

    //Display timer by appending a div in .card-text
    var paragraph = $("<div>").addClass('countdown');
    var timer = paragraph.html(countDownCurrent + " seconds");
    $(".card-text").append(timer);
    j = countDownStart - countDownCurrent;
    countDownCurrent--;

    // add: Q strings and radiobuttons GUI elements
    //Q1:
    $("#questianOne").text('What is a \'Terminal\'?');


    //A1 with val C - correct answer:
    //radiobutton:
    var radioButton = $("<input>").addClass("radio_btn").attr({ type: "radio", val: 'C', name:"chest" });
    var qOne_answerOne = "an application that helps to comminicate with the computer ";
    $('#radio_btnOne').append(qOne_answerOne, radioButton);
    //A2 with val I - incorrect answer:
    //radiobutton:
    var radioButton = $("<input>").addClass("radio_btn").attr({ type: "radio", val: 'I', name:"chest" });
    var qOne_answerTwo = "a notepad where developers can store their ideas ";
    $('#radio_btnTwo').append(qOne_answerTwo, radioButton);
    //A3 with val I - incorrect answer:
    //radiobutton:
    var radioButton = $("<input>").addClass("radio_btn").attr({ type: "radio", val: 'I', name:"chest" });
    var qOne_answerThree = "none of the above ";
    $('#radio_btnThree').append(qOne_answerThree, radioButton);

    // 3.function: 
    // i. if correct choice, add to Correct Answer

    // ii. if incorrect choice, add to Incorrect Answer
    // iii. if no btns chosen points added to Unanswered

    // add:  DONE btn
    var newbuttonDone = $("<button>").addClass('btn success').html('DONE');
    var buttonDone = newbuttonDone.attr('onclick', 'setTimeout(myFunction);').attr('id', 'done_btn');
    $(".buttons").append(buttonDone);









    if (countDownCurrent == 0) {

    }
})

// 2. Trigger countdown condition and click of a DONE btn condition:
function myFunction() {

    //alert('hello');
    // hide: countdown timer
    $(".countdown").hide();
    // hide: Q and radiobuttons
    // $("#questianOne").hide();
    // $("#radio_btn").hide();
    $("div.questianOne").hide();
    // hide: btn DONE
    $("#done_btn").hide();
    // add: 'All Done!' string
    $(".card-text").text("All Done!");
    // add: Correct Answer total points
    //Do a validation check
    // if (!$('input[name=chest]:checked').val()) {
    //     alert("good");
    // }
    // add: Incorrect Answer total points 
    // add: Unanswered total points 
    if ($(".radio_btn:checked").length == 0) {
        alert("No");
        unanswered = unanswered ++;
        $(".unanswered").text(unanswered);
    }
}





