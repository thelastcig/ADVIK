/* =================================
------------------------------------
	WebUni - Education Template
	Version: 1.0
 ------------------------------------ 
 ====================================*/


'use strict';


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");


	/*------------------
		Gallery item
	--------------------*/
	if($('.course-items-area').length > 0 ) {
		var containerEl = document.querySelector('.course-items-area');
		var mixer = mixitup(containerEl);
	}

});

(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});


	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Realated courses
	--------------------*/
    $('.rc-slider').owlCarousel({
		autoplay:true,
		loop: true,
		nav:true,
		dots: false,
		margin: 30,
		navText: ['', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
			},
			990:{
				items:3
			},
			1200:{
				items:4
			}
		}
	});


    /*------------------
		Accordions
	--------------------*/
	$('.panel-link').on('click', function (e) {
		$('.panel-link').removeClass('active');
		var $this = $(this);
		if (!$this.hasClass('active')) {
			$this.addClass('active');
		}
		e.preventDefault();
	});



	/*------------------
		Circle progress
	--------------------*/
	$('.circle-progress').each(function() {
		var cpvalue = $(this).data("cpvalue");
		var cpcolor = $(this).data("cpcolor");
		var cptitle = $(this).data("cptitle");
		var cpid 	= $(this).data("cpid");

		$(this).append('<div class="'+ cpid +'"></div><div class="progress-info"><h2>'+ cpvalue +'%</h2><p>'+ cptitle +'</p></div>');

		if (cpvalue < 100) {

			$('.' + cpid).circleProgress({
				value: '0.' + cpvalue,
				size: 176,
				thickness: 9,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		} else {
			$('.' + cpid).circleProgress({
				value: 1,
				size: 176,
				thickness: 9,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		}

	});

})(jQuery);
























  const navbarMenu = document.getElementById('navbar');
const burgerMenu = document.getElementById('burger');
const overlayMenu = document.getElementById('overlay');

// Toggle Menu Function
burgerMenu.addEventListener('click', toggleMenu);
overlayMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
	navbarMenu.classList.toggle('active');
	overlayMenu.classList.toggle('active');
}

// Collapse SubMenu Function
navbarMenu.addEventListener('click', (e) => {
	if (e.target.hasAttribute('data-toggle') && window.innerWidth <= 992) {
		e.preventDefault();
		const menuItemHasChildren = e.target.parentElement;

		// If menu-item-child is Expanded, then Collapse It
		if (menuItemHasChildren.classList.contains('active')) {
			collapseSubMenu();
		} else {
			// Collapse the Existing Expanded menu-item-child
			if (navbarMenu.querySelector('.menu-item-child.active')) {
				collapseSubMenu();
			}
			// Expanded the New menu-item-child
			menuItemHasChildren.classList.add('active');
			const subMenu = menuItemHasChildren.querySelector('.sub-menu');
			subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
		}
	}
});

function collapseSubMenu() {
	navbarMenu.querySelector('.menu-item-child.active .sub-menu').removeAttribute('style');
	navbarMenu.querySelector('.menu-item-child.active').classList.remove('active');
}

// Fixed Resize Screen Function
window.addEventListener('resize', () => {
	if (this.innerWidth > 992) {
		// If navbarMenu is Open, then Close It
		if (navbarMenu.classList.contains('active')) {
			toggleMenu();
		}

		// If menu-item-child is Expanded, then Collapse It
		if (navbarMenu.querySelector('.menu-item-child.active')) {
			collapseSubMenu();
		}
	}
});
