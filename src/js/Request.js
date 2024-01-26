import {q as genres} from './Genres.js';
import { buildingStructure } from "./FormationStructure.js";

const keyAPI ='AIzaSyDtpNURBxE_hqMVuZES4s-zKoDkjyYRLNk';
let indexBook = 0;
let url = `https://www.googleapis.com/books/v1/volumes?q="subject:${genres.data}"&key=${keyAPI}&printType=books&startIndex=${indexBook}&maxResults=6&langRestrict=en`;

export function requestingData() {
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let arrayBooks = data.items;
    buildingStructure(arrayBooks);
    url = `https://www.googleapis.com/books/v1/volumes?q="subject:${genres.data}"&key=${keyAPI}&printType=books&startIndex=${indexBook +=6}&maxResults=6&langRestrict=en`;
    debugger
  })
  .catch((err) => {
    console.log(err)
  })
}
requestingData()