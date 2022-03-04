$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll', function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 30){
            $('.header').css({'background':'#f5b642', 'box-shadow': '0 .2rem .5rem rgba(0,0,0,.4)'});
        }else{
            $('.header').css({'background':'none', 'box-shadow': 'none'});
        }
    });

    $('.accordion-header').click(function(){
        $('.accordion .accordion-body').slideUp();
        $(this).next('.accordion-body').slideDown();
        $('.accordion .accordion-header span').text('+');
        $(this).children('span').text('-');
    });


});


function showhidden(){
    let hiddenInfo = document.getElementById("hidden");
    if (hiddenInfo.style.display === "none") {
        hiddenInfo.style.display = "block";
        document.getElementById('read-btn').innerHTML = "Read Less";
      } else {
        hiddenInfo.style.display = "none";
        document.getElementById('read-btn').innerHTML = "Read More";
      }
    
}
function showAddInfo(){
    let additionalInfo = document.getElementById("additional"); 
    if (additionalInfo.style.display === "none") {
        additionalInfo.style.display = "block";
        document.getElementById('read-button').innerHTML = "Read Less";
      } else {
        additionalInfo.style.display = "none";
        document.getElementById('read-button').innerHTML = "Read More";
      }
}