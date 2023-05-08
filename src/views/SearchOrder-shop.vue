<script>
import OrderService from '../services/Order.service';
import loadPage from '../components/loadPage.vue';
export default {
    data() {
        return {
            checkload: false,
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
                this.checkload = true;
                this.order = await OrderService.get(this.sdt);
                this.checkload = false;
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
        <h3>Lịch sữ đặt hàng</h3>
        <form class="phone" @submit.prevent="getorder()">
            <input type="phone" name="phone" id="phone_search" placeholder="Nhập số điện thoại..." v-model="sdt" required>
            <button type="submit" class="btn btn-primary">Tìm</button>
        </form>
        <div class="wrapper-order">
            <div v-for="(item, index) in order" class="order" v-if="order.length != 0">
                <div class="order-info">
                    <span class="ellipsis" style="width: 200px;"> <span>Mã đơn hàng : </span>{{ item._id }}</span><br>
                    <span class="ellipsis" style="width: 200px;"> <span>Khách hàng :</span>{{ item.name }}</span><br>
                    <span class="ellipsis" style="width: 100px;"> <span>SDT : </span>{{ item.m }}</span><br>
                    <span class="ellipsis" style="width: 300px;"> <span>Địa chỉ nhận hàng : </span>{{ item.address
                    }}</span><br>
                    <span> <span>Ngày đặt : </span>{{ item.createdAt }}</span><br>
                    <span> <span>Trạng thái đơn hàng : </span>{{ item.orderStatus }}</span><br>
                    <span> <span>Trạng thái thanh toán :</span>{{ item.statusPayment }}</span><br>
                    <span> <span>Phương thức thanh toán : </span>{{ item.paymentIntent }}</span><br>
                    <span> <span>Tổng tiền : </span>{{ item.totalprice }} đ</span>
                </div>
            </div>
            <div v-else>
                <h6 class="text-center" style="height: 175px;">Không tìm thấy thông tin</h6>
            </div>
        </div>
    </div>
</template>
<style scoped>
.ellipsis {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.phone {
    display: flex;
    justify-content: center;
}

.phone button {
    margin-bottom: 10px;
}

.phone input {
    width: 70%;
    margin: 0px 8px 10px 0px
}

.order {
    padding: 10px;
    background-color: #eae8e8;
    border-bottom: 1px solid #888888;
}

.order span span {
    font-weight: 700;
    color: #2016e3;
}

.wrapper-order {
    margin-bottom: 10px;
    border-radius: 10px;
    overflow-y: scroll;
    height: 450px;
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
