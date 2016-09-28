

$('#about').on('click', function(){
    ///remove old
    $('.navlink').removeClass('selected');
    $('.secondary').removeClass('selected');
    $('.contact').removeClass('selected');
////////////////

    $('#about').addClass('selected');
    $('.about-headers').addClass('selected-about');
});



$('#work').on('click' , function () {
    ///remove old
    $('.navlink').removeClass('selected');
    $('.about-headers').removeClass('selected-about');
    $('.contact').removeClass('selected');
    /////
    $('#work').addClass('selected');
    $('.secondary').addClass('selected');

    console.log('works');
});

$('#contact').on('click' , function () {
    ///remove old
    $('.navlink').removeClass('selected');
    $('.about-headers').removeClass('selected-about');
    $('.secondary').removeClass('selected');

    //////////

    $('#contact').addClass('selected');
    $('.contact').addClass('selected');

    console.log('works');
});

$("#logo").on('click', function(){
    $('.navlink').removeClass('selected');
    $('.about-headers').removeClass('selected-about');
    $('.secondary').removeClass('selected');
    $('.contact').removeClass('selected');

    // $("#about").html("<li class='li-about'>sobre</li>")

});
