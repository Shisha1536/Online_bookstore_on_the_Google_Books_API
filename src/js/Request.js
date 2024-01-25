import genres from './Genres.js';
import { buildingStructure } from "./FormationStructure.js";

const books = document.getElementsByClassName('books');
const keyAPI ='AIzaSyDtpNURBxE_hqMVuZES4s-zKoDkjyYRLNk';
let indexBook = 0;
let url = `https://www.googleapis.com/books/v1/volumes?q="subject:${genres}"&key=${keyAPI}&printType=books&startIndex=${indexBook}&maxResults=6&langRestrict=en`

//const bookResponse = fetch(url)
//const booksAPI =  bookResponse.json();
//let arrayBooks = booksAPI.items;

//let B = buildingStructure(arrayBooks);
function requestingData() {
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    debugger
    let arrayBooks = data.items;
    arrayBooks.forEach(element => {
      console.log(element);
    });
  })
  .catch((err) => {
    console.log(err)
  })
}
requestingData()
//export default requestingData();