import NewGalleryApi  from "./js/fetchPicture";
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const newGalleryApi =  new NewGalleryApi()




const refs={
    searchForm:document.querySelector('.search-form'),
    input:document.querySelector('.input'),
    gallery:document.querySelector('.gallery'),
    loadMore:document.querySelector(".load-more")
    };


    refs.searchForm.addEventListener('submit',onSearchImage);
    refs.loadMore.addEventListener('click',onLoadMore);


    function onSearchImage(e){
        e.preventDefault();
      
       newGalleryApi.query = e.currentTarget.elements.query.value;
       newGalleryApi.resetPage();
       newGalleryApi.fetchImage();
       insertCreatedAnimals();
       
     
      };

      function onLoadMore(){
        newGalleryApi.fetchImage();
        insertCreatedAnimals();
        };

        const createOnePicture=picture=>
    `<div class="photo-card">
  <a href='${picture.largeImageURL}'>
  <img src="${picture.webformatURL}" alt="${picture.tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>${picture.likes}
    </p>
    <p class="info-item">
      <b>Views</b>${picture.views}
    </p>
    <p class="info-item">
      <b>Comments</b>${picture.comments}
    </p>
    <p class="info-item">
      <b>Downloads</b>${picture.downloads}
    </p>
  </div>
  </div>
  
  `;

  
 function generateMarkup (arrayImages){
// 
    return arrayImages.reduce((acc,picture)=>acc + createOnePicture(picture),"");
  };
    
  function insertCreatedAnimals (arrayImages) {
      const result = generateMarkup(arrayImages);
  
      refs.gallery.insertAdjacentHTML('beforeend', result);
   
  };
