
var countDownStart = 5;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;




//1. function: on click of a START btn:
$('#start_btn').on('click', function () {
    // alert("hello");

    // hide: START btn
    // hide: card subtitle
    $('.entry-page').hide();


    //add: countdown timer starting from 30 sec
    countDownStart;
    //use setInterval method to execute function every 1 sec(1000milliseconds)
    var downloadTimer = setInterval(function () {
        countDownStart--;
        $(".countdowntimer").text(countDownStart + " seconds left");

        if (countDownStart <= 0)  {
            clearInterval(downloadTimer);
            myFunction();
        }
        //this exit from the function with condition of a pressed 
        // btn "DONE" does not work
        // btn cannot be defined by the browser
        if (target.id === "done_btn") {
            return true;
        }
    }, 1000);



    // add: Q strings and radiobuttons GUI elements
    //Q1:
    $("#questianOne").text('What is a \'Terminal\'?');

    //A1 with val C - correct answer:
    //radiobutton:
    var radioButton = $("<input>").addClass("radio_btn").attr({ type: "radio", val: 'C' }).attr('name', 'q1');
    var qOne_answerOne = "an application that helps to comminicate with the computer ";
    $('#radio_btnQ1A1').append(qOne_answerOne, radioButton);
    //A2 with val I - incorrect answer:
    //radiobutton:
    var radioButton = $("<input>").addClass("radio_btn").attr({ type: "radio", val: 'I' }).attr('name', 'q1');
    var qOne_answerTwo = "a notepad where developers can store their ideas ";
    $('#radio_btnQ1A2').append(qOne_answerTwo, radioButton);
    //A3 with val I - incorrect answer:
    //radiobutton:
    var radioButton = $("<input>").addClass("radio_btn").attr({ type: "radio", val: 'I' }).attr('name', 'q1');
    var qOne_answerThree = "none of the above ";
    $('#radio_btnQ1A3').append(qOne_answerThree, radioButton);



    //Q2:
    $("#questianTwo").text('Why do we use \'Terminal\'?');
    //A1 with val C - correct answer:
    //radiobutton:
    var radioButton = $("<input>").addClass("radio_btn").attr({ type: "radio", val: 'C' }).attr('name', 'q2');
    var qTwo_answerOne = "it is fast in compare to \'Finder\' ";
    $('#radio_btnQ2A1').append(qTwo_answerOne, radioButton);
    //A2 with val I - incorrect answer:
    //radiobutton:
    var radioButton = $("<input>").addClass("radio_btn").attr({ type: "radio", val: 'I' }).attr('name', 'q2');
    var qTwo_answerTwo = "it has a better GUI ";
    $('#radio_btnQ2A2').append(qTwo_answerTwo, radioButton);
    //A3 with val I - incorrect answer:
    //radiobutton:
    var radioButton = $("<input>").addClass("radio_btn").attr({ type: "radio", val: 'I' }).attr('name', 'q2');
    var qTwo_answerThree = "none of the above ";
    $('#radio_btnQ2A3').append(qTwo_answerThree, radioButton);

    // add:  DONE btn
    var newbuttonDone = $("<button>").addClass('btn success').html('DONE');
    var buttonDone = newbuttonDone.attr('onclick', 'setTimeout(myFunction);').attr('id', 'done_btn');
    $(".q_a_page").append(buttonDone);

    return;

})



// 2. Trigger countdown condition and click of a DONE btn condition:
function myFunction() {


    // hide: countdown timer
    // hide: Q and radiobuttons
    // hide: btn DONE
    $(".q_a_page").hide();
    // remove display:none for done-page
    $("div").removeClass("done-page");


    //Do a validation check
    //count unanswered for radiobuttons with name=q1 and name=q2:
    if ($(".radio_btn[name= q1]:checked").length == 0) {
        //alert("no answered questians");
        unanswered;
        unanswered++;
        $(".unanswered").text(unanswered);
    } if ($(".radio_btn[name= q2]:checked").length == 0) {
        //alert("no answered questians");
        unanswered++;
        $(".unanswered").text(unanswered);
    }


    //counting correct answers for q1:
    if ($('input:radio[name=q1]:nth(0)').attr('checked',true)) {
        
        correctAnswers;
        correctAnswers++;
        $(".correctAnswers").text(correctAnswers);
    }
     //counting incorrect answers for q1
    //  if ($('.radio_btn[name=q1]')[1].checked = true) {
    //     incorrectAnswers;
    //     incorrectAnswers++;
    //     $(".incorrectAnswers").text(incorrectAnswers);
    // } if ($('.radio_btn[name=q1]')[2].checked = true) {
    //     incorrectAnswers;
    //     incorrectAnswers++;
    //     $(".incorrectAnswers").text(incorrectAnswers);
    // }


    //counting correct answers for q2:
    if ($('input:radio[name=q2]')[0].checked = true) {
        
        correctAnswers;
        correctAnswers++;
        $(".correctAnswers").text(correctAnswers);
    }
     //counting incorrect answers for q2
    //  if ($('.radio_btn[name=q2]')[1].checked = true) {
    //     incorrectAnswers;
    //     incorrectAnswers++;
    //     $(".incorrectAnswers").text(incorrectAnswers);
    // } if ($('.radio_btn[name=q2]')[2].checked = true) {
    //     incorrectAnswers;
    //     incorrectAnswers++;
    //     $(".incorrectAnswers").text(incorrectAnswers);
    // }
    return;
}





