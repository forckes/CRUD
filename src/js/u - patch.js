const BASE_URL = "http://localhost:3000";

function fetchBookById(update, bookId) {
	const options = {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(update)
	};
	return fetch(`${BASE_URL}/books/${bookId}`, options)
		.then(res => res.json())
		.then(console.log);
}

fetchBookById({ genres: ["Css"] }, 16);
