/* nav "Formation" dropdown initializer */
document.addEventListener("DOMContentLoaded", function () {
	var elems = document.querySelectorAll(".dropdown-trigger");
	var instances = M.Dropdown.init(elems, {
		hover: true,
		coverTrigger: false,
		autoTrigger: false,
		onCloseEnd: function () {
			document.activeElement.blur();
		},
	});
});

/* makes header sticky on upscroll only */
let lastscrollvalue;
window.addEventListener("scroll", function () {
	var a = document.querySelector("html");
	if (lastscrollvalue == undefined) {
		lastscrollvalue = a.scrollTop;
		// sets lastscrollvalue
	} else if (a.scrollTop > lastscrollvalue) {
		// downscroll rule
		lastscrollvalue = a.scrollTop;
		document.querySelector("header").style.position = "";
	} else if (a.scrollTop < lastscrollvalue) {
		// upscroll rule
		lastscrollvalue = a.scrollTop;
		document.querySelector("header").style.position = "sticky";
	}
});
