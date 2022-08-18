import './css/style.css';
import Notiflix from 'notiflix';
import fetchImages from './js/API';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const refs = {
input: document.querySelector('input'),
form: document.querySelector('.search-form'),
buttonLoad: document.querySelector('.load-more'),
gallery: document.querySelector('.gallery'),
alert: document.querySelector('.alert')
}



refs.form.addEventListener('submit', formSubmit);
refs.buttonLoad.addEventListener('click', onLoadMoreBtn)

let isAlertVisible = false;
let nameSearch = refs.input.value;
let lightbox;
let currentPage = 1;

const totalPages = 500 / perPage;
console.log(totalPages);


refs.buttonLoad.classList.add('ishidden');



    
function formSubmit(e) {    
e.preventDefault()

refs.gallery.innerHTML = '';
nameSearch = refs.input.value;
nameSearch;


  fetchImages() 
    .then(images => {
      insertMarkup(images);
      currentPage += 1;
    }).catch(error => (console.log(error)))

    refs.buttonLoad.classList.remove('ishidden');
 
    lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    });
  }


function onLoadMoreBtn(){
    if (currentPage > totalPages) {
        refs.buttonLoad.classList.add('ishidden');
        return toggleAlertPopup();
    }

    nameSearch = refs.input.value;

    fetchImages() 
    .then(images => {
      insertMarkup(images);   
      currentPage += 1;})
    .catch(error => (console.log(error)))
}


const createMarkup = picture => `
  <div class="photo-card">
         <a href="${picture.largeImageURL}" class="gallery_link">
          <img class="gallery__image" src="${picture.webformatURL}" alt="${picture.tags}" width="370px" loading="lazy" />
          </a>
        <div class="info">
              <p class="info-item">
              <b>Likes<br>${picture.likes}</b>
              </p>
              <p class="info-item">
              <b>Views<br>${picture.views}</b>
              </p>
              <p class="info-item">
              <b>Comments<br>${picture.comments}</b>
              </p>
              <p class="info-item">
              <b>Downloads<br>${picture.downloads}</b>
              </p>
        </div>
    </div>
`;


function generateMarkup(  { arrayImages, totalHits }) {
    if (currentPage === 1) {
        Notiflix.Notify.success(`Hoooray! We found ${totalHits} images!`);
    }
    return arrayImages.reduce((acc, picture) => acc + createMarkup(picture), "") 
};


function insertMarkup(arrayImages) {
    const result = generateMarkup(arrayImages);
   
    refs.gallery.insertAdjacentHTML('beforeend', result);
 lightbox.refresh();
}


function toggleAlertPopup() {
    if (isAlertVisible) {
      return;
    }
    isAlertVisible = true;
    refs.alert.classList.add("is-visible");
    setTimeout(() => {
      refs.alert.classList.remove("is-visible");
      isAlertVisible = false;
    }, 3000);
  };