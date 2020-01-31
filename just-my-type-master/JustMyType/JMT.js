// $(document).ready(function(){

    let sentences = [
        "I am here to save the World, one code of line at a time.",
        "How about being apprehensive on just doing you job.",
        "You\'ve got to know when to hold them, fold them and just run.",
        "I can do all things when all things leave me alone.",
    ];
    let sentIndex = 0;
    let letterIndex = 0;
    let currentSentence = sentences[sentIndex];
    let currentLetter = currentSentence[letterIndex];
    
    $("#sentence").text(currentSentence);
    $("#target-letter").text(currentLetter);
    $("#keyboard-upper-container").hide();

    $(document).keydown(function(shift) {
        if(shift.keyCode === 16) {
            $('#keyboard-upper-container').show();
            $('#keyboard-lower-container').hide();
        }
    });
    
    $(document).keyup(function(shift) {
        $('.highlight').removeClass('hightlight');
        if(shift.keyCode === 16) {
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();
        }
    });

    $(document).keypress(function(e) {
            $('#' + e.keyCode).css('background-color', 'yellow');
    });

   
// })

