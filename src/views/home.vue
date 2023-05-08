<script>
import componentTopSale from '../components/component-top-sale.vue';
import componentBanner from '../components/component-banner.vue';
import componentProduct from '../components/component-products.vue';
import componentNews from '../components/component-news.vue';
import componentbetcustomer from '../components/component-bestcustomer.vue'
import loadPage from '../components/loadPage.vue';
export default {
    data() {
        return {
        }
    },
    components: {
        componentTopSale, componentBanner, componentProduct, componentNews,
        componentbetcustomer, loadPage
    },
    methods: {

    },
    mounted() {
        window.scroll(0,0);
    }
}
</script>
<template>
    <div class="container">
        <componentBanner :img="`https://media.mia.vn/uploads/sale-off-up-to-50-1680656408.jpg`"></componentBanner>
        <div class="top-sale">
            <h3 class="top-sale-text">Top sản phẩm bán chạy</h3>
            <div class="top-sale_products">
                <componentTopSale></componentTopSale>
            </div>
        </div>
        <componentProduct :category="'Vali'"
            :images-ads="'https://mia.vn/images/banner-home-category-pc/banner-home-category-01.jpg'"></componentProduct>
        <componentProduct :category="'Balo'"
            :images-ads="'https://mia.vn/images/banner-home-category-pc/banner-home-category-new-02.jpg'">
        </componentProduct>
        <componentNews></componentNews>
        <componentbetcustomer></componentbetcustomer>
    </div>
</template>

<style scoped>
.top-sale {
    background: linear-gradient(229.22deg, #FF9A3D .4%, #CB2F2F 122.62%);
    width: 100%;
    height: 100%;
    margin: 8px 0;
    border-radius: 10px;
}

.top-sale_products {
    height: 100%;
    padding: 12px;
}

.top-sale-text {
    padding: 16px;
    color: var(--color--white--);
}
</style>