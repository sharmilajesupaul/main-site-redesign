/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$( "#blogAccordion" ).accordion({
  active: 2,
  collapsible: true
});

$('.blog-title').on('click', function () {
	var icon = $(this).children('i')
	icon.toggleClass('fa-plus').toggleClass('fa-minus');

	if(icon.hasClass('fa-minus')){
		icon.css('color', 'red');
	}else{
		icon.css('color', 'green')
	}

    // var isEnabled = $this.hasClass("fa-plus"); // Get toggle state
    // if (isEnabled) {                           // Example
    //     icon.addClass('fa-minus')
    // } else {
    //     icon.addClass('fa-plus')
    // }
});



