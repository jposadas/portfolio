$(document).ready(function() {

    $('#portfolio').show();

    $('.page-link').click(function(event) {
        event.preventDefault();
        var pageID = $(this).attr('data-page');
        $('.page-link').removeClass('green');
        $(this).addClass('green');
        $('.template').hide();
        $('#' + pageID).show();

    });

    $('.main-content .link').hover(function(event) {
        var src = $(this).attr('data-src');
        $('.main-content').css('background-image', 'url("' + src+ '")');
    }, function() {
        $('.main-content').css('background-image', 'none');
    });

});