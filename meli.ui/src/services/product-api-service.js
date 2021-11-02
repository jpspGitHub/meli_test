import * as Config from "./../config.json";
import AxiosService from "./axios-service";

const ProductAPIService = {
    getProduct: (id) => {
        return AxiosService().get(Config.API_URL,'items', id);
    },
    searchProduct: (query) => {
        return AxiosService().query(Config.API_URL, 'items', {q: query}  )
    }
}

export default ProductAPIService;