$(document).ready(function () {
  let topbtn = $(".img-top");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      topbtn.fadeIn(500);
    }
    else{
        topbtn.fadeOut(500);
    }

    topbtn.click(function(){
        $('html').animate({
            scrollTop : 0,
        },3000)
    })
  });
});
