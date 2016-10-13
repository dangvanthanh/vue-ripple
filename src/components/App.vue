<template>
  <div class="app">
    <ripple class="alert">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </ripple>
  </div>
</template>

<script>
import Ripple from './Ripple.vue'

export default {
  data () {
    return {
      msg: 'Vue.js - The Progressive JavaScript Framework'
    }
  },
  components: {
    Ripple
  }
}
</script>

<style>
.alert {
  max-width: 200px;
  padding: 20px;
  background: #ff9800;
  color: #fff;
  position: relative;
}
</style>
