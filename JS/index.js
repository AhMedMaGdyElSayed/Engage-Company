$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $("html").scrollTop();
    console.log(scroll)
	  if (scroll > 100) {
      $(".navbar").addClass('scrolled');
      $(".navbar .container i").css({color: 'yellowgreen', 'letter-spacing':'1px', opacity:'1', 'font-size': '18px'});
      // $(".scrolled a i").hover(function(){
      //   $(this).css("color", "red");
      // });
    }
    else{
	    $(".navbar").removeClass('scrolled');
      $(".navbar .container i").css({color: 'white', 'letter-spacing':'10px', opacity:'0.5', 'font-size': '28px'});
      // $(".navbar a i").hover(function(){
      //   $(this).css("color", "yellowgreen");
      // });
    }
  });

  // smooth scroll
  $('.navbar-nav .nav-item .nav-link').click(function(){
    $('html, body').animate({
        scrollTop: $('#' + $(this).data('value')).offset().top - 60
    }, 1000);
    console.log($(this).data('value'));
  });
})


// console.log('ahmed')