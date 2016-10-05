// Answer the questions here:

// - What do you think is going to happen?
//////// It will console log its text.
// - What happened?
//////// It console logged its text.
// - Why?
//////// Because in feature set 1, I instructed buttons to console log their text content.
//========== Write your code below ===========//

//Feature Set 1 - The lonely event listener
$(document).ready(function () {
    $('#list').on('click', 'button', function () {
        var button_that_was_clicked = this;
        console.log($(button_that_was_clicked).text());
    });

//Feature Set 2 - Bring a friend
    var new_li = $('<li>');
    var new_button = $('<button>').text('Delegated Button#5 Handler').css('margin-top', '10px');
    $('#list').append(new_li);
    $(new_li).append(new_button);

//Feature Set 3 - See above

//Additional Challenge
    var new_li = $('<li>');
    var new_a = $('<a>').attr('href','http://www.google.com').attr('target','_blank');
    var new_button = $('<button>').addClass('gogoogle').text('Button #6 - visit google').css('margin', '10px');
    $('#list').append(new_li);
    $(new_li).append(new_a);
    $(new_a).append(new_button);

    $('#list').on('click', '.gogoogle', function () {
        var button_that_was_clicked = this;
        console.log('ok');
    });
});