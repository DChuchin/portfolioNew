var scrollingScreen = (function() {
	var screen = 0,
			$sectionsLeft = $('.sections__left'),
			$sectionsRight = $('.sections__right')
			sectionNumber = $('.sections__left').find('.section').length;
			scroll = true,
			arrowDown = $('.arrow_down'),
			arrowUp = $('.arrow_up'),
			console.log(sectionNumber);
	
	return {
		init: function() { 

			$('body').on('mousewheel', _scroll);
			arrowDown.on('click', function() {
				screen++;
				_scrolling();
				console.log('down');
				_isHidden();
			});
			arrowUp.on('click', function() {
				screen--;
				_scrolling();
				console.log('up');
				_isHidden();
			});

			$('.work__item').on('mouseenter', _hoverColor);
			$('.work__item').on('mouseleave', function() {
				console.log('out');
													$( this ).find('.work__link').css('background-color', 'transparent');
												});

			function _hoverColor() {
				
				var 
					red = Math.round(Math.random() * 200),
					green = Math.round(Math.random() * 200),
					blue = Math.round(Math.random() * 200),
					color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
				$( this ).find('.work__link').css('background-color', color);
			}

			function _isHidden () {
					if (screen == 3) {
							arrowDown.fadeOut();
						} else {
							arrowDown.fadeIn();
					};

					if (screen == 0) {
						arrowUp.fadeOut();
					} else {
						arrowUp.fadeIn();
					};
				}
			

			function _scrolling () {
				positionRight = (-screen * 100) + '%';
				positionLeft = (screen*100) - 300 + '%';
				$sectionsLeft.css('top', positionLeft);
				$sectionsRight.css('top', positionRight);
			}


			 function _scroll(event) {
			 	var positionLeft,
					positionRight;
				if(window.matchMedia('(min-width: 960px)').matches) {
					if (scroll) {
					
					if (event.deltaY > 0 && screen > 0) {
						
						screen--;
						scroll = false;
						// $('.header__container').css('opacity', 0);
					} else if (event.deltaY < 0 && screen < (sectionNumber - 1)) {
						
						screen++;
						scroll = false;
						// $('.header__container').css('opacity', 0);
					};

					_isHidden();


					console.log(screen);
					_scrolling();
					
				}
				}
				
			 }
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