import genres from './Genres.js';


const keyAPI ='AIzaSyDtpNURBxE_hqMVuZES4s-zKoDkjyYRLNk';
let indexBook = 0;
let url = `https://www.googleapis.com/books/v1/volumes?q="subject:${genres}"&key=${keyAPI}&printType=books&startIndex=${indexBook}&maxResults=6&langRestrict=en`

async function getMainActorProfileFromMovie() {
  try {
    const bookResponse = await fetch(url);
    const booksAPI = await bookResponse.json();
    let arrayBooks = booksAPI.items;
    debugger
  } catch (err) {
    console.error('Произошла ошибка!', err);
  }
}

getMainActorProfileFromMovie()
