

// placeholder-focus
 $(document).ready(function () {
 $('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });
 });

$(document).ready(function(){
	$('#fp-nav').hover(
		function(){$('.fp-tooltip-block').toggleClass('show-right')} 
	);
});

$(document).ready(function(){
	$('#fp-nav-only-no-scroller').hover(
		function(){$('.fp-tooltip-block').toggleClass('show-right')} 
	);
});

$(function(){
$('div#fp-nav-only-no-scroller li a').on('click', function(e){
  	$('#fp-nav').removeClass('left-section');
	$('#fp-nav').removeClass('active-fps');
	$('.button-nav').removeClass('actives');
	$('#fp-nav-only-no-scroller').removeClass('left-section');
	$('#fp-nav-only-no-scroller').removeClass('active-fps');	
	$('.bg-mobile-left').removeClass('active-fps');
	$('.bg-mobile-left').removeClass('show-bs');
	$('.fp-tooltip-block').removeClass('active-fps');
	$('.fp-tooltip-block').removeClass('show-right');	 
	$('.lang-section').removeClass('active-fps');
	$('.lang-section').removeClass('left-section');	
  e.preventDefault();
});
});
	



	
$(function(){
$('div#fp-nav-only-no-scroller li a').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#section3').offset().top }, 700);
    $('div#fp-nav-only-no-scroller li a').removeClass('active');
  $(this).addClass('active');
});
});




	
$(function(){
$('.accordion-block').on('click', function(e){
  $(this).toggleClass( "show-accordion" );
});
 });	
		
$(".slick-active").first().css("background-color", "green");

		

// mobile-viewport
if(screen.width<=400){
            $('head').append('<meta name="viewport" content="width=400, telephone=no, user-scalable=0" />');
        } else {
            $('head').append('<meta name="viewport" content="width=device-width, telephone=no">');
        }
        $(window).on("orientationchange",function(){
          if(window.orientation == 0) // Portrait 
          {
            $('head').append('<meta name="viewport" content="width=device-width,  telephone=no">');
          } else // Landscape 
          {
            $('head').append('<meta name="viewport" content="width=device-width,  telephone=no">');
          }
});


$(window).load(function() { // makes sure the whole site is loaded
			$('#status').fadeOut(); // will first fade out the loading animation
				$('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
		});
		
		
$(window).load(function() {
	$('#right-section').addClass('right-section');
});
$(window).load(function() {
	$('.lang-section').addClass('left-section');
});



	$(window).load(function() {
	$('#fp-nav').addClass('left-section');
});

	$(window).load(function() {
	$('#fp-nav-only-no-scroller').addClass('left-section');
});

	$(window).load(function() {
	$('.section-container h1').addClass('left-section');
});
	$(window).load(function() {
	$('#section0 h2').addClass('left-section-slow');
});

	$(window).load(function() {
	$('.section1-img').addClass('fade-sl');
});


	$(window).load(function() {
	$('.info-block-area').addClass('left-section-slow');
});

	$(window).load(function() {
	$('.main-img').addClass('main-img-sl');
});

	$(window).load(function() {
	$('.bonus-sale-card').addClass('bonus-sale-card-show');
});


	$(window).load(function() {
	$('.arrow-panel').css("display","block");
});




	$(window).load(function() {
	$('.logo strong').addClass('left-section');
});

	$(window).load(function() {
	$('#fullpage').addClass('show-blocks');
});

$(function(){		
$('.button-nav').click(function(){
$('.button-nav').toggleClass('actives');
	$('#fp-nav').removeClass('left-section');
	$('#fp-nav').toggleClass('active-fps');
	$('#fp-nav-only-no-scroller').removeClass('left-section');
	$('#fp-nav-only-no-scroller').toggleClass('active-fps');	
	$('.bg-mobile-left').toggleClass('active-fps');
	$('.bg-mobile-left').toggleClass('show-bs');
	$('.fp-tooltip-block').toggleClass('active-fps');
	$('.fp-tooltip-block').removeClass('show-right');	 
	$('.lang-section').toggleClass('active-fps');
	$('.lang-section').removeClass('left-section');	


	
})
   }); 







