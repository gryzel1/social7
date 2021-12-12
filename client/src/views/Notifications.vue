<template>
    <div>
        <verify-auth />
        <title>Social7 Notifications</title>
        <div class="container feed-container">
        <h1 class="title section-title">Notifications</h1>

        <div class="notification notif-desc">
            <h1 class="title notif-title">
            <span class="repost-notif"><i class="fas fa-user-check"></i></span> Mathis Grisel vous a suivi.
            </h1>
            
        </div>

        </div>
    </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import verifyAuth from '../components/verify-auth.vue';
export default {
  name: 'Notifications',
  components: {
    navbar, verifyAuth
  }
}
</script>