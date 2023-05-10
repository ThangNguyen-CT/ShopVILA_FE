<script>
import BannerShop from "../components/component-banner.vue";
import ProductService from "../services/Product.service";
import listproduct from '../components/component-listproduct.vue';
import loadPage from "../components/loadPage.vue";
export default {
    data() {
        return {
            products: [],
            loadPage: false,
            drop: false,
            showfilter: [],
            filters: [],
            filterPrice: [],
            showfilterPrice: [],
            showfilterOrther: [],
            sort: '',
        }
    },
    components: {
        BannerShop, listproduct, loadPage
    },
    methods: {
        async getallforCategory(url, sort) {
            try {
                this.loadPage = true;
                   this.products = await ProductService.getAll(`/?category=${this.$route.params.slug}${url}${sort}`);
                this.loadPage = false;
            } catch (error) {
                console.log(error);
            }
        },
        setFilter(event, filter) {
            const title = event.target.title;
            const checkHas = this.showfilterOrther.some(filter => filter == title);
            if (this.showfilterOrther.length == 0) {
                this.showfilterOrther.push(title);
                this.filters.push(filter);
            } else {
                if (!checkHas) {
                    this.showfilterOrther.push(title);
                    this.filters.push(filter);
                } else {
                    console.log("Đã có giá trị");
                }
            }
        },
        setFilterPrice(event, filter) {
            const title = event.target.title;
            const checkHas = this.showfilterPrice.some(filter => filter == title);
            if (this.showfilterPrice.length == 0) {
                this.showfilterPrice.push(title);
                this.filterPrice.push(filter);
            } else {
                if (!checkHas) {
                    this.showfilterPrice.push(title);
                    this.filterPrice.push(filter);
                } else {
                    console.log("Đã có giá trị");
                }
            }
        },
        getFilter() {
            const filterPrice = this.filterPrice.join(',');
            const filterOrder = this.filters.join('&');
            if (filterOrder != '' && filterPrice == '') {
                this.getallforCategory(`&${filterOrder}`, this.sort);
            }
            else if (filterOrder != '' && filterPrice != '') {
                this.getallforCategory(`&${filterOrder}&price=${filterPrice}`, this.sort);
            }
            else if (filterOrder == '' && filterPrice != '') {
                this.getallforCategory(`&price=${filterPrice}`, this.sort);
            }else{
                this.getallforCategory('', this.sort);
            }
            this.drop = false;
            this.addClassDropFilter();
        },
        delfilter(index) {
            this.filters.splice(index, 1);
            this.showfilterOrther.splice(index, 1);
        },
        delfilterPrice(index) {
            this.filterPrice.splice(index, 1);
            this.showfilterPrice.splice(index, 1);
        },
        addClassDropFilter() {
            const filter = document.querySelector('.filter-drop');
            if (this.drop) {
                filter.classList.add('filter-active-down');
                filter.classList.remove('filter-active-up');
            } else {
                filter.classList.add('filter-active-up');
                filter.classList.remove('filter-active-down');
            }
        },
        getsort(event) {
            this.sort = `&${event.target.value}`;
            this.getFilter();
        }
    },
    mounted() {
        this.getallforCategory('', '');  
        window.scrollTo(0, 0);
    }
}
</script>
<template>
    <loadPage v-if="loadPage"></loadPage>
    <div class="container" style="min-height: 800px;">
        <BannerShop :img="`https://media.mia.vn/uploads/sale-off-up-to-50-1680656693.jpg`"></BannerShop>
        <div class="sort mt-4">
            <div class="filter">
                <button class="btn-filter" @click="drop = !drop, addClassDropFilter()">
                    <i class="fa-solid fa-filter"></i>
                    Lọc
                </button>
                <div class="filter-drop">
                    <div class="e-ao"></div>
                    <span v-if="showfilterPrice.length != 0 || showfilterOrther.length != 0">Đã chọn :</span>
                    <ul class="filter-result">
                        <li class="filter-result-item" v-for="(item, index) in showfilterPrice">
                            {{ item }}
                            <i class="fa-solid fa-x" @click="delfilterPrice(index)"></i>
                        </li>
                    </ul>
                    <ul class="filter-result">
                        <li class="filter-result-item" v-for="(item, index) in showfilterOrther">
                            {{ item }}
                            <i class="fa-solid fa-x" @click="delfilter(index)"></i>
                        </li>
                    </ul>
                    <div class="filter-price">
                        <span>Giá tiền</span>
                        <ul class="list-filter-price">
                            <li class="item-filter-price" title="Dưới 1 triệu" @click="setFilterPrice($event, '0-1000000')">
                                Dưới
                                1 triệu</li>
                            <li class="item-filter-price" title="Từ 1 đến 2 triệu"
                                @click="setFilterPrice($event, '100000-2000000')">Từ 1 đến 2 triệu</li>
                            <li class="item-filter-price" title="Từ 2 đến 4 triệu"
                                @click="setFilterPrice($event, '2000000-4000000')">Từ 2 đến 4 triệu</li>
                            <li class="item-filter-price" title="Từ 4 đến 10 triệu"
                                @click="setFilterPrice($event, '4000000-10000000')">Từ 4 đến 10 triệu</li>
                        </ul>
                    </div>
                    <div class="filter-color">
                        <span>Màu sắc</span>
                        <ul class="list-filter-color">
                            <li title="Yellow" style="background-color: yellow;" @click="setFilter($event, 'color=Yellow')">
                            </li>
                            <li title="Black" style="background-color: #000;" @click="setFilter($event, 'color=Black')">
                            </li>
                            <li title="White" style="background-color: #fff;" @click="setFilter($event, 'color=White')">
                            </li>
                            <li title="Blue" style="background-color: #0d6efd;" @click="setFilter($event, 'color=Blue')">
                            </li>
                            <li title="Light Pelican" style="background-color: #ffebd4;"
                                @click="setFilter($event, 'color=Light Pelican')">
                            </li>
                            <li title="Copen Blue" style="background-color: #32495b;"
                                @click="setFilter($event, 'color=Copen Blue')">
                            </li>
                            <li title="Green" style="background-color: green;" @click="setFilter($event, 'color=Green')">
                            </li>
                            <li title="Pink" style="background-color: pink;" @click="setFilter($event, 'color=Pink')">
                            </li>
                            <li title="Orange" style="background-color: orange;" @click="setFilter($event, 'color=Orange')">
                            </li>
                            <li title="Purple" style="background-color: purple;" @click="setFilter($event, 'color=Purple')">
                            </li>
                            <li title="Red" style="background-color: red;" @click="setFilter($event, 'color=Red')">
                            </li>
                        </ul>
                    </div>
                    <div class="filter-brand">
                        <span>Thương hiệu</span>
                        <ul class="list-filter-brand">
                            <li class="">
                                <img src="https://media.mia.vn/uploads/thuong-hieu-heys-1674809492.jpg"
                                    style="max-height: 27px;" title="Heys"
                                    @click="setFilter($event, 'brand=Heys&brand=Herschel')">
                            </li>
                            <li class="">
                                <img src="https://media.mia.vn/uploads/thuong-hieu-pisani-1627784217.png"
                                    style="max-height: 27px;" title="Pisani" @click="setFilter($event, 'brand=Pisani')">
                            </li>
                            <li class="">
                                <img src="https://media.mia.vn/uploads/thuong-hieu-austin-reed-1576634502.jpg"
                                    style="max-height: 27px;" title="Austin Reed"
                                    @click="setFilter($event, 'brand=Austin Reed')">
                            </li>
                            <li class="">
                                <img src="https://media.mia.vn/uploads/thuong-hieu-larita-1627784077.png"
                                    style="max-height: 27px;" title="Larita" @click="setFilter($event, 'brand=Larita')">
                            </li>
                            <li class="">
                                <img src="https://media.mia.vn/uploads/thuong-hieu-epoch-1626685112.jpg"
                                    style="max-height: 27px;" title="Epoch" @click="setFilter($event, 'brand=Epoch')">
                            </li>
                            <li class="">
                                <img src="https://media.mia.vn/uploads/legend-walker.jpg" data-src="legend-walker.jpg"
                                    style="max-height: 27px;" title="Legend Walker"
                                    @click="setFilter($event, 'brand=Legend Walker')">
                            </li>
                            <li class="">
                                <img src="https://media.mia.vn/uploads/thuong-hieu-valinice-1653882291.jpg"
                                    style="max-height: 27px;" title="Valinice" @click="setFilter($event, 'brand=Valinice')">
                            </li>
                            <li class="">
                                <img src="https://media.mia.vn/uploads/thuong-hieu-la-brujula-1571060607.jpg"
                                    style="max-height: 27px;" title="Brujula" @click="setFilter($event, 'brand=Brujula')">
                            </li>
                            <li class="">
                                <img src="https://media.mia.vn/uploads/thuong-hieu-beatas-1674807267.jpg"
                                    style="max-height: 27px;" title="Beatas" @click="setFilter($event, 'brand=Beatas')">
                            </li>
                            <li class="">
                                <img src="https://media.mia.vn/uploads/thuong-hieu-vantemz-1674807102.jpg"
                                    style="max-height: 27px;" title="Vantemz"
                                    @click="setFilter($event, 'brand=vantemzantemz')">
                            </li>
                            <li class="">
                                <img src="https://media.mia.vn/uploads/thuong-hieu-vivache-1674807172.jpg"
                                    style="max-height: 27px;" title="Vivache" @click="setFilter($event, 'brand=Vivache')">
                            </li>
                        </ul>
                    </div>
                    <div class="btn-result">
                        <button class="btn btn-danger" @click="getFilter()">Xem Kết quả</button>
                    </div>
                </div>
            </div>
            <div class="filter-with">
                <select @change="getsort($event)">
                    <option value="">
                        Sắp xếp theo
                    </option>
                    <option value="sort=price">
                        Giá tăng dần
                    </option>
                    <option value="sort=-price">
                        Giá giảm dần
                    </option>
                    <option value="sort=title">
                        Tên A-Z
                    </option>
                    <option value="sort=-title">
                        Tên Z-A
                    </option>
                </select>
            </div>
        </div>
        <div class="list-product">
            <h1 class="text-center" v-if="products.length == 0">Không có sản phẩm</h1>
            <listproduct :products="products"></listproduct>
        </div>
    </div>
