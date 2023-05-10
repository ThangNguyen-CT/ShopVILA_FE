<script>
import headerVue from './components/component-header.vue';
import footerVue from './components/component-footer.vue';
export default {
    date() {
        return {

        }
    },
    components: {
        headerVue,footerVue
    },
    mounted(){
        window.scrollTo(0,0);
    }
}
</script>
<template>
    <headerVue></headerVue>
    <div class="main">
        <router-view></router-view>
    </div>
    <footerVue></footerVue>
</template>
