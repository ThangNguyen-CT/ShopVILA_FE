<script>
import ProductService from '../services/Product.service';
import componentBanner from './component-banner.vue';

export default {
    data() {
        return {
            products: [],

        }
    },
    props: {
        category: { type: String, required: true },
        imagesAds: { type: String, required: true }
    },
    components: {
        componentBanner,
    },
    methods: {
        async getdata() {
            try {
                this.products = await ProductService.getAll(`/?category=${this.category}&limit=4`);
            } catch (error) {
                console.log(error);
            }
        },
        gotoProductDetails(item) {
            localStorage.setItem('details', JSON.stringify(item));
            this.$router.push({ name: "details", params: { slug: item.slug } });
        }
    },
    mounted() {
        this.getdata();
    }

}
</script>
<template>
    <div class="products">
        <componentBanner :img="imagesAds">
        </componentBanner>
        <ul class="list-products row">
            <li class="product col-xs-12 col-sm-6 col-md-6 col-lg-3" v-for="(item, index) in products" @click="gotoProductDetails(item)">
                <div class="product-img">
                    <img class="" :src="item.images[0].url">
                </div>
                <div class="product-name">
                    <span>{{ item.title }}</span>
                </div>
                <div class="product-price">
                    <small>{{ item.price }}đ</small>
                </div>
            </li>
        </ul>
        <div class="mt-4"></div>
    </div>
</template>
<style scoped>
.products {
    cursor: pointer;
}

.list-products {
    list-style-type: none;
    margin-top: 8px;
    padding: 0;
}

.products {
    width: 100%;
}


.list-products li {
    height: 100%;
}

.list-products li img {
    height: 200px;
    mix-blend-mode: darken;
    display: flex;
    margin: auto;
}

.product-img {
    border-radius: 10px;
    background-color: #f0f0f0;
    height: 100%;
    overflow: hidden;
    height: 200px;
    mix-blend-mode: darken;
    display: flex;
    margin: auto;
}

.product-name {
    font-size: var(--size--text--);
}

.product-price {
    font-size: 14px;
}

.list-products li:hover .product-img img {
    transform: scale(1.1);
    transition: all linear .3s;
}
</style>