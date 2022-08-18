import NewGalleryApi  from "./js/fetchPicture";
import Notiflix from 'notiflix';
import { refresh,lightboxCreate } from "./js/lightBox";
import "./css/style.css";
const newGalleryApi =  new NewGalleryApi()




const refs={
    searchForm:document.querySelector('.search-form'),
    input:document.querySelector('.input'),
    gallery:document.querySelector('.gallery'),
    loadMore:document.querySelector(".load-more")
    };
    const buttonHiden =()=> refs.loadMore.classList.add('ishidden');
    const buttonVisible =()=> refs.loadMore.classList.remove('ishidden');

    refs.searchForm.addEventListener('submit',onSearchImage);
    refs.loadMore.addEventListener('click',onLoadMore);

    async function responseData() {
      const response= await newGalleryApi.fetchImage();
      insertCreatedAnimals(response.hits);
    }
    buttonHiden();
    function onSearchImage(e){
        e.preventDefault();
      
       newGalleryApi.query = e.currentTarget.elements.query.value;
       newGalleryApi.resetPage();
       newGalleryApi.fetchImage();
       responseData()
       buttonVisible();
     
      };

      function onLoadMore(){
        newGalleryApi.fetchImage();
        responseData()
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
      lightboxCreate();
   
  };
