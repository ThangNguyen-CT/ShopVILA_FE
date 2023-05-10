<script>
import blogdeltais from '../components/component-blog_deltais.vue'
export default {
    data() {
        return {
            data_blog: [{
                "title": "An giang",
                "decr": "Là mảnh ghép của vùng tứ giác Long Xuyên, An Giang sở hữu vẻ đẹp chân chất, giản đơn đậm nét miền Tây sông nước. Không chỉ nổi tiếng với miếu Bà Chúa Xứ, Rừng tràm Trà Sư hay dãy Thất Sơn, vùng đất này còn là điểm giao thoa của nhiều nền văn hóa lớn. Đừng bỏ lỡ cơ hội được một lần khám phá An Giang để tìm ra những điều đặc sắc của vùng đất linh thiêng này bạn nhé.",
                "img": ["https://media.mia.vn/uploads/blog-du-lich/an-giang-cover-1659581459.jpg", "https://media.mia.vn/uploads/blog-du-lich/mieu-ba-chua-xu-nui-sam-chau-doc-diem-den-tam-linh-tru-danh-nam-bo-1659708245.jpg", "https://media.mia.vn/uploads/blog-du-lich/that-son-bay-nui-vung-dat-tran-giu-linh-hon-1660412539.jpg", "https://media.mia.vn/uploads/blog-du-lich/chua-van-linh-nui-cam-dia-diem-linh-thieng-o-dat-an-giang-1659887881.jpg"],
                "addressFomus": ["Miếu bà", "Thất sơn - bảy núi", "Núi câm"],
                "slug": 'angiang'
            },
            {
                "title": "Cần thơ",
                "decr": "Cần Thơ, vùng đất từ lâu đã nổi tiếng với cái tên miền gạo trắng nước trong của đồng bằng sông Cửu Long.Bên cạnh vai trò là một trong những trung tâm hành chính lớn của cả nước, Cần Thơ còn là một địa chỉ du lịch đáng tin cậy của con dân đam mê du lịch bởi nơi đây hội tụ đủ hai yếu tố cảnh đẹp và văn hóa.Khám phá thêm về Thành phố Tây Đô trứ danh bằng cách đồng hành cùng khám phá bạn nhé!",
                "img": ["https://media.mia.vn/uploads/blog-du-lich/can-tho-cover-1649319729.jpg", "https://media.mia.vn/uploads/blog-du-lich/du-thuyen-can-tho-du-thuyen-ninh-kieu-voi-nhung-trai-nghiem-dang-nho-1651097092.jpg", "https://media.mia.vn/uploads/blog-du-lich/kham-pha-net-dac-sac-cua-cho-noi-cai-rang-chon-mien-tay-song-nuoc-1649149934.jpg", "https://media.mia.vn/uploads/blog-du-lich/thien-vien-truc-lam-phuong-nam-diem-du-lich-tam-linh-can-tho-1649220395.jpg"],
                "addressFomus": ["Du thuyền Ninh Kiều", "Chợ nổi Cái Răng", "Thiền viện Trúc Lâm Phương Nam"],
                "slug": 'cantho'
            },
            {
                "title": "Bảo lộc",
                "decr": "Nép mình về phía Tây Nam của Lâm Đồng, Bảo Lộc mang một màu sắc yên bình, sâu lắng khác hẳn với người anh em Đà Lạt nhộn nhịp. Nằm trọn trên cao nguyên Di Linh, vùng đất này sở hữu nhiều hồ, thác nước đẹp và hùng vĩ, cùng khí hậu mát mẻ thích hợp cho nghỉ dưỡng. Những năm gần đây, du lịch Bảo Lộc có những bước đột phá mạnh mẽ, hứa hẹn sẽ là một điểm đến đặc sắc tiếp theo sau thành phố Đà Lạt ngàn hoa.",
                "img": ["https://media.mia.vn/uploads/blog-du-lich/bao-loc-cover-1649320597.jpg", "https://media.mia.vn/uploads/blog-du-lich/kham-pha-doi-bat-up-bao-loc-diem-san-may-tuyet-dep-1653621190.jpg", "https://media.mia.vn/uploads/blog-du-lich/lac-vao-doi-thong-phuong-boi-bao-loc-vo-cung-tho-mong-1653928745.jpg", "https://media.mia.vn/uploads/blog-du-lich/doc-dao-ho-tao-hong-o-b-lao-dep-nhu-tranh-tai-lam-dong-1653852388.jpg"],
                "addressFomus": ["Đồi Bát Úp Bảo Lộc", "Đồi Thông Phương Bối Bảo Lộc", "Hồ Tảo Hồng ở B'lao"],
                "slug": 'baoloc'
            },
            {
                "title": "Bến tre",
                "decr": "Là ốc đảo xanh giữa chung quanh bốn bề sông nước, du lịch Bến Tre là lựa chọn hoàn hảo dành cho những ai yêu thích khám phá cuộc sống miệt vườn dân dã. Đến với vùng sông nước trù phú này vào ngày nắng đẹp, bạn chắc chắn sẽ thích thú khi nhìn thấy hình ảnh vườn cây ăn trái chín rộ, ao đìa đầy ắp cá tôm và nụ cười chất phác, xởi lởi của người dân địa phương.",
                "img": ["https://media.mia.vn/uploads/blog-du-lich/ben-tre-cover-1664335486.jpg", "https://media.mia.vn/uploads/blog-du-lich/khu-luu-niem-nguyen-thi-dinh-noi-ghi-dau-cuoc-doi-vi-nu-tuong-dang-kinh-1664626513.jpg", "https://media.mia.vn/uploads/blog-du-lich/nghe-lam-keo-dua-ben-tre-net-dep-truyen-thong-qua-bao-the-he-1666973822.jpg", "https://media.mia.vn/uploads/blog-du-lich/khu-di-tich-lang-mo-nguyen-dinh-chieu-tai-hien-khung-canh-lich-su-1665831257.jpg"],
                "addressFomus": ["Khu Lưu Niệm Nguyễn Thị Định", "Nghề làm kẹo dừa Bến Tre", "Khu di tích lăng mộ Nguyễn Đình Chiểu"],
                "slug": 'bentre'
            },
            {
                "title": "Bình dương",
                "decr": "Bạn đã từng nhìn thấy khung cảnh rừng cao su vào những ngày chùng chình thu sang? Nếu có dịp du lịch Bình Dương, ắt hẳn hình ảnh ấy sẽ mang đến cho bạn những cảm xúc rất khác. Vậy, thành phố mới này còn điều gì đặc biệt, cùng khám phá nhé!",
                "img": ["https://media.mia.vn/uploads/blog-du-lich/binh-duong-cover-1657608288.jpg", "https://media.mia.vn/uploads/blog-du-lich/kham-pha-vuon-trai-cay-lai-thieu-gia-re-ngon-nuc-tieng-binh-duong-1655234327.jpg", "https://media.mia.vn/uploads/blog-du-lich/tim-hieu-ve-lang-nghe-gom-su-binh-duong-so-huu-thuong-hieu-noi-danh-1655221536.jpg", "https://media.mia.vn/uploads/blog-du-lich/nha-tu-phu-loi-mot-trong-nhung-nha-tu-lon-nhat-cua-my-tai-binh-duong-1655474043.jpg"],
                "addressFomus": ["Vườn trái cây Lái Thiêu", "Làng ghề gốm sứ Bình Dương", "Nhà tù Phú Lợi"],
                "slug": 'binhduong'
            },
            {
                "title": "Bình phước",
                "decr": "Tạm quên đi những cánh rừng điều bạt ngàn, Bình Phước trở thành điểm đến ẩn chứa nhiều điều thú vị trong mắt người lữ khách. Trong hành trình du lịch Bình Phước, bạn sẽ có cơ hội dạo bước giữa trảng cỏ thênh thang, tận hưởng cảm giác chinh phục thiên nhiên khi trekking băng rừng. Cùng khám phá nhé!",
                "img": ["https://media.mia.vn/uploads/blog-du-lich/binh-phuoc-cover-1657611003.jpg", "https://media.mia.vn/uploads/blog-du-lich/binh-phuoc-cover-1657611003.jpg", "https://media.mia.vn/uploads/blog-du-lich/den-ho-suoi-giai-tan-huong-chuyen-da-ngoai-sieu-ly-tuong-1657004443.jpg", "https://media.mia.vn/uploads/blog-du-lich/doc-5-cay-dia-diem-dung-chan-ngam-may-bay-ly-tuong-o-binh-phuoc-1657045785.jpg", "https://media.mia.vn/uploads/blog-du-lich/kdl-binh-long-pho-diem-den-vui-choi-giai-tri-cuc-hot-tai-binh-phuoc-1656934362.jpg"],
                "addressFomus": ["Hồ Suối Giai", "Dốc 5 cây", "KDL Bình Long Phố"],
                "slug": 'binhphuoc'
            },
            {
                "title": "Buôn ma thuột",
                "decr": "Nhắc đến Thủ phủ cà phê Việt Nam, chắc hẳn người người nhà nhà đều nghĩ đến Buôn Ma Thuột đại ngàn. Tuy nhiên, thành phố này không chỉ có cà phê thôi đâu, phố núi này còn sở hữu phong cảnh vô cùng ấn tượng rất thích hợp để du hí nữa đấy. Đam mê xê dịch thì cùng khám phá Buôn Mê ngay và luôn nhé!",
                "img": ["https://media.mia.vn/uploads/blog-du-lich/buon-ma-thuot-cover-1649320675.jpg", "https://media.mia.vn/uploads/blog-du-lich/chua-sac-tu-khai-doan-va-ve-dep-co-kinh-lam-say-long-nguoi-1652223511.jpg", "https://media.mia.vn/uploads/blog-du-lich/kham-pha-tron-ven-cum-3-thac-dray-sap-dray-nur-gia-long-1651479335.jpg", "https://media.mia.vn/uploads/blog-du-lich/bao-tang-the-gioi-ca-phe-voi-khong-gian-doc-dao-noi-tay-nguyen-gio-long-1652167457.jpg"],
                "addressFomus": ["Chùa Sắc Tứ Khải Đoan", "Cụm 3 thác Dray Sap,Dray Nur,Gia Long", "Bảo tàng Thế giới cà phê"],
                "slug": 'buonmathuot'
            },
            {
                "title": "Cà mau",
                "decr": "Bạn có muốn được một lần nghe đờn ca tài tử giữa khung cảnh miệt vườn yên bình? Trong hành trình du lịch Cà Mau, đất Mũi linh thiêng ở vùng đất cực Nam Tổ quốc, bạn chắc chắn sẽ nhận được nhiều hơn thế. Cùng khám phá trọn vẹn nét đẹp đất và người nơi điểm đến cuối cùng trên dải đất hình chữ S bạn nhé.",
                "img": ["https://media.mia.vn/uploads/blog-du-lich/ca-mau-cover-1662518016.jpg", "https://media.mia.vn/uploads/blog-du-lich/kham-pha-khu-du-lich-mui-ca-mau-tai-vung-cuc-nam-to-quoc-1662716247.jpg", "https://media.mia.vn/uploads/blog-du-lich/diem-danh-cac-dia-diem-tham-quan-tai-ca-mau-mien-phi-ve-vao-cong-1662644718.jpg", "https://media.mia.vn/uploads/blog-du-lich/vuon-quoc-gia-mui-ca-mau-man-nhan-voi-he-sinh-thai-phong-phu-1662855584.jpg"],
                "addressFomus": ["Khu du lịch Mũi Cà Mau", "Tham quan Cà Mau", "Vườn quốc gia"],
                "slug": 'camau'
            }
            ]
        }
    },
    components: {
        blogdeltais
    },
    computed: {
        getParams() {
            return this.$route.params.address;
        }
    },
    mounted() {
        window.scrollTo(0, 0);
    }
}
</script>
<template>
    <div style="margin-left: 18px;">
        <router-link to="/" style="text-decoration: none; color: #000;">Trang chủ</router-link>
        <router-link to="/blog" style="text-decoration: none; color: #000;">/Cẩm nang du lịch</router-link>
        /{{ getParams }}
    </div>
    <div class="header_blog text-center">
        <h1>Thông tin chi tiết</h1>
    </div>
    <div class="main_blog">
        <blogdeltais :data_blog="data_blog"></blogdeltais>
    </div>
</template>
<style scoped>
.main_blog {
    margin-bottom: 32px;
}
</style>