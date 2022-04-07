/* Desktop nav "Formation" dropdown initializer */

document.addEventListener("DOMContentLoaded", function () {
	var elems = document.querySelectorAll(".dropdown-trigger:not(.nohover div .dropdown-trigger)");
	var instances = M.Dropdown.init(elems, {
		hover: true,
		coverTrigger: false,
		autoTrigger: false,
	});
});

/* Mobile sidenav initializer */

document.addEventListener("DOMContentLoaded", function () {
	var elems = document.querySelectorAll(".sidenav");
	var instances = M.Sidenav.init(elems, {
		edge: "right",
	});
});

/* Collapsible accordions initializer */
document.addEventListener("DOMContentLoaded", function () {
	var elems = document.querySelectorAll(".collapsible");
	var instances = M.Collapsible.init(elems, { accordion: false });
});
