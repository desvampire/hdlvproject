// back_to_top button

$(document).ready(function() {
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 450,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');

    $side_icon = $('.side_icon');

  //hide or show the "back to top" link
  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if( $(this).scrollTop() > offset_opacity ) { 
      $back_to_top.addClass('cd-fade-out');
    }
  });  

  //hide or show the side_icons
  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $side_icon.addClass('side_icon-is-visible') : $side_icon.removeClass('side_icon-is-visible');
  });

  //smooth scroll to top
  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0 ,
      }, scroll_top_duration
    );
  });


//////////////////////////
////Flexsliders
//////////////////////////

      $('.heroslider').flexslider({
        animation: "slide",
        animationLoop: false,
        directionNav: false,
      });    

    $('.article_sidebar__lesson_slider').flexslider({
        animation: "slide",
        animationLoop: false,
        directionNav: false,
      });

$('.lessonslider').flexslider({
    animation: "slide",
    directionNav: false,
    controlNav: false,
    slideshow: false,
})

$('.prev').on('click', function(){
    $('.lessonslider').flexslider('prev')
    return false;
})

$('.next').on('click', function(){
    $('.lessonslider').flexslider('next')
    return false;
})    

// Hide inputs rave-form
$('input[type="text"]').focus(function() {
    $(this).removeClass("twelve-ph");
    $(this).removeClass("onninety-ph");
    $(this).removeClass("zero-ph");
});

//Scroll post header
$(window).scroll(function () {
     var sc = $(window).scrollTop()
    if (sc > 750) {
        $("#single_post__share_block").addClass("fixed-post-header")
    } else {
        $("#single_post__share_block").removeClass("fixed-post-header")
    }
});


$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 220) {
       $('.share-this-article').addClass('js-fixed-remove-share');
   }else{
       $('.share-this-article').removeClass('js-fixed-remove-share');
   }
});

});// .end $(document).ready(function()


