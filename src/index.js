import NewGalleryApi  from "./js/fetchPicture";
import Notiflix from 'notiflix';
import {lightBoxCreate } from "./js/lightBox";
import "./css/style.css";
const newGalleryApi =  new NewGalleryApi()




const refs={
    searchForm:document.querySelector('.search-form'),
    input:document.querySelector('.input'),
    gallery:document.querySelector('.gallery'),
    loadMore:document.querySelector(".load-more")
    };
    const buttonHidden =()=> refs.loadMore.classList.add('ishidden');
    const buttonVisible =()=> refs.loadMore.classList.remove('ishidden');
    
    


    refs.searchForm.addEventListener('submit',onSearchImage);
    refs.loadMore.addEventListener('click',onLoadMore);

    async function responseData() {
    
        const response = await newGalleryApi.fetchImage();
        insertCreatedAnimals(response.hits);
        notification(response);
      
    }
    buttonHidden();
    function onSearchImage(e){
        e.preventDefault();
      
       newGalleryApi.query = e.currentTarget.elements.query.value;
       newGalleryApi.resetPage();
       newGalleryApi.fetchImage();

       responseData()
       buttonVisible();
       clearArticleContainer()
    

     }

   

      function onLoadMore(){
    
          newGalleryApi.fetchImage();
          responseData()
          refresh ()
       
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

    return arrayImages.reduce((acc,picture)=>acc + createOnePicture(picture),"");
  };
    
  function insertCreatedAnimals (arrayImages) {
      const result = generateMarkup(arrayImages);
      refs.gallery.insertAdjacentHTML('beforeend', result);
      lightBoxCreate()
   
  };

  function notification(response){
    const totalPage = Math.ceil(response.totalHits / newGalleryApi.perPage);
    console.log(totalPage)
    if (response.totalHits === 0) {
      Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
      buttonHidden();
      clearArticleContainer();
    } 
    else if (newGalleryApi.page >= totalPage){
        buttonHidden();
       Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
       return;
  
    } 
  };
const  clearArticleContainer=()=> refs.gallery.innerHTML = '';
