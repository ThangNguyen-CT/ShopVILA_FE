<script>
import OrderService from '../services/Order.service';
import loadPage from '../components/loadPage.vue';
export default {
    data() {
        return {
            checkload: false,
            id: '',
            orderinfo: {},
            showcheck: false
        }
    },
    components: {
        loadPage
    },
    methods: {
        async getorderbyid() {
            try {
                if (this.id != '') {
                    this.checkload = true;
                    this.orderinfo = await OrderService.getbyId(this.id);
                    this.showcheck = true;
                    this.checkload = false;
                }
            } catch (error) {
                this.checkload = false;
                this.showcheck = false;
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
        <form  class="idorder" @submit.prevent="getorderbyid()">
            <input type="text" name="idorder" id="idorder" placeholder="Nhập mã đơn hàng..." v-model="id">
            <button class="btn btn-primary" type="submit" style="margin-bottom: 8px;">Tìm</button>
        </form>
        <div v-if="showcheck" class="order">
            <div class="order-info">
                <p class="ellipsis" style="width: 200px;"><span>Mã đơn hàng : </span>{{ orderinfo._id }}</p><br>
                <p class="ellipsis" style="width: 200px;"><span>Khách hàng </span>{{ orderinfo.name }}</p><br>
                <p class="ellipsis" style="width: 100px;"><span>SDT :</span>{{ orderinfo.m }}</p><br>
                <p class="ellipsis" style="width: 300px;"><span>Địa chỉ nhận hàng :</span>{{ orderinfo.address }}</p><br>
                <p><span>Trạng thái đơn hàng :</span>{{ orderinfo.statusPayment }}</p><br>
                <p><span>Trạng thái thanh toán :</span>{{ orderinfo.orderStatus }}</p><br>
                <p><span>Phương thức thanh toán :</span>{{ orderinfo.paymentIntent }}</p><br>
                <div v-for="(item, index) in orderinfo.products">
                    <p><span>Sản phẩm {{ index + 1 }} </span></p>
                    <p><span>Mã sản phẩm : </span>{{ item.product }} x{{ item.count }}</p>
                </div>
                <p><span>Tổng tiền : </span>{{ orderinfo.totalprice }} đ</p><br>
            </div>
        </div>
        <div v-else style="height: 205px;">
            <h6 class="text-center">Chưa có đơn hàng</h6>
        </div>
    </div>
</template>
<style scoped>
.idorder {
    display: flex;
    justify-content: center;
}

.idorder input {
    width: 70%;
    margin: 0px 8px 10px 0px
}
.order-info{
    height: 100%;
}
.order-info p {
    margin: 0;
    padding: 0;

}

.order-info p span {
    color:#f69478;
}

.ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.container {
    height: 100%;
}

.order {    
    padding: 10px;
    border:1px solid #888888;
    height: 100%;
}
</style>
