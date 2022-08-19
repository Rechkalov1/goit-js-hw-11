import axios from'axios';

export default class NewGalleryApi {
  constructor(){
this.searchQuery = '';
this.perPage = 40;
this.page = 1;
  }
  async fetchImage(){
   
    const URL="https://pixabay.com/api/";
    const KEY="29222910-b478f7ced416d0dc238ac2c9c";
    const PARAMETR ="image_type=photo&orientation=horizontal&safesearch=true"
    const REQUEST_URL = `${URL}?key=${KEY}&q=${this.searchQuery}&${PARAMETR}&per_page${this.perPage}page=${this.page}`
    
      const fetchRequest= await axios.get(REQUEST_URL);
      const response =  fetchRequest.data;
      
     
      return response;
    }
    
  
additionPage(){
  this.page += 1;
}
resetPage(){
  this.page =  1;
}
get query() {
  return this.searchQuery;
}

set query (newQuery) {
  this.searchQuery = newQuery;
}

};

















