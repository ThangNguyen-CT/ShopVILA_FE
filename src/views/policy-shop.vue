<script>
import policyBH from '../components/component-policy/policy-BH.vue';
import policyBM from '../components/component-policy/policy-BM.vue';
import policyDT from '../components/component-policy/policy-DT.vue';
import policyVC from '../components/component-policy/policy-VC.vue';
import policyKHTT from '../components/component-policy/policy-KHTT.vue';
import policyPTTT from '../components/component-policy/policy-PTTT.vue';
export default {
    data() {
        return {
            policy: '',
        }
    },
    computed: {
        getpolicy() {
            return this.$route.params.slug;
        }
    },
    components: {
        policyBH, policyBM, policyDT, policyVC, policyKHTT, policyPTTT
    },
    methods: {
        link_policy(link) {
            this.$router.push({ path: `/policy/${link}`});
            const list_policy = Object.values(document.querySelectorAll('.item_policy'));
            list_policy.map((item) => {
                item.classList.remove('active');
                if(item.getAttribute('data') == link){
                    item.classList.add('active');
                } 
            });
        }
    },
    mounted(){
        this.link_policy(this.$route.params.slug);
    }
}
</script>
<template>
    <router-link to="/">
        Trở về
    </router-link>
    <h1 class="text-center">Thông tin chính sách</h1>
    <div class="page_policy d-flex">
        <div class="page_policy_left">
            <ul class="list_item_policy">
                <li class="item_policy active" @click="link_policy('policyBH')" data="policyBH">
                    <router-link to="">
                        Chính sách bảo hành
                    </router-link>
                </li>
                <li class="item_policy" @click="link_policy('policyBM')" data="policyBM">
                    <router-link to="">
                        Chính sách bảo mật
                    </router-link>
                </li>
                <li class="item_policy" @click="link_policy('policyDT')" data="policyDT">
                    <router-link to="">
                        Chính sách đổi trả
                    </router-link>
                </li>
                <li class="item_policy" @click="link_policy('policyKHTT')" data="policyKHTT">
                    <router-link to="">
                        Chính sách khách hàng thân thiết
                    </router-link>
                </li>
                <li class="item_policy" @click="link_policy('policyVC')" data="policyVC">
                    <router-link to="">
                        Chính sách vận chuyển
                    </router-link>
                </li>
                <li class="item_policy" @click="link_policy('policyPTTT')" data="policyPTTT">
                    <router-link to="">
                        Phương thức thanh toán
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="page_policy_right">
            <component :is="getpolicy"></component>
        </div>
    </div>
</template>
<style scoped>
.page_policy_left {
    width: 700px;
}

.list_item_policy .item_policy {
    list-style: none;
    padding: 0;
    width: 400px;
    height: 60px;
    margin-bottom: 8px;
    background-color: #e8e8e8;
    display: flex;
    align-items: center;
    border-radius: 30px;
}

.list_item_policy .item_policy a {
    color: #000;
    font-weight: 500;
    text-decoration: none;
    padding-left: 8px;
}

.list_item_policy .active {
    background-color: var(--color--main--);
}

.list_item_policy .item_policy:hover {
    background-color: var(--color--main--);
}
</style>