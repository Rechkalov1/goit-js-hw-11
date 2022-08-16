const axios = require('axios').default;
const URL="https://pixabay.com/api/";
const KEY="29222910-b478f7ced416d0dc238ac2c9c";
const per_page =40;

export default getPosts = async (animal) => {
    try{
      const response= await axios.get(`${URL}?key=${KEY}&q=${animal}&image_type=photo&orientation=horizontal&safesearch=true&per_page${per_page}`);
      console.log(response.data);
    }catch(error){
  console.log(error)
    }
  
  
  }