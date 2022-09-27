// ページのロードが終わった後の処理
$(window).load(function () {

	/*----------------------------
		Anchor link
	----------------------------*/
	$('nav a[href*=#],.pagetop a[href*=#]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') &&　location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length && target;
			if (target.length) {
				var sclpos = 30;
				var scldurat = 600;
				var targetOffset = target.offset().top - sclpos;
				$('html,body').animate({scrollTop: targetOffset}, {duration: scldurat, easing: "easeInOutCubic"});
				return false;
			}
		}
	});

	$('.p-index__live-list ul').slick({ //{}を入れる
		autoplay: true,
		slidesToShow: 5,
		prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="./assets/img/index/icn_live-prev_01.svg" class="slide-arrow prev-arrow"></button>',
		nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="./assets/img/index/icn_live-next_01.svg" class="slide-arrow prev-arrow"></button>',
    responsive: [{
      breakpoint: 920,
      settings: {
        slidesToShow: 3,
      }
    }]
	});
	
});