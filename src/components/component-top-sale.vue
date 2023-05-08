<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/pagination";
import loadPage from './loadPage.vue';
// import required modules
import { FreeMode, Pagination } from "swiper";

import ProductService from "../services/Product.service";
export default {
  components: {
    Swiper,
    SwiperSlide,
    loadPage
  },
  setup() {
    return {
      modules: [FreeMode, Pagination],
    };
  },
  data() {
    return {
      productTopSale: [],
      checkload : false
    }
  },
  methods: {
    async getdataTopSale() {
      try {
        this.checkload = true;
        this.productTopSale = await ProductService.getAll();
        this.checkload = false;
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
    this.getdataTopSale();
  }
};
</script>
<template>
  <loadPage v-if="checkload"></loadPage>
  <swiper :slidesPerView="4" :spaceBetween="5" :freeMode="true" :pagination="{
      clickable: true,
    }" :modules="modules" class="mySwiper">
    <swiper-slide class="product-item" v-for="(item, index) in productTopSale" v-show="item.numViews > 50">
      <div @click="gotoProductDetails(item)" class="product-info d-flex flex-column w-100">
        <img :src="item.images[0].url" :alt="item.images[0].public_id">
        <span class="product-name">{{ item.title }}</span>
        <span class="view">Lượt xem : {{item.numViews}}</span>
        <div class="product-price">
          <span class="price">{{ item.price }}₫</span>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.product-info {
  text-decoration: none;
  color: #000;
}

.product-info img {
  width: 100%;
  height: 100%;
  mix-blend-mode: darken;
  border-radius: 20px;
}
.view{
  font-size: 10px;
  color: var(--color--main--);
}
.product-name {
  max-width: 90%;
  height: 50px;
  margin: 0 auto;
  font-size: 14px;
  line-height:  3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.product-item {
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: #f0f0f0;
}

.list-color {
  list-style-type: none;
  margin: 0;
}

.product-price .price-compare {
  text-decoration-line: line-through;
  color: #888;
}

.product-price {
  margin: 4px 0;
  font-size: 14px;
}

.product-item:hover .product-info img {
  transform: translateY(-5px);
  transition: all linear .2s;
}
</style>
