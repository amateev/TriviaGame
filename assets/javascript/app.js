// set time of 30 sec
var countDownStart = 30;



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
    j  = countDownStart - countDownCurrent;
    countDownCurrent--; 
// add: Q string and radiobuttons GUI elements
// 3.function: 
// i. if correct choice, add to Correct Answer
// ii. if incorrect choice, add to Incorrect Answer
// iii. if no btns chosen points added to Unanswered

    // add: btn DONE
    var newbuttonDone = $("<button>").addClass('btn success').html('DONE');
    var buttonDone = newbuttonDone.attr('onclick', 'setTimeout(myFunction, 2000);').attr('id', 'done_btn');
    $(".card-text").append(buttonDone);
    
     
   
    

   
   
  

    if (countDownCurrent == 0) {

    }
})
// 2. Trigger countdown condition and click of a DONE btn condition:
function myFunction() {
        //alert('hello');
    // hide: countdown timer
    $(".countdown").hide();
// hide: Q and radiobuttons
// hide: btn DONE
$("#done_btn").hide();
// add: 'All Done!' string
// add: Correct Answer total points 
// add: Incorrect Answer total points 
// add: Unanswered total points 
    }





