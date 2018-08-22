Site = {}

$(document).ready(function(){
  Site.current_slide = 1;
  Site.total_slides = parseInt($('#presentation_wrapper').data('count'))
  $('.slide_navigation').on('click', Site.jumpSlide)
  $(window).on('keydown', Site.navigateSlides);
});

Site.navigateSlides = function(){
  console.log('hello');
  if (event.keyCode == 37){
    Site.slidePrev();
  } else if (event.keyCode == 39){
    Site.slideNext();
  }
}

Site.slidePrev = function(){
  Site.current_slide = Site.current_slide - 1;
  if (Site.current_slide < 1){
    Site.current_slide = Site.total_slides
  }
  Site.renderNewSlide();
}

Site.slideNext = function(){
  Site.current_slide = Site.current_slide + 1;
  if (Site.current_slide > Site.total_slides){
    Site.current_slide = 1;
  }
  Site.renderNewSlide();
}

Site.jumpSlide = function(){
  Site.current_slide = $(this).data('slide');
  Site.renderNewSlide();
}

Site.renderNewSlide = function(){
  $('.slide_navigation').removeClass('current');
  $('.slide_navigation[data-slide=' + Site.current_slide + ']').addClass('current');
  $('.slide_container').removeClass('current');
  $('.slide_container[data-slide=' + Site.current_slide + ']').addClass('current')
}