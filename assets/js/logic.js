$(document).ready(function() {
    $('.modal').modal();


    $('.carousel').carousel();

    $('.carousel').hide();

    $('.proj').click(function() {
        $('.carousel').toggle(1500)
    })
});