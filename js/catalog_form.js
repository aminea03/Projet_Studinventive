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
