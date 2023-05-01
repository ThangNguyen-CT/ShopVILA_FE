<script>
export default {
    data() {
        return {
        }
    },
    props: {
        products: { type: Array, required: true },
    },
    methods: {
        gotoProductDetails(item) {
            localStorage.setItem('details', JSON.stringify(item));
            this.$router.push({ name: "details", params: { slug: item.slug } });
        }
    }
}
</script>
<template>
    <div class="products">
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
    overflow: hidden;
}

.list-products li img {
    height: 200px;
    width: 200px;
    mix-blend-mode: darken;
    display: flex;
    margin: auto;
}

.product-img {
    border-radius: 10px;
    background-color: #f0f0f0;
    height: 230px;
    display: flex;
    margin: auto;
}

.product-name {
    font-size: var(--size--text--);
}

.product-price {
    font-size: 20px;
}

.list-products li:hover .product-img img {
    transform: scale(1.1);
    transition: transform linear .2s;
}
</style>