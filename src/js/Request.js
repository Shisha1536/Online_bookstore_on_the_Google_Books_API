import genres from './Genres.js';
import { buildingStructure } from "./FormationStructure.js";

const books = document.getElementsByClassName('books');
const keyAPI ='AIzaSyDtpNURBxE_hqMVuZES4s-zKoDkjyYRLNk';
let indexBook = 0;
let url = `https://www.googleapis.com/books/v1/volumes?q="subject:${genres}"&key=${keyAPI}&printType=books&startIndex=${indexBook}&maxResults=6&langRestrict=en`


async function requestingData() {
  try {
    const bookResponse = await fetch(url);
    const booksAPI = await bookResponse.json();
    let arrayBooks = booksAPI.items;
    debugger
    let B = buildingStructure(arrayBooks);
  } catch (err) {
    console.error('Произошла ошибка!', err);
  }
}

requestingData();

export default requestingData();