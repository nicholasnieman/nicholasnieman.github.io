var layer1 = document.getElementById("l1"),
	layer2 = document.getElementById("l2"),
	layer3 = document.getElementById("l3"),
	layer4 = document.getElementById("l4");

function initParallax() {
    layer1.style.top = (window.pageYOffset / 1.5) + "px";
    layer2.style.top = (window.pageYOffset / 1.5) + "px";
    layer3.style.top = (window.pageYOffset / 2) + "px";
    layer4.style.top = (window.pageYOffset / 1.2) + "px";
    layer4.style.right = (window.pageYOffset) + "px";
}

window.addEventListener("scroll", initParallax);
