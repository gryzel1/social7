<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import navbar from './components/navbar.vue'

export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>