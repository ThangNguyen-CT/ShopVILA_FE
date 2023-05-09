<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import { FreeMode, Navigation, Thumbs } from 'swiper';
import ProductService from '../services/Product.service';
import loadPage from '../components/loadPage.vue';
export default {
    name: "details",
    data() {
        return {
            thumbsSwiper: null,
            modules: [FreeMode, Navigation, Thumbs],
            productData: {},
            isLoad: false,
            productSuggest: [],
            cartItems: []
        }
    },
    components: {
        Swiper,
        SwiperSlide,
        loadPage,
    },
    methods: {
        setThumbsSwiper(swiper) {
            this.thumbsSwiper = swiper;
        },
        async getdatabyId() {
            try {
                const id = JSON.parse(localStorage.getItem('details'))._id;
                this.isLoad = true;
                this.productData = await ProductService.get(id);
                this.getSuggest();
                this.isLoad = false;
            } catch (error) {
                console.log(error);
            }
        },
        async getSuggest() {
            try {
                this.productSuggest = await ProductService.getAll(`/?category=${this.productData.category}&limit=5`);
            } catch (error) {
                console.log(error);
            }
        },
        gotoSuggest(item) {
            localStorage.removeItem('details');
            localStorage.setItem('details', JSON.stringify(item));
            this.$router.push({ name: "details", params: { slug: item.slug } });
            this.getdatabyId();
            window.scrollTo(0, 0);
        },
        addtocart(item) {
            var checkHasItem = false;
            this.cartItems.map((i) => {
                if (item._id != i._id) {
                    console.log('khong trung', item._id, i._id);
                }
                else {
                    checkHasItem = true;
                    console.log('trung roi', item._id, i._id, checkHasItem);
                }
            })
            if (!checkHasItem) {
                this.cartItems.push(item); // Thêm sản phẩm vào giỏ hàng
                localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
                this.isLoad = true;
            }
            setTimeout(() => {
                    this.isLoad = false;
                    location.href = '/pay'
            }, 500)
        }
    },
    created() {
        const cartItems = localStorage.getItem('cartItems'); // Lấy mảng giỏ hàng từ session storage
        if (cartItems) {
            this.cartItems = JSON.parse(cartItems) // Gán mảng giỏ hàng từ session storage cho biến cartItems
        }
    },
    mounted() {
        this.getdatabyId();
    }
}


</script>
<template>
    <loadPage v-if="isLoad"></loadPage>
    <div class="cart-shop container">
        <div class="wrapper-top row">
            <div class="product-img col-xs-12 col-sm-12 col-md-6">
                <swiper :style="{
                    '--swiper-navigation-color': '#18191a',
                    '--swiper-pagination-color': '#18191a',
                }" :spaceBetween="2" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" :modules="modules"
                    class="mySwiper2">
                    <swiper-slide style="background-color: #f7f7f7;" v-for="(item, index) in productData.images">
                        <img :src="item.url" />
                    </swiper-slide>
                </swiper>
                <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="4" class="mySwiper" :freeMode="true"
                    :watchSlidesProgress="true" :modules="modules">
                    <swiper-slide style="background-color: #f7f7f7;" v-for="(item, index) in productData.images">
                        <img :src="item.url" />
                    </swiper-slide>
                </swiper>
            </div>
            <div class="product-info col-md-6 col-xs-12 col-sm-12">
                <div class="product-text">
                    <h5 class="product-name">{{ productData.title }}</h5>
                    <p class="product-brand">Thương hiệu: <span>{{ productData.brand }}</span></p>
                </div>
                <div class="product-price">
                    <p>{{ productData.price }}<span>₫</span></p>
                </div>
                <div class="product-color">
                    <p>Màu sắc : <span>{{ productData.color }}</span></p>
                </div>
                <div class="product-view">
                    <p>Lượt xem : <span>{{ productData.numViews }}</span></p>
                </div>
                <div class="product-quantity">
                    <p>Còn lại : <span>{{ productData.quantity }}</span></p>
                </div>
                <div class="product-price-btn">
                    <button type="button" @click="addtocart(productData)">Thêm vào giỏ hàng</button>
                </div>
                <div class="product-commit">
                    <div class="commit-column">
                        <div class="img-box"><img src="https://mia.vn/images/commit-02.svg"
                                alt="Bảo hành trọn đời trên toàn hệ thống">
                        </div>
                        <div class="text-box">Bảo hành trọn đời<br>trên toàn hệ thống</div>
                    </div>
                    <div class="commit-column">
                        <div class="img-box"><img src="https://mia.vn/images/commit-03.svg"
                                alt="Đổi trả trong 365 ngày nếu không hài lòng"></div>
                        <div class="text-box">Đổi trả trong 365 ngày<br>nếu không hài lòng</div>
                    </div>
                    <div class="commit-column">
                        <div class="img-box"><img src="https://mia.vn/images/commit-04.svg"
                                alt="Hoàn tiền 100% nếu sản phẩm gặp lỗi">
                        </div>
                        <div class="text-box">Hoàn tiền 100%<br>nếu sản phẩm gặp lỗi</div>
                    </div>
                    <div class="commit-column">
                        <div class="img-box"><img src="https://mia.vn/images/commit-01.svg" alt="Cam kết chính hãng 100%">
                        </div>
                        <div class="text-box">Cam kết chính hãng 100%</div>
                    </div>
                    <div class="commit-column">
                        <div class="img-box"><img src="https://mia.vn/images/commit-05.svg"
                                alt=">Độc quyền phân phối tại MIA.vn"></div>
                        <div class="text-box">Độc quyền phân phối<br>tại MIA.vn</div>
                    </div>
                    <div class="commit-column">
                        <div class="img-box"><img src="https://mia.vn/images/commit-06.svg"
                                alt="Thanh toán khi nhận hàng (COD"></div>
                        <div class="text-box">Thanh toán khi nhận hàng (COD)</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-bottom">
            <h5 class="text-center">Mô tả sản phẩm</h5>
            <p>
                {{ productData.description }}
            </p>
        </div>
        <div class="product-suggest mt-4">
            <h5>Gợi ý sản phẩm</h5>
            <ul class="product-suggest-list d-flex flex-wrap">
                <li class="item-suggest" v-for="(item, index) in productSuggest" v-show="item.slug != this.$route.params.slug"
                    @click="gotoSuggest(item)">
                    <img :src="item.images[0].url" :alt="item.images[0].url">
                    <p>{{ item.title }}</p>
                    <span>{{ item.price }}đ</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
