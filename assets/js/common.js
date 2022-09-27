$(document).ready(function(){
	//top slider
	$('.p-top__slider').slick({
		dots: true,
		infinite: true,
		touchThreshold : 100,
		centerMode: true,
		centerPadding: '23.33333%',
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		nextArrow: '',
		prevArrow: '',
		responsive: [{
			
		}]
	});

	//slider product-details
	$('.p-product-details__slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		nextArrow: false,
		prevArrow: false,
	});
	

	//custom qty
	(function() {
		window.inputNumber = function(el) {
			var min = el.attr('min') || false;
			var max = el.attr('max') || false;
			var els = {};
		
			els.dec = el.prev();
			els.inc = el.next();
		
			el.each(function() {
			init($(this));
			});
		
			function init(el) {
		
				els.dec.on('click', decrement);
				els.inc.on('click', increment);
		
				function decrement() {
					var value = el[0].value;
					value--;
					if(!min || value >= min) {
						el[0].value = value;
					}
				}
				function increment() {
					var value = el[0].value;
					value++;
					if(!max || value <= max) {
						el[0].value = value++;
					}
				}
			}
		}
	})();
	  
	inputNumber($('.input-number'));

	//customs qty2
	$('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="./assets/img/common/icn_btn-up.svg"></div><div class="quantity-button quantity-down"><img src="./assets/img/common/icn_btn-down.svg"></div></div>').insertAfter('.quantity input');
	$('.quantity').each(function() {
		var spinner = jQuery(this),
			input = spinner.find('input[type="number"]'),
			btnUp = spinner.find('.quantity-up'),
			btnDown = spinner.find('.quantity-down'),
			min = input.attr('min'),
			max = input.attr('max');

		btnUp.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
			var newVal = oldValue;
			} else {
			var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
			var newVal = oldValue;
			} else {
			var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});
})


