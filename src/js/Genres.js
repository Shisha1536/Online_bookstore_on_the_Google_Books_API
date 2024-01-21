const Genres = document.querySelectorAll('.genre-navigation__item');

Genres.forEach((elem)=>{
	elem.addEventListener('click',()=>{
        Genres.forEach(element => {
            element.classList = "";
            element.classList = "genre-navigation__item";
        });
        elem.classList = "genre-navigation__item2";
  })
})