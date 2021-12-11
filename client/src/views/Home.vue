<template>
  <div>
    <verifyAuth />
    
    <div class="container feed-container">
    
      <title>Social7 Accueil</title>

      <new-post />

      <feed />

    </div>
  </div>
</template>

<script>
import newPost from "@/components/new-post.vue";
import feed from "@/components/feed.vue";
import navbar from "@/components/navbar.vue";
import verifyAuth from "@/components/verify-auth.vue";
export default {
  name: 'Home',
  components: {
    newPost, feed, navbar, verifyAuth
  }
}
</script>