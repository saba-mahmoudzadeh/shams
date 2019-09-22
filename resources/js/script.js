




$(window).scroll(function(){
    if($(this).scrollTop()>550){
      $("nav").addClass("sticky")
    }else {
      $("nav").removeClass("sticky")
    }
  });
 /*scroll*/
 $(".hngplan").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-signup").offset().top},
        1000);
      });
      $(".mreplan").click(function() {
        $('html,body').animate({
            scrollTop: $(".section-food").offset().top},
            1000);
          });
/* navigation scroll */

$(function() {
    $('.smoothScroll').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
  
/*animate*/
$(".animate1").waypoint(function(direction){
  $(".animate1").addClass("animated fadeIn");
},{
  offset:'50%'
})

$(".animate2").waypoint(function(direction){
  $(".animate2").addClass("animated fadeIn");
},{
  offset:'50%'
})

$(".animate3").waypoint(function(direction){
  $(".animate3").addClass("animated fadeInUp");
},{
  offset:'50%'
})

$(".animate4").waypoint(function(direction){
  $(".animate4").addClass("animated pulse");
},{
  offset:'50%'
})
$(".mobile-nav-icon").click(function(){
  $(".main-nav").slideToggle(200)
  var icon = $(".mobile-nav-icon i")
  if (icon.hasClass("ion-navicon-round")) {
    icon.addClass("ion-close-round")
    icon.removeClass("ion-navicon-round")
  }else {
    icon.removeClass("ion-close-round")
    icon.addClass("ion-navicon-round")
  }
})


 