<template>
  <div>
    <verifyAuth />
    <div class="container feed-container">
    
    <title>Social7 Events</title>

    <calendar />

    <feed />

  </div>
  </div>
</template>

<script>
import Calendar from "@/components/calendar.vue";
import navbar from "@/components/navbar.vue";
import verifyAuth from "@/components/verify-auth.vue";
export default {
  name: 'Events',
  components: {
    Calendar, navbar, verifyAuth
  }
}
</script>