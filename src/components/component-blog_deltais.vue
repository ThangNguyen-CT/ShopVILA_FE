<script>
export default {
    data() {
        return {
            address: ''
        }
    },
    props: {
        data_blog: Array,

    },
    created() {
        this.address = this.$route.params.address;
    }
}
</script>
<template>
    <div class="container" v-for="item in data_blog">
        <div class="row" v-if="item.slug == this.address">
            <div class="col-xs-12 col-sm-12 col-md-6"><img :src="item.img[0]" style="width: 600px; border-radius: 10px;" /> </div>
            <div class="col-xs-12 col-sm-12 col-md-6">
                <div class="pa">
                    <h1>{{ item.title }}</h1>
                    <p>{{ item.decr }}</p>
                </div>
            </div>
        </div>
        <div class="thamquan-box" v-if="item.slug == this.address">
            <h2>Điểm tham quan nổi tiếng</h2>
            <div class="row">
                <div class="item col-xs-12 col-sm-12 col-md-4">
                    <a href="#">
                        <h3 class="text">{{ item.addressFomus[0] }}</h3>
                        <img :src="item.img[1]" />
                    </a>
                </div>
                <div class="item col-xs-12 col-sm-12 col-md-4">
                    <a href="#">
                        <h3 class="text">{{ item.addressFomus[1] }}</h3>
                        <img :src="item.img[2]" />
                    </a>
                </div>
                <div class="item col-xs-12 col-sm-12 col-md-4">
                    <a href="#">
                        <h3 class="text">{{ item.addressFomus[2] }}</h3>
                        <img :src="item.img[3]" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.item {
    position: relative;
    margin-top: 4px;
}

.item img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

.text {
    font-size: 20px;
    color: #f9f9f9;
    position: absolute;
    margin-top: 15%;
    bottom: 0;
    width: 100%;
    text-align: center;
}

.thamquan-box .col:hover {
    opacity: 0.8;
}

.thamgian-box h2 {
    font-size: 15px;
}
</style>