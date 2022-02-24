/*initialization*/
document.addEventListener("DOMContentLoaded", function () {
	var elems = document.querySelectorAll(".carousel");
	var instances = M.Carousel.init(elems, {
		duration: 1000,
		dist: 0,
		padding: 100,
		numVisible: 5,
		fullWidth: false,
		indicators: true,
	});

	/*autoplay*/
	let indicatorItems = document.querySelectorAll(".carousel .indicator-item"),
		slideTime = 3000,
		activeClass = "active";

	setInterval(() => {
		indicatorItems.forEach((el) => {
			if (el.classList.contains(activeClass)) {
				sib = el.nextElementSibling;
				if (sib == null) {
					indicatorItems[0].click();
				} else {
					sib.click();
				}
			}
		});
	}, slideTime);
});
