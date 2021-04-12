


//! Плавный скрол
$(document).on("click", ".slider__link", function(e) {
	e.preventDefault();
	let id  = $(this).attr('href');
	let top = $(id).offset().top;
	$('body, html').animate({scrollTop: top}, 800);

	$('.slider__link').removeClass('_active');
	$(this).addClass('_active');
});



//! Определение поддержки браузером формата webp для использования webp в свойстве background-image в scss
function testWebP(callback) {

	let webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});
/////////////////////////////////////////////////////////////////