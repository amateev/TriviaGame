
var countDownStart = 30;
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
        if (countDownStart <= 0)
            clearInterval(downloadTimer);
    }, 1000);



    // add: Q strings and radiobuttons GUI elements
    //Q1:
    $("#questianOne").text('What is a \'Terminal\'?');

    //A1 with val C - correct answer:
    //radiobutton:
    var radioButton = $("<input>").addClass("radio_btn").attr({ type: "radio", val: 'C' });
    var qOne_answerOne = "an application that helps to comminicate with the computer ";
    $('#radio_btnQ1A1').append(qOne_answerOne, radioButton);
    //A2 with val I - incorrect answer:
    //radiobutton:
    var radioButton = $("<input>").addClass("radio_btn").attr({ type: "radio", val: 'I' });
    var qOne_answerTwo = "a notepad where developers can store their ideas ";
    $('#radio_btnQ1A2').append(qOne_answerTwo, radioButton);
    //A3 with val I - incorrect answer:
    //radiobutton:
    var radioButton = $("<input>").addClass("radio_btn").attr({ type: "radio", val: 'I' });
    var qOne_answerThree = "none of the above ";
    $('#radio_btnQ1A3').append(qOne_answerThree, radioButton);

    //Q2:
    $("#questianTwo").text('Why do we use \'Terminal\'?');
    //A1 with val C - correct answer:
    //radiobutton:
    var radioButton = $("<input>").addClass("radio_btn").attr({ type: "radio", val: 'C' });
    var qTwo_answerOne = "it is fast in compare to \'Finder\' ";
    $('#radio_btnQ2A1').append(qTwo_answerOne, radioButton);
    //A2 with val I - incorrect answer:
    //radiobutton:
    var radioButton = $("<input>").addClass("radio_btn").attr({ type: "radio", val: 'I' });
    var qTwo_answerTwo = "it has a better GUI ";
    $('#radio_btnQ2A2').append(qTwo_answerTwo, radioButton);
    //A3 with val I - incorrect answer:
    //radiobutton:
    var radioButton = $("<input>").addClass("radio_btn").attr({ type: "radio", val: 'I' });
    var qTwo_answerThree = "none of the above ";
    $('#radio_btnQ2A3').append(qTwo_answerThree, radioButton);

    // add:  DONE btn
    var newbuttonDone = $("<button>").addClass('btn success').html('DONE');
    var buttonDone = newbuttonDone.attr('onclick', 'setTimeout(myFunction);').attr('id', 'done_btn');
    $(".q_a_page").append(buttonDone);







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
    // if (!$('input[name=chest]:checked').val()) {
    //     alert("good");
    // }
    // add: Incorrect Answer total points 
    // add: Unanswered total points 
    if ($(".radio_btn:checked").length == 0) {
        unanswered = unanswered++;
        $(".unanswered").text(unanswered);
        // }else ($("input[type=radio][value='C']").prop("checked",true) {
        //     correctAnswers = correctAnswers ++;
        //     $("p.correctAnswers").text(correctAnswers);
    }
}


// $("#radio_1").prop("checked", true);
// $("input[name=background][value='some value']").prop("checked",true);


