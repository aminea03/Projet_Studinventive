/*Reviews section carousel Initialization*/
document.addEventListener("DOMContentLoaded", function () {
	var elems = document.querySelectorAll(".reviews_section .carousel");
	var instances = M.Carousel.init(elems, {
		duration: 300,
		dist: 0,
		padding: 100,
		fullWidth: false,
		indicators: true,
	});
});

/*More section carousel Initialization*/
document.addEventListener("DOMContentLoaded", function () {
	var elems = document.querySelectorAll(".more_section .carousel");
	var instances = M.Carousel.init(elems, {
		duration: 1000,
		dist: 0,
		padding: 100,
		numVisible: 5,
		fullWidth: false,
		indicators: true,
	});

	/*More section carousel Autoplay*/
	let indicatorItems = document.querySelectorAll(
			".more_section .carousel .indicator-item"
		),
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

/* Catalog form */

function catalog_form_open() {
	document.querySelector(".catalog_form_container").style.display = "flex";
}

function catalog_form_close() {
	document.querySelector(".catalog_form_container").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
	var elems = document.querySelectorAll(".modal");
	var instances = M.Modal.init(elems);
});
