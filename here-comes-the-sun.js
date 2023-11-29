
// Initialize rgb color to zero
let rgb = 0

// Set background color to increase after every repaint
const animate = function () {
	rgb++;
	
	if (rgb <= 255) {
		let bgColor = `background-color: rgb(${rgb}, ${rgb}, ${rgb})`;
		document.body.style = bgColor;
		requestAnimationFrame(animate);
	}
	console.log(end-start)
}

requestAnimationFrame(animate);



