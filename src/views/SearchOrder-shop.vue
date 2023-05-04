<script>
import OrderService from '../services/Order.service';
import loadPage from '../components/loadPage.vue';
export default {
    data() {
        return {
            checkload : false,
            sdt: '',
            order: {}
        }
    },
    components: {
        loadPage
    },
    methods: {
        async getorder() {
            try {
                if (this.sdt != '') {
                    this.checkload = true;
                    this.order = await OrderService.get(this.sdt);
                    this.checkload = false;
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>
<template>
    <loadPage v-if="checkload"></loadPage>
    <div class="container">
        <h3>Kiểm tra đơn hàng</h3>
        <div class="phone">
            <input type="text" name="phone" id="phone_search" placeholder="Nhập số điện thoại" v-model="sdt">
            <button class="btn btn-primary" @click="getorder()">Tìm</button>
        </div>
        <div class="wrapper-order">
            <div v-for="(item, index) in order" class="order" v-if="order.length != 0">
                <div class="order-info">
                    <p class="ellipsis" style="width: 200px;">Mã đơn hàng : {{ item._id }}</p><br>
                    <p class="ellipsis" style="width: 200px;">Khách hàng :{{ item.name }}</p><br>
                    <p class="ellipsis" style="width: 100px;">SDT : {{ item.m }}</p><br>
                    <p class="ellipsis" style="width: 150px;">Gmail : {{ item.e }}</p><br>
                    <p class="ellipsis" style="width: 300px;">Địa chỉ nhận hàng : {{ item.address }}</p><br>
                    <p>Trạng thái đơn hàng : {{ item.orderStatus }}</p><br>
                    <p>Phương thức thanh toán : {{ item.paymentIntent }}</p><br>
                    <p>Tổng tiền : {{ item.totalprice }} đ</p><br>
                </div>
                <br>
            </div>
            <div v-else>
                <h6 class="text-center">Chưa có đơn hàng</h6>
            </div>
        </div>
    </div>
</template>
<style scoped>
.order-info p{
    margin: 0;
    padding: 0;
}
.ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
}
.container {
    height: 500px;
}

.phone {
    display: flex;
    justify-content: center;
}

.phone input {
    width: 70%;
    margin: 0px 8px 10px 0px
}

.wrapper-order {
    padding: 10px;
    background-color: aliceblue;
    overflow-y: scroll;
    height: 300px;
}

.order {
    border-bottom: 1px solid #888888;

}

.wrapper-order::-webkit-scrollbar {
    width: 4px;
}

.wrapper-order::-webkit-scrollbar-track {
    background-color: #fff;
}

.wrapper-order::-webkit-scrollbar-thumb {
    background-color: #000;
    border-radius: 50px;
}</style>
