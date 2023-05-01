<template>
      <div class="banner">
        <img class="lazy entered loading" style="width: 100%;" :src="img" alt="lì xì đầu xuân 2023" data-ll-status="loading">
    </div>
</template>
<script>
export default{
    data(){
        return {

        }
    },
    props:['img']
}
</script>
<style scoped>
    .banner img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
</style>