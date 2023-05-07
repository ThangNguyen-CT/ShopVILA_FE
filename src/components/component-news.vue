<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        gotoblog() {
            this.$router.push('/blog');
        }
    }

}
</script>
<template>
    <div class="news row w-100" style="margin: auto;">
        <div class="news-tralver col-xs-12 col-sm-12 col-md-6">
            <div class="news-header d-flex justify-content-between">
                <h3 class="news-heading">
                    Cẩm nang du lịch
                </h3>
                <router-link class="view-add" to="/blog">Xem thêm</router-link>
            </div>
            <ul class="news-tralver-list d-flex justify-content-between">
                <li class="news-tralver-list-item" @click="gotoblog()">
                    <img src="https://media.mia.vn/uploads/blog-du-lich/lich-trinh-kham-pha-ha-giang-3n2d-chi-tiet-cho-ai-di-lan-dau-1669276932.jpg"
                        alt="anh1">
                    <span class="news-text">Lịch trình khám phá Hà Giang 3N2Đ chi tiết cho ai đi lần đầu</span>
                </li>
                <li class="news-tralver-list-item" @click="gotoblog()">
                    <img src="https://media.mia.vn/uploads/blog-du-lich/bo-tui-ngay-lich-trinh-kham-pha-ha-giang-3n2d-cuc-chi-tiet-1669275931.jpg"
                        alt="anh1">
                    <span class="news-text">Bỏ túi ngay lịch trình khám phá Hà Giang 3N2Đ cực chi tiết</span>
                </li>
                <li class="news-tralver-list-item" @click="gotoblog()">
                    <img src="https://media.mia.vn/uploads/blog-du-lich/ngam-hoang-hon-tren-song-mekong-va-thuong-ngoan-canh-sac-ruc-ro-1669275097.jpg"
                        alt="anh1">
                    <span class="news-text">Ngắm hoàng hôn trên sông Mekong và thưởng ngoạn cảnh sắc rực rỡ</span>
                </li>
            </ul>
        </div>
        <div class="news-shopping col-xs-12 col-sm-12 col-md-6">
            <div class="news-header d-flex justify-content-between">
                <h3 class="news-heading">
                    Tư vấn chọn mua
                </h3>
                <span class="view-add">Xem thêm</span>
            </div>
            <ul class="news-shopping-list d-flex justify-content-between">
                <li class="news-shopping-list-item">
                    <img src="https://media.mia.vn/uploads/tin-tuc/tim-kiem-cac-dong-vali-cho-be-ngoi-chat-luong-1675743358.jpg"
                        alt="anh1">
                    <span class="news-text">Lịch trình khám phá Hà Giang 3N2Đ chi tiết cho ai đi lần đầu</span>
                </li>
                <li class="news-shopping-list-item">
                    <img src="https://media.mia.vn/uploads/tin-tuc/lan-dau-mua-tui-xach-nu-hang-hieu-nen-chon-mau-gi-cho-dang-tien-1675075900.jpg"
                        alt="anh1">
                    <span class="news-text">Bỏ túi ngay lịch trình khám phá Hà Giang 3N2Đ cực chi tiết</span>
                </li>
                <li class="news-shopping-list-item">
                    <img src="https://media.mia.vn/uploads/tin-tuc/diem-danh-8-mau-tui-xach-xin-den-tu-cac-thuong-hieu-noi-tieng-hang-dau-the-gioi-1675075622.jpg"
                        alt="anh1">
                    <span class="news-text">Ngắm hoàng hôn trên sông Mekong và thưởng ngoạn cảnh sắc rực rỡ</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
.news-tralver,
.news-shopping {
    cursor: pointer;
}

.news-tralver-list,
.news-shopping-list {
    padding: 0;
    list-style-type: none;
}

.news-tralver-list li img,
.news-shopping-list li img {
    width: 100%;
    height: 120px;
    border-radius: 10px;
}

.news-tralver-list li,
.news-shopping-list li {
    width: 100%;
    border-radius: 10px;
    margin: 0 4px;
}

.news-tralver-list li span,
.news-shopping-list li span {
    max-width: 80%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    display: -webkit-box;
}

.view-add {
    display: flex;
    align-items: center;
    color: #f04f24;
}

.news-tralver-list li:hover span,
.news-shopping-list li:hover span {
    color: #f04f24;
}</style>
