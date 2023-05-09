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
            contentPolicy:'Chính sách bảo hành'
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
                   this.contentPolicy = item.getAttribute('data-value')
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
    <nav class="nav-link">
        <router-link to="/">
            Trang chủ / {{ contentPolicy }}
        </router-link>
    </nav>
    <h1 class="text-center mb-4">Thông tin chính sách</h1>
    <div class="page_policy d-flex flex-wrap">
        <div class="page_policy_left col-xs-12 col-sm-12 col-md-5">
            <ul class="list_item_policy">
                <li class="item_policy active" @click="link_policy('policyBH')" data="policyBH" data-value="Chính sách bảo hành">
                    <router-link to="">
                        Chính sách bảo hành
                    </router-link>
                </li>
                <li class="item_policy" @click="link_policy('policyBM')" data="policyBM" data-value="Chính sách bảo mật">
                    <router-link to="">
                        Chính sách bảo mật
                    </router-link>
                </li>
                <li class="item_policy" @click="link_policy('policyDT')" data="policyDT" data-value="Chính sách đổi trả">
                    <router-link to="">
                        Chính sách đổi trả
                    </router-link>
                </li>
                <li class="item_policy" @click="link_policy('policyKHTT')" data="policyKHTT" data-value="Chính sách khách hàng thân thiết">
                    <router-link to="">
                        Chính sách khách hàng thân thiết
                    </router-link>
                </li>
                <li class="item_policy" @click="link_policy('policyVC')" data="policyVC" data-value="Chính sách vận chuyển">
                    <router-link to="">
                        Chính sách vận chuyển
                    </router-link>
                </li>
                <li class="item_policy" @click="link_policy('policyPTTT')" data="policyPTTT" data-value="Phương thức thanh toán">
                    <router-link to="">
                        Phương thức thanh toán
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="page_policy_right col-xs-12 col-sm-12 col-md-7">
            <component :is="getpolicy"></component>
        </div>
    </div>
</template>
<style scoped>
.nav-link,.nav-link a{
    color: black;
    text-decoration: none;

}
/* .page_policy_left {
    width: 100%;
} */

.list_item_policy .item_policy {
    list-style: none;
    padding: 0;
    width: 300px;
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