p {
    margin: 0;
}

span {
    height: 50px;
    font-family: 'Suranna', serif;
}

.cart-shop {
    margin-top: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.wrapper-top {
    height: 100%;
}

/* start swiper */
.product-img {
    height: 100%;
}

.swiper {
    width: 400px;
    height: 100%;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    mix-blend-mode: darken;
}

.mySwiper2 {
    border-radius: 10px;
}

.mySwiper {
    padding: 4px 0;
}

.mySwiper .swiper-slide {
    opacity: 0.4;
}

.swiper-button-next {
    color: #474747;
}

.mySwiper .swiper-slide-thumb-active {
    opacity: 1;
}

/* end swiper */
.product-info {
    border-radius: 0 7px 10px 7px;
    background-color: #ffffff;
}

.product-name {
    width: 80%;
}

.product-text {
    color: #474747;
}

.product-text p {
    margin: 0;
}

.product-text p {
    font-size: 16px;
}

.product-text span {
    font-size: 13px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    color: red;
    letter-spacing: 0.2em;
}

.product-price p span {
    text-align: center;
    font-size: 20px;
}

.product-price-btn button {
    float: right;
    height: 50px;
    width: 200px;
    border: transparent;
    border-radius: 60px;
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #ffffff;
    background-color: var(--color--main--);
    cursor: pointer;
    outline: none;
}

.product-view p span,
.product-quantity p span,
.product-color p span {
    color: red;
}

.product-price-btn button:hover {
    background-color: #ef8b3e;
}

.product-commit {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

.product-commit .commit-column {
    margin-top: 16px;
    min-width: 150px;
}

.product-commit .commit-column .text-box {
    text-align: center;
    font-size: 12px;
    min-width: 100px;
}

.product-commit .commit-column .img-box {
    text-align: center;
}

.product-suggest {
    width: 100%;
    height: 100%;
    background: linear-gradient(229.22deg, #FF9A3D .4%, #CB2F2F 122.62%);
    border-radius: 30px;
    padding: 20px;
}

.product-suggest h5 {
    color: #ffffff;
}

.product-suggest-list {
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.item-suggest {
    border-radius: 10px;
    background-color: #f0f0f0;
    margin: 0 8px;
    height: 100%;
    padding: 5px;
    width: 180px;
    margin-top: 4px;
}

.item-suggest p {
    display: -webkit-box;
    max-width: 200px;
    height: 30px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 1;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.item-suggest img {
    display: flex;
    margin: auto;
    mix-blend-mode: darken;
    width: 150px;
    height: 150px;
    transition: all .2s linear;
}

.item-suggest span {
    display: block;
    width: 100%;
    height: 30px;
    text-align: center;
    color: #ef8b3e;
}

.item-suggest:hover img {
    transform: rotate(10deg);
}
</style>