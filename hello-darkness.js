// Initialize RGB
let rgb = 255;

// Set Interval to darkgen background ever 0.5 seconds
let darkenBackground = setInterval(() => {
	if (rgb > 0) {
		rgb--;
		document.body.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`;
	} else {
		clearInterval(darkenBackground);
	}
}, 500
)
