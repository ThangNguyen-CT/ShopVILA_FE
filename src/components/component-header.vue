<script>
import ProductService from '../services/Product.service';
export default {
    data() {
        return {
            data: [],
            searchproduct: ''
        }
    },
    computed: {
        getlength() {
            const cartlength = JSON.parse(localStorage.getItem('cartItems'));
            if (cartlength) {
                return cartlength.length;
            } else {
                return 0;
            }
        },
        fiilterSearchProduct() {
            return this.data.filter(product => product.title.toLowerCase().includes(this.searchproduct.toLowerCase()));
        }
    },
    methods: {
        gotocart() {
            this.$router.push({ name: "pay" });
        },
        async getdata() {
            try {
                this.data = await ProductService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        gotolistproduct() {
            if (this.searchproduct != '') {
                location.href = `/search/${this.searchproduct}`;
                this.searchproduct = '';
            }
        },
        gotoProductDetails(item) {
            localStorage.setItem('details', JSON.stringify(item));
            location.href = `/details/${item.slug}`;
            this.searchproduct = '';
        },
    },
    mounted() {
        this.getdata();
    }
}
</script>
<template>
    <header class="p-3 header text-white">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none logo">
                    <img src="../assets/img/anh.jpg" alt="logo">
                </a>
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="/" class="nav-link px-2 text-white">Trang chủ</a></li>
                    <li><a href="/listproduct/Vali" class="nav-link px-2 text-white">Vali</a></li>
                    <li><a href="/listproduct/Balo" class="nav-link px-2 text-white">Balo</a></li>
                    <li><router-link to="/search-order" class="nav-link px-2 text-white">Lịch sử đặt hàng</router-link></li>
                    <li><router-link to="/findId-order" class="nav-link px-2 text-white">Đơn hàng</router-link></li>
                    <li><router-link to="/blog" class="nav-link px-2 text-white">Cẩm nang du lịch</router-link></li>
                    <li><a href="#" class="nav-link px-2 text-white">Tin tức</a></li>
                </ul>
                <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 d-flex" @submit.prevent="gotolistproduct()">
                    <div>
                        <input class="form-control form-control-dark input-search" type="search" aria-label="Search"
                            placeholder="Tìm kiếm sản phẩm" v-model="searchproduct">
                        <ul class="list-group content-search" id="search-suggestions" v-if="searchproduct != ''" v-show="fiilterSearchProduct.length != 0">
                            <li v-for="(item, index) in fiilterSearchProduct" @click="gotoProductDetails(item)" >
                                {{ item.title }}
                            </li>
                        </ul>
                    </div>
                    <button class="btn btn-search" type="submit"><i class="fas fa-search"></i></button>
                    <div class=" icon-cart" @click="gotocart()">
                        <button type="button" class="btn btn-cart">
                            <i class="fa fa-cart-shopping"></i>
                            <p class="text-center">{{ getlength }}</p>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </header>
</template>
<style scoped>
/* Header */
.header {
    background-color: var(--color--main--);
}

.logo img {
    width: 200px;
    height: 40px;
    border-radius: 10px;
}

.navbar-nav li span,
.navbar-nav li a {
    cursor: pointer;
    font-size: 16px;
}

.navbar-nav li:hover span,
.navbar-nav li:hover a {
    color: #000;
}

.btn-cart {
    position: relative;
}

.btn-search,
.btn-cart {
    border-style: none;
    font-size: 20px;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    color: #ffffff;
    background-color: transparent;
}

.input-search {
    width: 100%;
    border-style: none;
    font-size: 18px;
    outline: none;
    border-radius: 10px;
    position: relative;
    /* color: var(--color--main--); */
}

.input-search::placeholder {
    color: #000;
    font-size: 18px;
    font-weight: 100;
}

.content-search {
    position: absolute;
    border-radius: 5px;
    list-style-type: none;
    height: 100px;
    width:200px;
    overflow-x: scroll  ;
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    z-index: 10;
}
.content-search li{
    padding: 2px 15px;
    border-bottom: 1px solid #000;
}
.content-search li:hover{
    background-color: var(--color--main--);
    cursor: pointer;
}
.content-search div {
    padding: 4px 10px;
    border-bottom: 1px solid #fff;
}

.content-search::-webkit-scrollbar {
    width: 4px;
}

.content-search::-webkit-scrollbar-track {
    background-color: #fff;
}

.content-search::-webkit-scrollbar-thumb {
    background-color: var(--color--main--);
    border-radius: 50px;
}

.content-search div:hover {
    cursor: pointer;
    background-color: var(--color--main--);
}

.icon-cart i {
    font-size: 18px;
    color: #fff;
}

.icon-cart p {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #fff;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    color: var(--color--main--);
    font-size: 15px;
}
</style>