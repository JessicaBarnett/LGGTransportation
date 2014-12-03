// $(function() {
  $('#slides').slidesjs({
    width: 940,
    height: 528
  });

  $(".slidesjs-pagination-item a").empty().append($('<span class="fa fa-circle"></span>'));
  $(".slidesjs-previous").empty().append($('<span class="fa fa-chevron-left"></span>'));
  $(".slidesjs-next").empty().append($('<span class="fa fa-chevron-right"></span>'));

//********  Drawer for mobile nav  *********/

$.fn.Drawer = function($element){
	//drawer example at: http://www.savthecoder.com/blog/drawer-ui-jquery
	var browserWidth = $(document).width();
	var drawerIsOpen = false;

	function refreshBrowserWidth(){
		browserWidth = $(document).width();
	}

	function openDrawer(){
		$element.animate({
		        right: 0
		}, 300);
		drawerIsOpen = true;
	}

	function closeDrawer(){
	    $element.show();
	    $element.animate({
	        right: -(browserWidth * .5) //-50%
	    }, 300);
	    drawerIsOpen = false;
	}

	return {
		toggleDrawer: function () {
			refreshBrowserWidth();
		    if (drawerIsOpen) {
		        closeDrawer();
		    } else {
		        openDrawer();
		    }
		}

	}
}

function setNav(){

	var tabletMQ = window.matchMedia("screen and (max-width: 767px)");
	var drawer;

	function reset (){
		$(".mobileNavDrawer").remove();
		$(".hamburger").unbind();  
	}

	//creates mobile navigation.
	if (tabletMQ.matches){
		reset();
		$("body").prepend($('<nav class="mobileNavDrawer">' +
			'<ul>'+
				'<li><a class="mobileNavLink" href="index.html">Home</a></li>' +
				'<li><a class="mobileNavLink" href="about.html">About Us</a></li>' +
				'<li><a class="mobileNavLink" href="services.html">Services</a></li>' +
				'<li><a class="mobileNavLink" href="payment.html">Who Pays?</a></li> '+
				'<li><a class="mobileNavLink" href="schedule.html">Schedule a Transport</a></li>' +
				'<li><a class="mobileNavLink" href="contact.html">Contact Us</a></li>' +
			'</ul>' +
		'</nav>'));

		//creates drawer object to manipulate nav as a drawer
		drawer = $.fn.Drawer($(".mobileNavDrawer"));
		//adds click handler to open/close drawer
		$(".hamburger").click(drawer.toggleDrawer);

	}
	else{
		drawer = null;
		reset();
	}

}

//runs setNav when page is loaded, and every time the page is resized
$(window).ready(setNav);
$(window).resize(setNav);





// });