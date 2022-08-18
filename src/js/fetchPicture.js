import axios from'axios';

export default class NewGalleryApi {
  constructor(){
this.searchQuery = '';
this.per_page = 40;
this.page = 1;
  }
  async fetchImage(){
   console.log(this)
    const URL="https://pixabay.com/api/";
    const KEY="29222910-b478f7ced416d0dc238ac2c9c";
    const REQUEST_URL = `${URL}?key=${KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page${this.per_page}page=${this.page}`
    
      const fetchRequest= await axios.get(REQUEST_URL);
      const response = await fetchRequest.data;
      this.additionPage()
     
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

















