var scrollingScreen = (function() {
  var screen = 0,
      $sectionsLeft = $('.sections__left'),
      $sectionsRight = $('.sections__right')
      sectionNumber = $('.sections__left').find('.section').length;
      scroll = true;
      console.log(sectionNumber);
  
  return {
    init: function() {
      $('body').on('mousewheel', function(event) {

        var positionLeft,
            positionRight;
        
        if (scroll) {
          
          if (event.deltaY > 0 && screen > 0) {
            
            screen--;
            scroll = false;
            // $('.header__container').css('opacity', 0);
          } else if (event.deltaY < 0 && screen < (sectionNumber - 1)) {
            
            screen++;
            scroll = false;
            // $('.header__container').css('opacity', 0);
          }

          if (screen == 3) {
              $('.arrow').fadeOut();
            } else {
              $('.arrow').fadeIn();
            }
          console.log(screen);
          positionLeft = (-screen * 100) + '%';
          positionRight = (screen*100) - 300 + '%';
          $sectionsLeft.css('top', positionLeft);
          $sectionsRight.css('top', positionRight);
          
        }
        
      });
      
      $('.sections').on('transitionend', function() {
        scroll = true;
        // $('.header__container').css('opacity', 0.2);
      });
      
    }
  }

}());

$(function() {
  scrollingScreen.init();
});