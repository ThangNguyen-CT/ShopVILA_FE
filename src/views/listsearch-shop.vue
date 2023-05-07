<script>
import ProductService from '../services/Product.service';
import listproductShop from '../components/component-listproduct.vue';
import loadPage from '../components/loadPage.vue';
export default {
    data() {
        return {
            data: [],
            checkload:false
        }
    },
    components:{
        listproductShop,
        loadPage
    },
    methods: {
        async getdata(){
            try {
                this.checkload = true;
                this.data = await ProductService.getSearch(`?search=${this.$route.params.slug}`);
                this.checkload = false;
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted(){
        this.getdata();
    }
}
</script>
<template>
    <loadPage v-if="checkload"></loadPage>
    <div class="container">
        <h4>Danh sánh tìm kiếm</h4>
        <div class="list-product">
                <h1 class="text-center" v-if="data.length == 0">Không tìm thấy sản phẩm</h1>
                <listproductShop :products="data"></listproductShop>
        </div>
    </div>
</template>
<style scoped>
.list-product{
    width: 100%;
    height: 100%;
}
.list-product h1{
    height: 211px;
}
</style>