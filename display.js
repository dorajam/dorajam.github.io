// Dora Jambor
// My first attempts to get into JS
// Code is used for my personal website

var Thoughts_Dropdown = ["Recurse Center"];
var Portfolio_Dropdown = ["OpenCV", "Website", "Neural Networks", "Random"];

// hide social icons with scroll down
$(window).scroll(function() {
	if ($(this).scrollTop()>0)
	{
		$('.head').fadeOut();
	}
	else
	{
		$('.head').fadeIn();
	}
});

function dropFunc1() {
	 document.getElementById("about").classList.toggle('show');
}
function dropFunc2() {
	 document.getElementById("portfolio").classList.toggle('show');
}
function dropFunc3() {
	 document.getElementById("thoughts").classList.toggle('show');
}

window.onclick = function(event){
	if (!event.target.matches('.menu')) {
		var dropdowns = document.getElementsByClassName("dropdownList0");
		for (var i=0; i <dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}
window.onclick = function(event){
	if (!event.target.matches('.menu')) {
		var dropdowns = document.getElementsByClassName("dropdownList1");
		for (var i=0; i <dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}
window.onclick = function(event){
	if (!event.target.matches('.menu')) {
		var dropdowns = document.getElementsByClassName("dropdownList2");
		for (var i=0; i <dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}


