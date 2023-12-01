// Get elements from form 
const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');

// Create function for Fetch to get books 
function getFiveBestsellers(responseJson) {
	console.log(responseJson);

	const booksContainer = document.getElementById('books-container')
	booksContainer.innerText = ""

	// Get first 5 bestsellers 
	for (i = 0; i <= 5; i++) {

		let book = responseJson.results.books[i];

		// Create a paragraph element for each book
		const bookPEl = document.createElement('p');
		bookPEl.setAttribute("class", `bestseller-${i}`);

		// Create Span element to identify which bestseller 
		const spanHeader = document.createElement('span');
		spanHeader.setAttribute("style", 'font-weight: bold; text-decoration: underline');
		spanHeader.innerHTML = `#${i + 1} Hardcover Fiction Bestseller<br>`;

		// Create Span element for title 
		const spanTitle = document.createElement('span');
		spanTitle.classList.add("book-title");
		spanTitle.innerHTML = `<b>Title</b>: ${book.title} <br>`;

		// Create Span element for author
		const spanAuthor = document.createElement('span');
		spanAuthor.classList.add("book-author");
		spanAuthor.innerHTML = `<b>Author</b>: ${book.author}<br>`;

		// Create Span element for description
		const spanDesc = document.createElement('span');
		spanDesc.classList.add("book-description");
		spanDesc.innerHTML = `<b>Description</b>: ${book.description} <br>`;

		// Create image element for book image
		const imgEl = document.createElement("img");
		imgEl.src = `${book.book_image}`;

		// Append heading, title, author, descrition, and image to p element
		bookPEl.append(spanHeader, spanTitle, spanAuthor, spanDesc, imgEl);

		// Append p element to books-container div element
		const booksContainer = document.getElementById('books-container');
		booksContainer.appendChild(bookPEl);
	}
}

formEl.addEventListener('submit', function (e) {
	e.preventDefault();

	// Get date values from form
	const year = yearEl.value;
	const month = monthEl.value;
	const day = dateEl.value; // edited this

	// Fetch bestselling books for date and add top 5 to page

	//Get full date and name of book genre
	const date = `${year}-${month}-${day}`
	const name = "hardcover-fiction"

	// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
	const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists.json';
	const url = `https://api.nytimes.com/svc/books/v3/lists/${date}/${name}.json?api-key=${MY_API}`;

	fetch(url)
		.then(function (data) {
			return data.json();
		})
		.then(function (responseJson) {
			getFiveBestsellers(responseJson);
		})
})