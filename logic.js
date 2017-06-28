var layer1    = document.getElementById("l1"),
	layer2    = document.getElementById("l2"),
	layer3    = document.getElementById("l3"),
	layer4 	  = document.getElementById("l4"),
	astronaut = document.getElementById("astronaut"),
	bio 	  = document.getElementById("bio"),
	devTools  = document.getElementById("dev-tools");
	
function initScrollEffects() {
   	parallax(layer1, 1.5);
   	parallax(layer2, 1.5);
   	parallax(layer3, 2);
    spaceFloat();
    slideIn(bio);
    slideIn(devTools);
}

function parallax(layer, speed) {
	layer.style.top = (window.pageYOffset / speed) + "px";
}

function spaceFloat() {
	parallax(layer4, 1.2);
    layer4.style.right = (window.pageYOffset) + "px";
    astronaut.style.width = (1800 - pageYOffset)/6 +"px";
}

function slideIn(element) {
	var windowBottom = window.innerHeight + window.pageYOffset;
	var elementBottom = element.clientHeight + element.offsetTop;
	if ((windowBottom >= elementBottom)&&(element.classList.contains("slide-left") === false)){
		element.className += "slide-left";
	}
}

window.addEventListener("scroll", initScrollEffects);
