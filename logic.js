var layer1    = document.getElementById("l1"),
	layer2    = document.getElementById("l2"),
	layer3   		= document.getElementById("l3"),
	layer4 	 	    = document.getElementById("l4"),
	astronaut 		= document.getElementById("astronaut"),
	bio 		    = document.getElementById("bio"),
	devTools 		= document.getElementById("dev-tools");
	
	
function initScrollEffects() {
   	parallax(layer1, 1.5);
   	parallax(layer2, 1.5);
   	parallax(layer3, 2);
    spaceFloat();
    slideUp(bio);
    // slideUp(devTools);
}

function parallax(layer, speed) {
	layer.style.top = (window.pageYOffset / speed) + "px";
}

function spaceFloat() {
	parallax(layer4, 1.2);
    layer4.style.right = (window.pageYOffset) + "px";
    astronaut.style.width = (1800 - pageYOffset)/6 +"px";
}

function slideUp(element) {
	var windowHeight = window.innerHeight;
	var windowBottom = windowHeight + window.pageYOffset;
	console.log(windowBottom);
	if ((windowBottom >= element.offsetTop)&&(element.classList.contains("in-view") === false)){
		console.log(element);
		element.className += "in-view";
	}
}

window.addEventListener("scroll", initScrollEffects);
