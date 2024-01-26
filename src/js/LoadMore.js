import { requestingData } from "./Request";

const btnLoadMore = document.querySelector('.loading-animation-block__Btn');
const loadingAnimation = document.querySelector('.loading-animation-block__loader');
btnLoadMore.addEventListener('click', () =>{
    btnLoadMore.style.display = 'none';
    loadingAnimation.style.display = 'inline-block';
    debugger
    requestingData();
    btnLoadMore.style.display = 'block';
    loadingAnimation.style.display = 'none';
});