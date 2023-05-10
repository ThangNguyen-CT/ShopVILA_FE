<script>
export default {
    methods: {
        pushaddress(params) {
            this.$router.push({ path: `/blog/deltais/${params}` });
        }
    },
    mounted() {
        window.scrollTo(0, 0);
    }
}
</script>
<template>
    <div class="blogs container">
        <router-link to="/" style="text-decoration: none; color: #000;">Trang chủ</router-link>/Cẩm nang du lịch
        <h1 class="title text-center">Điểm đến nổi tiếng</h1>
        <div class="list_blogs d-flex flex-wrap">
            <div class="box col-xs-6 col-sm-6 col-md-3 ">
                <div class="blogs_item" @click="pushaddress('angiang')">
                    <h3 class="text_blog">An Giang</h3>
                    <img class="img_blog" src="https://media.mia.vn/uploads/blog-du-lich/an-giang-cover-1659581459.jpg" />
                </div>
            </div>
            <div class="box col-xs-6 col-sm-6 col-md-3 ">
                <div class="blogs_item" @click="pushaddress('baoloc')">
                    <h3 class="text_blog">Bảo Lộc</h3>
                    <img class="img_blog" src="https://media.mia.vn/uploads/blog-du-lich/bao-loc-cover-1649320597.jpg" />
                </div>
            </div>
            <div class="box col-xs-6 col-sm-6 col-md-3 ">
                <div class="blogs_item" @click="pushaddress('bentre')">
                    <h3 class="text_blog">Bến Tre</h3>
                    <img class="img_blog" src="https://media.mia.vn/uploads/blog-du-lich/ben-tre-cover-1664335486.jpg" />
                </div>
            </div>
            <div class="box col-xs-6 col-sm-6 col-md-3 ">
                <div class="blogs_item" @click="pushaddress('binhduong')">
                    <h3 class="text_blog">Bình Dương</h3>
                    <img class="img_blog" src="https://media.mia.vn/uploads/blog-du-lich/binh-duong-cover-1657608288.jpg" />
                </div>
            </div>
        </div>
        <div class="list_blogs d-flex flex-wrap">
            <div class="box col-xs-6 col-sm-6 col-md-3 ">
                <div class="blogs_item" @click="pushaddress('binhphuoc')">
                    <h3 class="text_blog">Bình Phước</h3>
                    <img class="img_blog" src="https://media.mia.vn/uploads/blog-du-lich/binh-phuoc-cover-1657611003.jpg" />
                </div>
            </div>
            <div class="box col-xs-6 col-sm-6 col-md-3 ">
                <div class="blogs_item" @click="pushaddress('buonmathuot')">
                    <h3 class="text_blog">Buôn Ma Thuộc</h3>
                    <img class="img_blog"
                        src="https://media.mia.vn/uploads/blog-du-lich/buon-ma-thuot-cover-1649320675.jpg" />
                </div>
            </div>
            <div class="box col-xs-6 col-sm-6 col-md-3">
                <div class="blogs_item" @click="pushaddress('camau')">
                    <h3 class="text_blog">Cà Mau</h3>
                    <img class="img_blog" src="https://media.mia.vn/uploads/blog-du-lich/ca-mau-cover-1662518016.jpg" />
                </div>
            </div>
            <div class="box col-xs-6 col-sm-6 col-md-3">
                <div class="blogs_item" @click="pushaddress('cantho')">
                    <h3 class="text_blog">Cần Thơ</h3>
                    <img class="img_blog" src="https://media.mia.vn/uploads/blog-du-lich/can-tho-cover-1649319729.jpg" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.blogs {
    padding: 0 52px;
}

.list_blogs {}

.box {
    border-radius: 10px;
    margin-top: 4px;
    height: 100%;
    overflow: hidden;
}

.blogs_item {
    padding: 0px 8px;
    position: relative;
    width: 100%;
    height: 100%;
}

.blogs_item .text_blog {
    z-index: 1;
    font-weight: 400;
    color: var(--color--white--);
    position: absolute;
    bottom: 45%;
    visibility: hidden;
    width: 100%;
    text-align: center;
}

.blogs_item .img_blog {
    width: 100%;
    height: 400px;
    border-radius: 10px;
}

.blogs_item:hover .img_blog {
    filter: brightness(60%);
}

.blogs_item:hover .text_blog {
    visibility: visible;
}
</style>