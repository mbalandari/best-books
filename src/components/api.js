const API_KEY = process.env.REACT_APP_BESTBOOKS_API_KEY;
const base_url = "https://api.nytimes.com/svc/books/v3/lists/current";
export const list_base_url = `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${API_KEY}`;
export const test_url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-graphic-books.json?api-key=${API_KEY}`;

