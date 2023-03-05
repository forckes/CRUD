const BASE_URL = "http://localhost:3000";

const newBook = {
	title: "test book",
	author: "I",
	genres: ["Js"],
	rating: 10
};

function addBook(book) {
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(book)
	};
	return fetch(`${BASE_URL}/books`, options)
		.then(response => response.json())
		.then(console.log);
}
addBook(newBook);
addBook({
	title: "cssssssssssss",
	author: "I",
	genres: ["css"],
	rating: 1
}).catch(error => console.log(error));
