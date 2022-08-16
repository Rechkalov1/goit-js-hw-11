import NewGalleryApi from './fetchPicture';
import createOnePicture from './createListPicture';

import Notiflix from 'notiflix';
const axios = require('axios');

const newGalleryApi =  new NewGalleryApi()



refs.searchForm.addEventListener('submit',onSearchImage);
refs.loadMore.addEventListener('click',onLoadMore);
 refs.loadMore.classList.add('ishidden');


function onSearchImage(e){
  e.preventDefault();

 newGalleryApi.query = e.currentTarget.elements.query.value;
 newGalleryApi.resetPage();
 newGalleryApi.fetchImage();

};
function onLoadMore(){
newGalleryApi.fetchImage();
};

const createOnePicture=(data)=>{
  const {webformatURL,largeImageURL,tags,likes,views,comments,downloads} = data;
return`<div class="photo-card">
<a href='${largeImageURL}'>
<img src="${webformatURL}" alt="${tags}" loading="lazy" />
<div class="info">
  <p class="info-item">
    <b>Likes</b>${likes}
  </p>
  <p class="info-item">
    <b>Views</b>${views}
  </p>
  <p class="info-item">
    <b>Comments</b>${comments}
  </p>
  <p class="info-item">
    <b>Downloads</b>${downloads}
  </p>
</div>
</div>

`

};

const listPost =(list)=>list.reduce((acc,items)=>acc+createOnePicture(items),"");