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
