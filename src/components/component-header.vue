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
        gotosearchoder(){
            this.$router.push('/search-order');
        },
        gotoblog(){
            this.$router.push('/blog');

        }
    },
    mounted() {
        this.getdata();
        window.addEventListener('keydown', (e) => {
            if (e.key == 'Enter') {
                if(this.searchproduct != ''){
                    this.gotolistproduct();
                }
            }
        });
    }
}
</script>
<template>
    <header class="header">
        <div class="list-header d-flex justify-content-between align-items-center">
            <div class="logo">
                <a href="/">
                    <img src="../assets/img/anh.jpg" alt="logo" >
                </a>
            </div>
            <ul class="list-link d-flex justify-content-around">
                <a href="/listproduct/Vali">
                    <li class="list-link_item">Vali</li>
                </a>
                <a href="/listproduct/Balo">
                    <li class="list-link_item">Balo</li>
                </a>
                <a href="/listproduct/Tuisach">
                    <li class="list-link_item">Túi sách</li>
                </a>
                <li class="list-link_item" @click="gotosearchoder()" >Tìm kiếm đơn hàng</li>    
                <li class="list-link_item" @click="gotoblog()">Cẩm nang du lịch</li>
                <li class="list-link_item">Tin tức</li>
            </ul>
            <div class="list-icon d-flex">
                <div class="icon-search d-flex flex-row-reverse">
                    <button class="btn-search"><i class="fas fa-search" @click="gotolistproduct()"></i></button>
                    <input class="input-search" type="text" id="search-text-top" placeholder="Tìm kiếm sản phẩm"
                        v-model="searchproduct">
                    <div class="content-search" v-if="searchproduct != ''">
                        <div v-for="(item, index) in fiilterSearchProduct" @click="gotoProductDetails(item)">
                            {{ item.title }}
                        </div>
                    </div>
                </div>
                <div class="icon-cart" @click="gotocart()">
                    <i class="fa fa-cart-shopping"></i>
                    <div>
                        <p class="text-center">{{ getlength }}</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<style scoped>
/* Header */
.header {
    width: 100%;
    height: 50px;
    background-color: var(--color--main--);
}

.list-header {
    padding: 0 80px;
    width: 100%;
    height: 100%;
}

.logo img {
    width: 300px;
    height: 40px;
    border-radius: 10px;
}

.list-link {
    list-style-type: none;
    color: var(--color--white--);
    font-size: var(--size--text--);
    margin: 0;
    padding-left: 0;
    height: 100%;
    align-items: center;
}

.list-link a {
    text-decoration: none;
    color: var(--color--white--);
}

.list-link .list-link_item {
    margin: 0 12px;
    text-decoration: none;
    color: var(--color--white--);
}

.list-link_item:hover {
    opacity: 0.5;
    cursor: pointer;
}

.list-icon i {
    color: var(--color--white--);
    font-size: var(--size--icon--);
    margin: 0 8px;
}

#search-text-top {
    outline: none;
    border-radius: 10px;
    border: none;
    height: 40px;
}

.icon-search i:hover,
.icon-cart i:hover {
    opacity: 0.6;
    position: relative;
}

.icon-cart div {
    position: absolute;
    right: -5px;
    top: -5px;
    background-color: #fff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
}

.icon-cart div p {
    font-size: 15px;
    color: red;
}

.icon-cart {
    margin: auto;
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
    padding: 10px;
    font-size: 18px;
    outline: none;
    border-radius: 25px;
    transition: all .1s ease-in-out;
    padding-right: 40px;
    color: var(--color--main--);
}

.input-search::placeholder {
    color: var(--color--main--);
    font-size: 18px;
    font-weight: 100;
}


.list-icon {
    position: relative;
}

.content-search {
    border-radius: 10px;
    position: absolute;
    width: 200px;
    max-height: 200px;
    overflow-y: scroll;
    background-color: #fff;
    right: 80px;
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
</style>