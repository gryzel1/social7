<template>
  <div>
    <navbar v-if="!['Login','New Account'].includes($route.name)" />
  </div>
  <router-view />
</template>

<script>
import navbar from "@/components/navbar.vue";
export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>