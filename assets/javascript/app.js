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
    var radioButton = $("<input>").addClass("radio_btn").attr({ type: "radio", val: 'C'});
    var qOne_answerOne = "an application that helps to comminicate with the computer ";
    $('#radio_btnQ1A1').append(qOne_answerOne, radioButton);
    //A2 with val I - incorrect answer:
    //radiobutton:
    var radioButton = $("<input>").addClass("radio_btn").attr({ type: "radio", val: 'I'});
    var qOne_answerTwo = "a notepad where developers can store their ideas ";
    $('#radio_btnQ1A2').append(qOne_answerTwo, radioButton);
    //A3 with val I - incorrect answer:
    //radiobutton:
    var radioButton = $("<input>").addClass("radio_btn").attr({ type: "radio", val: 'I'});
    var qOne_answerThree = "none of the above ";
    $('#radio_btnQ1A3').append(qOne_answerThree, radioButton);

    //Q2:
    $("#questianTwo").text('Why do we use \'Terminal\'?');
     //A1 with val C - correct answer:
    //radiobutton:
    var radioButton = $("<input>").addClass("radio_btn").attr({ type: "radio", val: 'C'});
    var qTwo_answerOne = "it is fast in compare to \'Finder\' ";
    $('#radio_btnQ2A1').append(qTwo_answerOne, radioButton);
     //A2 with val I - incorrect answer:
    //radiobutton:
    var radioButton = $("<input>").addClass("radio_btn").attr({ type: "radio", val: 'I'});
    var qTwo_answerTwo = "it has a better GUI ";
    $('#radio_btnQ2A2').append(qTwo_answerTwo, radioButton);
     //A3 with val I - incorrect answer:
    //radiobutton:
    var radioButton = $("<input>").addClass("radio_btn").attr({ type: "radio", val: 'I'});
    var qTwo_answerThree = "none of the above ";
    $('#radio_btnQ2A3').append(qTwo_answerThree, radioButton);

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
    $("div.questianTwo").hide();
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
        unanswered = unanswered ++;
        $(".unanswered").text(unanswered);
    // }else ($("input[type=radio][value='C']").prop("checked",true) {
    //     correctAnswers = correctAnswers ++;
    //     $("p.correctAnswers").text(correctAnswers);
    }
}


// $("#radio_1").prop("checked", true);
// $("input[name=background][value='some value']").prop("checked",true);


