
// Get notice div
const notice = document.getElementById('maintenance-notice');

// Create setTimeOut 
setTimeout(() => {
	notice.remove();
}, 5000);