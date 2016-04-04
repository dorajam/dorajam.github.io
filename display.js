// Dora Jambor
// My first attempts to get into JS
// Code is used for my personal website

// hide social icons with scroll down
$(window).scroll(function() {
	if ($(this).scrollTop()>0)
	{
		$('.icon').fadeOut();
	}
	else
	{
		$('.icon').fadeIn();
	}
});

// About -> hide home pic and bring in about section
function dropFunc1() {
	$('#image').fadeOut();
	$(".post-image-caption").fadeOut();
}
function homeFunc() {
	$('#image').fadeIn();
	$(".post-image-caption").fadeIn();
}
// Portfolio section
function dropFunc2() {
	// document.getElementById("portfolio").classList.toggle('show');
}
function dropFunc3() {
	document.getElementById("thoughts").classList.toggle('show');
}

window.onclick = function(event){
	// if (!event.target.matches('.menu')) {
	// 	var dropdowns = document.getElementsByClassName("dropdownList1");
	// 	for (var i=0; i <dropdowns.length; i++) {
	// 		var openDropdown = dropdowns[i];
	// 		if (openDropdown.classList.contains('show')) {
	// 			openDropdown.classList.remove('show');
	// 		}
	// 	}
	// }
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