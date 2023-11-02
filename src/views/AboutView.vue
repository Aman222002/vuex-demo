<template>
  <div class="about">
   <h3> Value : {{ fetch_value }}
  </h3>    
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'AboutView',
    components: {
      
    },
    computed: {
      ...mapGetters({ fetch_value : "user/fetch_value"}),
    },
  }
</script>
