
// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists.json';

// 
const asyncFetch = async function () {
	try {
		const data = await fetch(url)
		const dataJson = await data.Json()
		console.log("Async/Await", data)
		console.log("Async/Await", dataJson)
	} catch (err) {
		console.log(err)
	}
}

// Get elements from form 
const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');

// Create function for Fetch to get books 
function getFiveBestsellers(responseJson) {
	console.log(responseJson);

	for (i = 0; i <= 5; i++) {
		let book = responseJson.results.books[i];
		const title = book.title;
		const author = book.author;
		const desc = book.description;
		console.log(title, author, desc)
	}
}

formEl.addEventListener('submit', function (e) {
	e.preventDefault();

	const year = yearEl.value;
	const month = monthEl.value;
	const day = dateEl.value; // edited this

	// Fetch bestselling books for date and add top 5 to page

	//Get date and name of book genre
	const date = `${year}-${month}-${day}`
	const name = "hardcover-fiction"

	const url = `https://api.nytimes.com/svc/books/v3/lists/${date}/${name}.json?api-key=${MY_API}`;

	fetch(url)
		.then(function (data) {
			return data.json();
		})
		.then(function (responseJson) {
			getFiveBestsellers(responseJson);
		})
})