</template>
<style>
.container nav a {
    color: #000;
    text-decoration: solid;
}

.container nav a:hover {
    text-decoration: underline;
}

.sort {
    display: flex;
    justify-content: space-between;
}

.filter {
    position: relative;
}

.filter-drop {
    width: 900px;
    position: absolute;
    background-color: var(--color--white--);
    z-index: 1;
    border-radius: 10px;
    border: 1px solid #dad3d3;
    padding: 20px;
    top: 45px;
    visibility: hidden;
}

.filter-active-down {
    transform: translateY(0%);
    transition: all .2s linear;
    visibility: visible;
}

.filter-active-up {
    transform: translateY(-10%);
    transition: all .2s linear;
    visibility: hidden;
}

.btn-filter {
    border-radius: 10px;
    background-color: var(--color--white--);
    border: 1px solid #d4d2d2;
    text-align: center;
    padding: 4px 16px;
}

.list-filter-price,
.list-filter-brand,
.list-filter-color {
    margin: 0;
    list-style-type: none;
    display: flex;
}

.filter-price span,
.filter-color span,
.filter-brand span {
    font-size: 16px;
    font-weight: 700;
}

.item-filter-price {
    border: 1px solid #d4d2d2;
    background-color: var(--color--white--);
    width: 100px;
    border-radius: 10px;
    margin: 0 4px;
    text-align: center;
}

.list-filter-color li {
    margin: 0 4px;
    width: 30px;
    height: 30px;
    border: 1px solid #d4d2d2;
    border-radius: 50%;
}

.list-filter-brand {
    width: 800px;
    flex-wrap: wrap;
}

.list-filter-brand li {
    margin: 8px;
    border: 1px solid #d4d2d2;
    border-radius: 10px;
    text-align: center;
}

.filter-result {
    display: flex;
    list-style-type: none;
    margin: 0;
    align-items: center;
    flex-wrap: wrap;
}

.filter-result li {
    border: 1px solid var(--color--main--);
    color: var(--color--main--);
    min-width: 80px;
    border-radius: 8px;
    text-align: center;
    margin: 4px 8px;
}

.filter-result li i {
    padding-right: 4px;
    font-size: 14px;
}

.e-ao {
    position: absolute;
    width: 25px;
    height: 25px;
    border-left: 1px solid #d4d2d2;
    border-top: 1px solid #d4d2d2;
    transform: rotate(45deg);
    top: -15px;
    left: 10px;
}
</style>