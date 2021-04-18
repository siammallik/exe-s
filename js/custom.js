$(function(){
//slider



  //preloader goes here
  $(window).on('load', function(){
    $('.preloader').delay(1500).fadeOut(500);
});


    $('.counter').counterUp({
        delay: 5,
        time: 500
    });

    $('.btn7').click(function(){
        $('.our-item2').slideToggle(500);   //Toggle btn7 here
    });
   
    $('.btn8').click(function(){
        $('.our-item2').slideToggle(500);   //Toggle btn8 here
       
   
    });
  
    $('.btn9').click(function(){
        $('.our-item2').slideToggle(500);  //Toggle btn9 here
       
    });

    $('.btn10').click(function(){
        $('.our-item2').slideToggle(500); //Toggle btn10 here
       
    });
 
    //back to top scrolling
    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop:0}, 1500);
    });   
    
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
    
        if(scrolling > 200){
            $('.back-to-top').fadeIn(500);
        }
        else {
            $('.back-to-top').fadeOut(500);
        }
     
    });
    //slider part goes here
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 60
                }, 1500);
                return false;
            }
        }
    });

    var html_body = $('html, body');
    $('.ending-menu a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 60
                }, 1500);
                return false;
            }
        }
    });

    //slider
    
  

});