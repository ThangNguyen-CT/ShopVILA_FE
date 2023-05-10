<script>
import headerVue from './components/component-header.vue';
import footerVue from './components/component-footer.vue';
export default {
    date() {
        return {

        }
    },
    components: {
        headerVue, footerVue
    },

}
</script>
<template>
    <headerVue></headerVue>
    <div class="main">
        <router-view></router-view>
    </div>
    <footerVue></footerVue>
</template>
