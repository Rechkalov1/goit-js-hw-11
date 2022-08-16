import refs from './js/refs';
 const listPost =(list)=>list.reduce((acc,items)=>acc+postMarkup(items),"");
const CreateOnePicture=(data)=>{
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
  
  export default function insertCreatedAnimals (array) {
    const result = createListAnimals(array);
    refs.gallery.insertAdjacentHTML('beforeend', result);
}