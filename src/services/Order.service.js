import createHttp from "./http.service";
class OrderService {
    constructor() {
        this.http = createHttp("https://charming-plum-scarab.cyclic.app/api/order", true);
    }
    async getAll() {
        return (await this.http.get("/")).data;
    }
    async get(sdt) {
        return (await this.http.get(`/${sdt}`)).data;
    }
    async create(data) {
        return (await this.http.post("/", data)).data;
    }
}

export default new OrderService();