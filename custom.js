$(document).ready(function() {

    $('#portfolio').show();

    $('.page-link').click(function(event) {
        var pageID = $(this).attr('data-page');
        $('.page-link').removeClass('green');
        $(this).addClass('green');
        $('.template').hide();
        $('#' + pageID).show();

    });

    var pictureMode = false;

    $('.main-content .link').hover(function(event) {
        var src = $(this).attr('data-src');
        $('.main-content').css('background-image', 'url("' + src+ '")');
        $('.main-content #about').css('opacity', '0');
        pictureMode = true;

     });

    $('.main-content').mousemove(function(event) {
        event.stopPropagation();
        if (pictureMode && $(event.target).hasClass('link') == false) {
            // console.log(event.target);
            console.log('movin');
            $('.main-content').css('background-image', 'none');
            $('.main-content #about').css('opacity', '1.0');
            pictureMode = false;
        } else {
            console.log('Whats good');
        }
    });

    

     //, function() {
    //     $('.main-content').css('background-image', 'none');
    //     $('#about').show();
    // });

});