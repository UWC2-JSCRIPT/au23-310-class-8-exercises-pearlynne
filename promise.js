
let randomNumPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		const num = Math.random();
		if (num > 0.5) {
			resolve(num);
		} else {
			reject(num);
		}
	}, 1000);
})

randomNumPromise
	.then((value) => {
		console.log("success", value);
	}).catch((value) => {
		console.log("failure", value);
	}).finally(() => {
		console.log("complete");
	})