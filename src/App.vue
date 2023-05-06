<script>
import headerVue from './components/component-header.vue'
export default {
    date() {
        return {

        }
    },
    components: {
        headerVue
    }
}
</script>
<template>
    <h1>Test B1906598</h1>
    <headerVue></headerVue>
    <div class="main">
        <router-view></router-view>
    </div>
    <div class="footer">
        <div class="top-footer">
            <ul class="d-flex justify-content-around">
                <li class="d-flex">
                    <div class="img-box">
                        <img src="https://mia.vn/images/policy/warranty.svg" alt="mia.vn">
                    </div>
                    <div class="info-box d-flex flex-column">
                        <span class="title-box">Bảo hành chọn đời</span>
                        <span class="title-box">Trên toàn hệ thống</span>
                    </div>
                </li>
                <li class="d-flex">
                    <div class="img-box">
                        <img src="https://mia.vn/images/policy/auth.svg" alt="mia.vn">
                    </div>
                    <div class="info-box d-flex flex-column">
                        <span class="title-box">Hàng chính hãng 100%</span>
                        <span class="title-box">Hoàn tiền nếu phát hiện hàng giả</span>
                    </div>
                </li>
                <li class="d-flex">
                    <div class="img-box">
                        <img src="https://mia.vn/images/policy/return.svg" alt="mia.vn">
                    </div>
                    <div class="info-box d-flex flex-column">
                        <span class="title-box">Đổi trả trong 365 ngày</span>
                        <span class="title-box">Nếu không hài lòng</span>
                    </div>
                </li>
                <li class="d-flex">
                    <div class="img-box">
                        <img src="https://mia.vn/images/policy/cashback.svg" alt="mia.vn">
                    </div>
                    <div class="info-box d-flex flex-column">
                        <span class="title-box">Hoàn tiền 100%</span>
                        <span class="title-box">Nếu sản phẩm gặp lỗi</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="end-footer">
            <div class="d-flex justify-content-around" style="padding-top: 32px;">
                <div class="d-flex flex-column">
                    <div class="sub-end-footer">
                        <ul>
                            <h5>Hệ thống siêu thị</h5>
                            <li class="telephone">
                                <small>Hotline: 8h-22h</small>
                                <p class="numberphone">0 9 0 6 8 6 8 6 8</p>
                            </li>
                            <li class="email">Email:thangnguyen1333@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div class="d-flex flex-column">
                    <div class="sub-end-footer">
                        <ul>
                            <h5>Hỗ trợ khách hàng</h5>
                            <li>
                                <router-link to="/policy/policyKHTT">
                                    Chích sách khách hàng thân thiết
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/policy/policyDT">
                                    Chích sách đổi trả
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/policy/policyBH">
                                    Chính sách bảo hành
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/policy/policyBM">
                                    Chính sách bảo mật
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/policy/policyVC">
                                    Phương thức vận chuyển
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/policy/policyPTTT">
                                    Phương thức thanh toán
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="d-flex flex-column">
                    <div class="sub-end-footer">
                        <ul>
                            <h5>Về Shop</h5>
                            <li>Giới thiệu</li>
                            <li>Tuyển dụng</li>
                            <li>Tin tức</li>
                        </ul>
                    </div>
                </div>
                <div class="d-flex flex-column">
                    <div class="social">
                        <h5>Kết nốt với Shopp</h5>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>


/* footer */
.footer .top-footer {
    background-color: #ffebd4;
    padding: 12px 0;
}

.top-footer ul {
    padding: 0;
    list-style-type: none;
}

.info-box {
    margin-left: 8px;
}

.info-box .title-box:first-child {
    font-weight: 700;
}

.end-footer {
    width: 100%;
    height: 100%;
    background-color: var(--color--main--);
}

.sub-end-footer ul {
    padding: 0;
    list-style-type: none;
    color: #fff;
    font-size: var(--size--text--);
    cursor: pointer;
}

.sub-end-footer ul li:hover {
    color: yellow;
}

.sub-end-footer ul li {
    margin: 8px 0;
}

.sub-end-footer ul li a {
    color: var(--color--white--);
    text-decoration: none;
}

.numberphone {
    font-size: 30px;
    font-weight: 700;
}

.email {
    font-size: 16px;
}

.social {
    color: #fff;
}

.social i {
    margin: 4px;
    font-size: 32px;
}</style>