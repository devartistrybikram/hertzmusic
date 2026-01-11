AOS.init({
	offset: 200,
	delay: 100,
	duration: 650,
	easing: 'ease-out-back',
	once: false,
	mirror: false,
	anchorPlacement: 'top-bottom'
});

$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 350) {
			$(".scrollToTop").addClass("d-flex").fadeIn();
		} else {
			$(".scrollToTop").removeClass("d-flex").fadeOut();
		}
	});

	$(".scrollToTop").click(function () {
		$("html, body").animate({ scrollTop: 0 }, 1200);
		return false;
	});
});


document.getElementById('videoModal').addEventListener('hidden.bs.modal', function () {
	console.log('Modal has been closed!');
	const player = new YT.Player('youtubePlayer', {
		events: {
			'onReady': function (event) {
				event.target.pauseVideo();
			}
		}
	});
});

setTimeout(function () {
	var modal = new bootstrap.Modal(document.getElementById('offerModal'));
	modal.show();
}, 2000);