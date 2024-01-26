import genres from './Genres.js';
import { buildingStructure } from "./FormationStructure.js";

const keyAPI ='AIzaSyDtpNURBxE_hqMVuZES4s-zKoDkjyYRLNk';
let indexBook = 0;
let url = `https://www.googleapis.com/books/v1/volumes?q="subject:${genres}"&key=${keyAPI}&printType=books&startIndex=${indexBook}&maxResults=6&langRestrict=en`

export function requestingData() {
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let arrayBooks = data.items;
    buildingStructure(arrayBooks);
  })
  .catch((err) => {
    console.log(err)
  })
}
requestingData()