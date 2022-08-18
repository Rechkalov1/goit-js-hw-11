import refs from './refs';
 


const createOnePicture=(picture)=>{
    
  
  
  return`<div class="photo-card">
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
  
  `
  
  };
 function listPost (array){
  return array.reduce((acc,animal)=>acc + createOnePicture(animal),"");}
  
  export default function insertCreatedAnimals (array) {
    const result = listPost(array);
    refs.gallery.insertAdjacentHTML('beforeend', result);
}