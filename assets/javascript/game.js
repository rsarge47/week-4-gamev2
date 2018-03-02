// moves the player you click on to your avatar and the other players to enemy avatar
$('.avatars').on('click', function(){
    var hero = $(this).attr('id');
    console.log(hero);
    $("#" + hero).removeClass('avatars').addClass('offense');
    $('#your-avatar').append($('.offense'));
    $('.avatars').removeClass('avatars').addClass('nemesis');
    $('#enemy-avatar').append($('.nemesis'));    
});

// attempted to use the same process in first on click function to move enemy avatar to defense
$('.nemesis').on('click', function(){
    var punchingBag = $(this).attr('id');
    console.log(punchingBag);
    $("#" + punchingBag).removeClass('nemesis').addClass('defender');
    $('#defense').append($('.defender'));
});

/* after I can move characters to defense position my plan was to make objects
    for each character to hold their health, attack power, and counter attack.
    Next would be using the objects attack and counter attack to update health when attack button is clicked.
    Create conditionals to determine when a character is killed.
    Add booleans to functions to prevent user from breaking game by selecting multiple characters.
    Make a reset function.
    After js and game are fully functional, return to html/css to fix and add styles. */