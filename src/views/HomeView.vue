<template>
  <div class="home">
   <login/>
  </div>
</template>

<script>

import login from '../auth/login.vue'

export default {
  name: 'HomeView',
  components: {
    login,
  },
}
</script>
