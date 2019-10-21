setFontSize();
window.addEventListener("resize", setFontSize, false);

function setFontSize() {
	var clientW = document.documentElement.clientWidth;
	if(clientW > 640) {
		clientW = 640
	}
	document.documentElement.style.fontSize = clientW / 6.4 + "px"
};