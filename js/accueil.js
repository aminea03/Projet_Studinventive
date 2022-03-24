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

/* More section carousel */
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
	"--marquee-elements-displayed"
);
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
	marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
