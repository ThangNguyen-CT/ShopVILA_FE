<script>
import OrderService from '../services/Order.service';
export default {
    data() {
        return {
            sdt: '',
            order: {}
        }
    },
    methods: {
        async getorder() {
            try {
                console.log(this.sdt);
                this.order = await OrderService.get(this.sdt);
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>
<template>
    <div class="container">
        <h3>Kiểm tra đơn hàng</h3>
        <div class="phone">
            <input type="text" name="phone" id="phone_search" placeholder="Nhập số điện thoại" v-model="sdt">
            <button class="btn btn-primary" @click="getorder()">Tìm</button>
        </div>
        <div class="wrapper-order">
            <div v-for="(item, index) in order" class="order">
                <div class="order-info">
                    <span>Mã đơn hàng : {{ item._id }}</span><br>
                    <span class="name">Khách hàng :{{ item.name }}</span><br>
                    <span>SDT : {{ item.m }}</span><br>
                    <span>Gmail : {{ item.e }}</span><br>
                    <span>Địa chỉ nhận hàng : {{ item.address }}</span><br>
                    <span>Trạng thái đơn hàng : {{ item.orderStatus }}</span><br>
                    <span>Phương thức thanh toán : {{ item.paymentIntent }}</span><br>
                    <span>Tổng tiền : {{ item.totalprice }} đ</span><br>  
                </div>
                <br>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container{
    height: 500px;
}
.phone{
    display: flex;
    justify-content: center;
}
.phone input{
    width: 70%;
    margin:0px 8px 10px 0px 
}
.wrapper-order {
    padding: 10px;
    background-color: aliceblue;
    overflow-y: scroll;
    height: 300px;
}
.order{
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
}
</style>
