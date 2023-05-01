import createHttp from "./http.service";
class ProductService {
    constructor() {
        this.http = createHttp("https://charming-plum-scarab.cyclic.app/api/product", true);
    }
    async getAll(url) {
        return (await this.http.get(url)).data;
    }
    async get(id) {
        return (await this.http.get(`/${id}`)).data;
    }
    async getSearch(search) {
        return (await this.http.get(`/search/${search}`)).data;
    }
}

export default new ProductService();