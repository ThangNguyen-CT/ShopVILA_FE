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
                this.checkload = true;
                this.orderinfo = await OrderService.getbyId(this.id);
                this.showcheck = true;
                this.checkload = false;
            } catch (error) {
                this.checkload = false;
                this.showcheck = false;
                alert("Không tìm thấy đơn hàng này");
                this.id = '';
                console.log(error);
            }
        }
    },
    mounted(){
        window.scrollTo(0, 0);
    }
}
</script>
<template>
    <loadPage v-if="checkload"></loadPage>
    <div class="container">
        <h3>Kiểm tra đơn hàng</h3>
        <form class="idorder" @submit.prevent="getorderbyid()">
            <input type="text" name="idorder" id="idorder" placeholder="Nhập mã đơn hàng..." v-model="id" required>
            <button class="btn btn-primary" type="submit" style="margin-bottom: 8px;">Tìm</button>
        </form>
        <div class="order">
            <div v-if="showcheck" class="order-info">
                <span class="ellipsis" style="width: 200px;"><span>Mã đơn hàng : </span>{{ orderinfo._id }}</span><br>
                <span class="ellipsis" style="width: 200px;"><span>Khách hàng </span>{{ orderinfo.name }}</span><br>
                <span class="ellipsis" style="width: 100px;"><span>SDT :</span>{{ orderinfo.m }}</span><br>
                <span class="ellipsis" style="width: 300px;"><span>Địa chỉ nhận hàng :</span>{{ orderinfo.address
                }}</span><br>
                <span><span>Trạng thái đơn hàng :</span>{{ orderinfo.statusPayment }}</span><br>
                <span><span>Trạng thái thanh toán :</span>{{ orderinfo.orderStatus }}</span><br>
                <span><span>Phương thức thanh toán :</span>{{ orderinfo.paymentIntent }}</span><br>
                <div v-for="(item, index) in orderinfo.products">
                    <span><span>Sản phẩm {{ index + 1 }} : </span></span><br>
                    <span><span>Mã sản phẩm : </span>{{ item.product }} X {{ item.count }}</span>
                </div><br>
                <span><span>Tổng tiền : </span>{{ orderinfo.totalprice }} đ</span>
            </div>
            <div v-else style="height: 165px;">

            </div>
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

.order-info {
    height: 100%;
    background-color: #eae8e8;
    padding: 10px;
    border-radius: 10px;
}

.order-info span {
    display: inline-block;
}

.order-info span span {
    font-weight: 700;
    color: #2016e3;
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
    height: 100%;
}</style>
