<script>
import OrderService from '../services/Order.service';
import loadPage from '../components/loadPage.vue';
export default {
    data() {
        return {
            dataOrder: {
                products: [],
                info: {},
            },
            checkLoad: false,
            checkOrder: false
        }
    },
    components: {
        loadPage
    },
    methods: {
        getDataOrder() {
            const listproduct = JSON.parse(localStorage.getItem('cartItems'));
            const Order = JSON.parse(localStorage.getItem('infoOrder'));
            if (listproduct && Order) {
                this.checkOrder = true;
                this.dataOrder.info = Order;
                this.dataOrder.products = listproduct;
            } else {
                this.checkOrder = false;
            }
        },
        async AcssescPay() {
            try {
                this.checkLoad = true;
                const response = await OrderService.create(this.dataOrder.info);
                this.checkLoad = false;
                localStorage.removeItem('cartItems');
                localStorage.removeItem('infoOrder');
                alert(`Đã xác nhận mua hàng mã đơn hàng của bạn là ${response._id} hãy ghi nhớ mã đơn hàng để kiểm tra đơn hàng bạn nhé !!!`);
                location.href = '/findId-order';
            } catch (error) {
                console.log(error);
            }
        },
        cancelOrder() {
            localStorage.removeItem('infoOrder');
            localStorage.removeItem('cartItems');
            if (confirm('Bạn có chắc chắn muốn hủy đơn hàng') == true) {
                location.href = '/';
            }
        }
    },
    mounted() {
        this.getDataOrder();
    }
}
</script>
<template>
    <loadPage v-if="checkLoad"></loadPage>
    <div v-if="!checkOrder" style="height: 300px;">
        <h6 class="text-center">Bạn chưa có đơn hàng, hãy mua hàng nào <router-link to="/">Trang chủ</router-link></h6>
    </div>
    <div class="container" v-else>
        <h3 class="text-center">Chi tiết đơn hàng</h3>
        <div class="orders-info">
            <div class="cussumer-info">
                <h6>Thông tin của bạn</h6>
                <span>Họ và tên :{{ dataOrder.info.name }}</span><br>
                <span>Email : {{ dataOrder.info.e }}</span><br>
                <span>Số địa thoại : {{ dataOrder.info.m }}</span><br>
                <span>Địa chỉ nhận hàng : {{ dataOrder.info.address }}</span><br>
                <span>Ghi chú : {{ dataOrder.info.des }}</span>
            </div>
            <div class="product-info">
                <h6>Thông tin đơn hàng</h6>
                <div v-for="(item, index) in dataOrder.products">
                    <img :src="item.images[0].url" alt="" width="50" height="50">
                    <span>{{ item.title }}</span>
                    <span>x{{ dataOrder.info.products[index].count }}</span>
                    <span style="color: red;">{{ item.price * dataOrder.info.products[index].count }}</span>
                </div>
                <div>
                    <span>Hình thức thanh toán : {{ dataOrder.info.paymentIntent }}</span>
                    <span>Tổng giá tiền đơn hàng : {{ dataOrder.info.totalprice }}</span><br>
                </div>
            </div>
            <button class="btn btn-primary" style="margin-right: 10px;" @click="AcssescPay()">Xác nhận</button>
            <button class="btn btn-danger" @click="cancelOrder()">Hủy</button>
        </div>
    </div>
</template>
<style>
.orders-info {
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: beige;
    border-radius: 10px;
    margin-bottom: 10px;
}

.product-info div {
    display: flex;
    margin-bottom: 10px;
}

.product-info div img {
    border-radius: 5px;
}

.product-info div span {
    margin: 0 20px;
}
</style>