<script>
import axios from 'axios';
import loading from '../components/loadPage.vue';
export default {
    data() {
        return {
            address: [],
            districts: [],
            wards: [],
            name_city: 'Thành phố Cần Thơ',
            name_districts: '',
            name_wards: '',
            dataCart: [],
            textAdress: '',
            cartItem: {
                products: [],
                paymentIntent: 'COD',
                statusPayment: 'No',
                sex: 'male',
                address: '',
                name: '',
                e: '',
                m: '',
                des: '',
                totalprice: 0
            },
            checkLoad: false
        }
    },
    components: {
        loading
    },
    computed: {
        toltalPrice() {
            var total = 0;
            if(this.dataCart){
                this.dataCart.map((item, index) => {
                    total += item.price * Number(this.cartItem.products[index].count);
                })
                this.cartItem.totalprice = total;
            }
            return total;
        },
        getlengthCart(){
            if(this.dataCart){
                return this.dataCart.length;
            }else{
                return 0;
            }
        }
    },
    methods: {
        getaddress() {
            const _this = this;
            axios.get(`https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json`)
                .then(res => {
                    _this.address = res.data;
                    _this.address.map((item) => {
                        if (item.Name == _this.name_city) {
                            _this.name_districts = item.Districts[0].Name;
                            _this.districts = item.Districts;
                        }
                    })
                    this.getwards();
                })
                .catch(error => console.log(error));
        },
        getDistricts() {
            this.address.map((item) => {
                if (item.Name == this.name_city) {
                    this.districts = item.Districts;
                }
            })
            this.getwards();
        },
        getwards() {
            this.districts.map((item) => {
                if (item.Name == this.name_districts) {
                    this.name_wards = item.Wards[0].Name;
                    this.wards = item.Wards;
                }
            })
        },
        getdataCart() {
            this.dataCart = JSON.parse(localStorage.getItem('cartItems'));
            if (this.dataCart) {
                this.cartItem.products = this.dataCart.map((item) => ({ productId: item._id, count: 1 }));
            }
        },
        deleteCartItem(index) {
            this.dataCart.splice(index, 1);
            localStorage.setItem('cartItems', JSON.stringify(this.dataCart));
            location.reload();
        },
        getQuatity(index) {
            const quantity = document.querySelectorAll('.quantity-cart');
            this.cartItem.products[index].count = Number(quantity[index].value);
        },
        getPayment(e) {
            this.cartItem.paymentIntent = e.target.value;
        },
        getGender(e) {
            this.cartItem.sex = e.target.value;
        },
        async pay() {
            this.cartItem.address = this.name_city + ", " + this.name_districts + ", " + this.name_wards + ", " + this.textAdress;
            localStorage.removeItem('infoOrder');
            localStorage.removeItem('details');
            localStorage.setItem('infoOrder', JSON.stringify(this.cartItem));
            this.$router.push({ name: 'order-details' });
        }
    },
    created() {
        this.getdataCart();
    },
    mounted() {
        this.getaddress();
    }
}
</script>
<template>
    <loading v-if="checkLoad"></loading>
    <nav>
        <a href="/">
            Trang chủ
        </a>
    </nav>
    <div v-if="getlengthCart == 0" class="not-cart">
        <img src="../assets/img/cart.png" alt="cart">
    </div>
    <div v-else class="payment container">
        <div class="info-cart">
            <h4>Giỏ hàng</h4>
            <div class="carts">
                <div class="cart-top" v-for="(item, index) in dataCart">
                    <div class="img-cart">
                        <img class="img-cart" :src="item.images[0].url" :alt="item.images[0].url" height="150" width="120">
                    </div>
                    <div class="cart-info">
                        <h6 class="cart-name">
                            {{ item.title }}
                        </h6>
                        <ul class="cart-voucher">
                            <li>Nhập "NEW BIE" giảm 10% cho vali từ 1 triệu</li>
                            <li>Ưu đãi 30% từ 10/4 - 1/5</li>
                        </ul>
                        <div class="quatily-and-price">
                            <div class="cart-quatily-product">
                                <button class="btn btn-link px-2"
                                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                    @click="getQuatity(index)">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <input id="number" min="1" name="quantity" value="1" type="number"
                                    class="form-control form-control-sm quantity-cart" />
                                <button class="btn btn-link px-2"
                                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                    @click="getQuatity(index)">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            <div class="cart-price">
                                <p>{{ item.price }} <span>₫</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="btn-cart-del">
                        <i class="fas fa-trash-alt" @click="deleteCartItem(index)"></i>
                    </div>
                </div>
                <div class="cart-bot">
                    <div class="total-money">
                        <div class="total-product-price">
                            <h6>Tổng tiền sẩn phẩm :</h6>
                            <p>{{ toltalPrice }} <span>₫</span></p>
                        </div>
                        <div class="total-price-ship">
                            <h6>Phí vận chuyển : </h6>
                            <p>150.000 <span>₫</span></p>
                        </div>
                        <div class="total">
                            <h6>Cần thanh toán : </h6>
                            <p>{{ toltalPrice + 150000 }}<span>₫</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-pay">
            <form class="was-validated" action="" @submit.prevent="pay()">
                <div class="mb-3 mt-3">
                    <input type="radio" value="male" id="male" name="gender" style="margin-right: 8px;" checked
                        @click="getGender"><label for="male" style="margin-right: 8px;">Anh</label>
                    <input type="radio" value="female" id="female" name="gender" style="margin-right: 8px;"
                        @click="getGender"><label for="female">Chị</label>
                </div>
                <div class="mb-3 mt-3 form-style">
                    <input type="text" class="form-control" id="phone" placeholder="Số điện thoại (bắt buộc)" name="phone"
                        required v-model="cartItem.m">
                    <div class="invalid-feedback">Không để rỗng trường này</div>
                </div>
                <div class="mb-3 mt-3 form-style">
                    <input type="name" class="form-control" id="name" placeholder="Họ và tên (bắt buộc)" name="name"
                        required v-model="cartItem.name">
                    <div class="invalid-feedback">Không để rỗng trường này</div>
                </div>
                <div class="mb-3 mt-3 form-style">
                    <input type="text" class="form-control" id="email" placeholder="Địa chỉ email (bắt buộc)" name="email"
                        required v-model="cartItem.e">
                    <div class="invalid-feedback">Không để rỗng trường này</div>
                </div>
                <div class="mb-3 mt-3 form-style">
                    <select class="form-select form-select-sm mb-3" id="city" aria-label=".form-select-sm"
                        v-model="name_city" @change="getaddress()">
                        <option v-for="item in address" :value="item.Name" selected>{{ item.Name }}</option>
                    </select>
                    <select class="form-select form-select-sm mb-3" id="district" aria-label=".form-select-sm"
                        v-model="name_districts" @change="getDistricts()">
                        <option v-for="item in districts" :value="item.Name" selected>{{ item.Name }}</option>
                    </select>

                    <select class="form-select form-select-sm mb-3" id="ward" aria-label=".form-select-sm"
                        v-model="name_wards">
                        <option v-for="item in wards" :value="item.Name" selected>{{ item.Name }}</option>
                    </select>
                </div>
                <div class="mb-3 mt-3 form-style">
                    <input type="text" class="form-control" id="home" placeholder="Số nhà, tên đường (bắt buộc)" name="home"
                        required v-model="textAdress">
                    <div class="invalid-feedback">Không để rỗng trường này</div>
                </div>
                <div class="mb-3 mt-3 form-style">
                    <textarea class="form-control" id="note" placeholder="Ghi chú (không bắt buộc)" name="note"
                        v-model="cartItem.des"></textarea>
                    <div class="invalid-feedback">Không để rỗng trường này</div>
                </div>
                <div class="mb-3 mt-3">
                    <p>Hình thức giao hàng</p>
                    <div class="wrapper-ship">
                        <div class="input-ship">
                            <input type="radio" name="ship" id="ship" value="nice" checked>
                            <label for="ship" style="margin-left: 8px;">Giao hàng tiêu chuẩn</label>
                        </div>
                    </div>
                </div>
                <div class="mb-3 mt-3">
                    <p>Hình thức thanh toán</p>
                    <div class="wrapper-pay">
                        <ul>
                            <li class="styled-radio method-cod"><input name="paymentMethod" type="radio" id="method_cod"
                                    value="COD" checked @change="getPayment"><label for="method_cod">
                                    <div class="img-box"><img src="https://mia.vn/images/payment-cod.svg"
                                            style="height: 25px; width: 50px; margin-right: 3px; margin-top: -5px;"></div>
                                    <span>Thanh toán khi nhận hàng (COD)</span>
                                </label></li>
                            <li class="styled-radio method-card"><input name="paymentMethod" type="radio" id="method_card"
                                    value="Online Pay" @change="getPayment"><label for="method_card">
                                    <div class="img-box"><img src="https://mia.vn/images/payment-zalo.svg"
                                            style="height: 15px;"></div>
                                    <span>Thanh toán online bằng thẻ (Visa, Master, JCB)qua cổng ZaloPay</span>
                                </label></li>
                            <li class="styled-radio method-atm"><input name="paymentMethod" type="radio" id="method_atm"
                                    value="ATM ZaloPay" @change="getPayment"><label for="method_atm">
                                    <div class="img-box"><img src="https://mia.vn/images/payment-zalo.svg"
                                            style="height: 15px;"></div>
                                    <span>Thanh toán online bằng thẻ ATM nội địa qua cổng ZaloPay</span>
                                </label></li>
                            <li class="styled-radio method-zaloapp"><input name="paymentMethod" type="radio"
                                    id="method_qrcode" value="QR Code ZaloPay" @change="getPayment"><label
                                    for="method_qrcode">
                                    <div class="img-box"><img src="https://mia.vn/images/payment-zalo.svg"
                                            style="height: 15px;"></div>
                                    <span>Thanh toán online bằng QR Code qua cổng ZaloPay</span>
                                </label></li>
                            <li class="styled-radio method-kredivo"><input name="paymentMethod" type="radio"
                                    id="method_kredivo" value="Online Kredivo" @change="getPayment"><label
                                    for="method_kredivo">
                                    <div class="img-box"><img src="https://mia.vn/images/payment-kredivo.svg"
                                            style="height: 15px;"></div>
                                    <span>Thanh toán online - Mua trước trả sau qua cổng Kredivo</span>
                                </label></li>
                            <li class="styled-radio method-momo"><input name="paymentMethod" type="radio" id="method_momo"
                                    value="MoMo Pay" @change="getPayment"><label for="method_momo">
                                    <div class="img-box"><img src="https://mia.vn/images/payment-momo.svg"
                                            style="height: 15px;"></div>
                                    <span>Thanh toán online qua cổng MoMo</span>
                                </label></li>
                        </ul>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-pay">Thanh toán</button>
            </form>
        </div>
    </div>
