Site = {}

$(document).ready(function(){
  Site.current_slide = 1;
  $('.slide_navigation').on('click', Site.jumpSlide)
});

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