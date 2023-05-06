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
        gotosearchorder() {
            this.$router.push('/search-order');
        },
        gotoorderinfo() {
            this.$router.push('/findId-order');
        },
        gotoblog() {
            this.$router.push('/blog');

        }
    },
    mounted() {
        this.getdata();
    }
}
</script>
<template>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: var(--color--main--);">
        <div class="container-fluid">
            <div class="logo">
                <a href="/">
                    <img src="../assets/img/anh.jpg" alt="logo">
                </a>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="margin-left: 8px;">
                    <li class="nav-item">
                        <a class="navbar-brand" href="/">Trang chủ</a>
                    </li>
                    <li class="nav-item">
                        <a class="navbar-brand" href="/listproduct/Vali">Vali</a>
                    </li>
                    <li class="nav-item">
                        <a class="navbar-brand" href="/listproduct/Balo">Balo</a>
                    </li>
                    <li class="nav-item" @click="gotosearchorder()">
                        <span class="navbar-brand"> Lịch sử đặt hàng</span>
                    </li>
                    <li class="nav-item" @click="gotoorderinfo()">
                        <span class="navbar-brand"> Đơn hàng</span>
                    </li>
                    <li class="nav-item" @click="gotoblog()">
                        <span class="navbar-brand"> Cẩm nang du lịch</span>
                    </li>
                    <li class="nav-item">
                        <span class="navbar-brand">Tin tức</span>
                    </li>
                </ul>
                <form class="d-flex" style="position: relative;" @submit.prevent="gotolistproduct()">
                    <input class="form-control me-2 input-search" type="text" placeholder="Tìm kiếm sản phẩm"
                        v-model="searchproduct">
                    <button class="btn btn-search" type="submit"><i class="fas fa-search"></i></button>
                    <div class="content-search" v-if="searchproduct != ''">
                        <div v-for="(item, index) in fiilterSearchProduct" @click="gotoProductDetails(item)">
                            {{ item.title }}
                        </div>
                    </div>
                </form>
                <div class="icon-cart" @click="gotocart()">
                    <div>
                        <i class="fa fa-cart-shopping"></i>
                        <p class="text-center">{{ getlength }}</p>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<style scoped>
/* Header */
.header {
    width: 100%;
    height: 50px;
    background-color: var(--color--main--);
}

.logo img {
    width: 300px;
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

.btn-search {
    border-style: none;
    font-size: 20px;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    color: #ffffff;
    background-color: transparent;
}

.input-search {
    height: 50px;
    width: 200px;
    border-style: none;
    font-size: 18px;
    outline: none;
    border-radius: 10px;
    transition: all .1s ease-in-out;
    color: var(--color--main--);
}

.input-search::placeholder {
    color: var(--color--main--);
    font-size: 18px;
    font-weight: 100;
}

.content-search {
    border-radius: 10px;
    position: absolute;
    width: 200px;
    max-height: 200px;
    overflow-y: scroll;
    background-color: #fff;
    top: 100%;
    z-index: 1;
}

.content-search div {
    padding: 4px 10px;
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
    position: relative;
}

.icon-cart i {
    font-size: 18px;
    color: #fff;
}

.icon-cart p {
    position: absolute;
    top: 10px;
    right: 0;
    background-color: #fff;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    color: var(--color--main--);
}

@media only screen and (max-width: 600px) {
    .icon-cart p {
        top: 90%;
        left: 30px;
    }
    .nav-item{
        padding: 3px;
    }
    .nav-item:hover{
        background-color: #fff;
        border-radius: 10px;
        padding: 3px;
    }
}

@media only screen and (min-width: 576px) and (max-width:768px) {
    .icon-cart p {
        top: 90%;
        left: 30px;
    }
    .nav-item{
        padding: 3px;
    }
    .nav-item:hover{
        background-color: #fff;
        border-radius: 10px;
        padding: 3px;
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 768px) and (max-width:992px) {
    .icon-cart p {
        top: 90%;
        left: 30px;
    }
    .nav-item{
        padding: 3px;
    }
    .nav-item:hover{
        background-color: #fff;
        border-radius: 10px;
        padding: 3px;
    }
}
</style>