</template>
<style scoped>
.not-cart {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}

.not-cart img {
    width: 800px;
    height: 500px;
}

.payment {
    width: 40%;
    margin-bottom: 16px;
}

.form-style input,
.form-style select,
.form-style textarea {
    height: 50px;
    border-radius: 10px;
}

.wrapper-ship,
.wrapper-pay {
    border-radius: 10px;
    border: 1px solid #000;
}

.input-ship,
.input-pay {
    padding: 16px;
}

.wrapper-pay ul {
    list-style: none;
    margin: 0;
    padding: 16px;
}

.styled-radio {
    display: flex;
}

.styled-radio label {
    display: flex;
    flex-wrap: wrap;
    margin: 0 16px;
}

.styled-radio label div {
    margin: 0 8px;
}

.btn-pay {
    width: 100%;
    background-color: var(--color--main--);
    border-radius: 10px;
    height: 50px;
    border: none;
}

.cart-top {
    display: flex;
    width: 100%;
    justify-content: space-around;
    border-bottom: 1px solid gray;
    margin-bottom: 30px;
}

.quatily-and-price {
    display: flex;
    justify-content: space-between;
}

.cart-quatily-product {
    display: flex;
}

.btn-cart-del {
    font-size: 20px;
    color: darkgray;
    display: flex;
    align-items: center;
}

.btn-cart-del i:hover {
    color: red;
}

.cart-quatily-product input {
    width: 50px;
}

.cart-bot {
    border-bottom: 1px solid gray;
    margin-bottom: 16px;
}

.cart-bot .total-money {
    display: flex;
    flex-direction: column;
}

.total-product-price,
.total-price-ship,
.total {
    display: flex;
    justify-content: space-between;
}

.total p {
    color: red;
}
</style>