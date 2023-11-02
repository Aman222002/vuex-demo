<template>
  <div>
    <!-- <h4> Value : {{ fetch_value }}
  </h4>  -->
  <!-- <h2> Cart Length : {{ cartlength }}</h2> -->
     <ProductView/> 
   <!-- <v-btn @click="increment">Increment</v-btn> -->
   
  </div>
  
</template>
<script>
import ProductView from './ProductView.vue'
import {mapActions,mapGetters} from "vuex"
  export default {
    name: 'HomeView',
    components: {
      ProductView,
      
    },
    computed: {
      ...mapGetters({ fetch_value : "user/fetch_value"}),
    },
    methods:{
       ...mapActions({ increment: "user/increment", addToCart:"addToCart"}),
     
    }
   
  }
</script>

