import axios from "axios";
const BASE_URL = "https://pixabay.com/api/";
let perPage = 40;
async function fetchImages(nameSearch, currentPage) {
    try {
        const response = await axios.get(`${BASE_URL}?key=29320535-0299dbdcd796402aab516fa97&image_type=photo&orientation=horizontal&safesearch=true&q=${nameSearch}&page=${currentPage}&per_page=${perPage}`);
         const arrayImages = await response.data.hits;

        if(arrayImages.length === 0) {
            Notiflix.Notify.warning(
                "Sorry, there are no images matching your search query. Please try again.")
        }
        return {arrayImages,
            totalHits: response.data.totalHits,}       
        
    } catch(error) {
        console.log(error)
    }
}
export default fetchImages;