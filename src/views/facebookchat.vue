<script>
import { VueFacebookChat } from 'vue-facebook-chat';
export default {
    components: {
        VueFacebookChat
    }
};
</script>
<template>
    <div class="chat">
        <VueFacebookChat class="chat-facebook" page-id="252538887258412" theme-color="#0084ff" />
    </div>
</template>
<style scoped>
.chat {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 300px;
    height: 500px;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: hidden;
}

.chat .fb_dialog {
    width: 100%;
    height: 100%;
}

.chat .fb_iframe_widget {
    width: 100%;
    height: 100%;
}

.chat .fb_customer_chat_bounce_in_v2 {
    animation-name: fb_customer_chat_bounce_in_v2;
    animation-duration: 0.3s;
    animation-fill-mode: both;
    visibility: visible !important;
}

@keyframes fb_customer_chat_bounce_in_v2 {
    0% {
        transform: translateY(30px);
        opacity: 0;
    }

    50% {
        transform: translateY(-10px);
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>