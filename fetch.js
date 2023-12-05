// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

const query = "cars"
const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${MY_API}`;


fetch(url)
	.then(function (data) {
		return data.json();
	})
	.then(function (responseJson) {

		let article = responseJson.response.docs[0];
		// console.log(article);

		// Insert Headline
		const mainHeadline = article.headline.main;
		document.getElementById('article-title').innerText = mainHeadline;

		//Insert snippet
		const snippet = article.snippet;
		document.getElementById('article-snippet').innerText = snippet;

		// Insert web link
		const webContent = article.web_url;
		let a = document.getElementById('article-link');
		a.href = webContent;

		// Insert image
		if (article.multimedia.length > 0) {
			const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
			document.getElementById('article-img').src = imgUrl;
		}
	});
