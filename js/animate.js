jQuery(document).ready(function($){

	'use strict';
  var counterInit = function() {
		if ( $('.section-counter').length > 0 ) {
			$('.section-counter').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

					var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
					$('.number').each(function(){
						var $this = $(this),
							num = $this.data('number');
							console.log(num);
						$this.animateNumber(
						  {
						    number: num,
						    numberStep: comma_separator_number_step
						  }, 7000
						);
					});
					
				}

			} , { offset: '95%' } );
		}

	}
	counterInit();


	// yoma navbar
	
	// // Animsition
	// $(".animsition").animsition();
	
	
  
	
	// Show menu 
	if ($(window).width() > 768 ) {
	  $('body').removeClass('menu-open');
	  $('.js-templateux-menu').css('display', 'block');
	}
	// Window Resize
	$(window).resize(function(){
	  var $this = $(this);
	  $('.js-templateux-menu li').removeClass('staggard');
	  $('.js-toggle-menu').removeClass('is-active');
	  if ($this.width() > 768 ) {
		$('body').removeClass('menu-open');
		$('.js-templateux-menu').css('display', 'block');
		
	  } else {
		if ($this.width() < 768 ) {
		  $('.js-templateux-menu').css('display', 'none');
		}
	  }
	});
  
	// Hamburger Button 
	$('.js-toggle-menu').on('click', function(e){
		e.preventDefault();
		
	  var $this = $(this);
  
	  if ($('body').hasClass('menu-open')) {
		$this.removeClass('is-active');
		$('body').removeClass('menu-open');  
		$('.js-templateux-menu li').removeClass('staggard');
	  } else {
		$this.addClass('is-active');
		$('body').addClass('menu-open');  
  
		$('.js-templateux-menu li').each(function(k){
		  var $this = $(this);
		  setTimeout(function(){
			$this.addClass('staggard');
		  }, 100 * k );
		});
  
	  }
  
		if ( $('.templateux-menu').is(':visible') ) {
			$('.js-templateux-menu').fadeOut(300);
		} else {
			$('.js-templateux-menu').fadeIn(300);
		}
	})
  
});



