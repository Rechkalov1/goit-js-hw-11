import getPosts from './js/fetchPicture'
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import Notiflix from 'notiflix';

const refs={
searchForm:document.querySelector('.search-form'),
input:document.querySelector('.input'),
gallery:document.querySelector('.gallery')
}









refs.searchForm.addEventListener('submit',searchImage)

const searchImage =(e)=>{

e.preventDefault();
const searchQuery = e.currentTarget.elements.searchQuery.value;
console.log(searchQuery)

}


const listPost =(list)=>list.reduce((acc,items)=>acc+postMarkup(items),"");
const postMarkup=(data)=>{
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



new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});