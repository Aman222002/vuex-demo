<template>
  <nav class="nav">
    <router-link to="/">
      <v-btn style="margin-right: 20px; margin-top: 20px; margin-left: 20px;">
        Home
      </v-btn>
    </router-link>
      
    <router-link
      v-if="!checkLogin"
      to="/login"
    >
      <v-btn style="margin-right: 20px;margin-top: 20px; margin-left: 20px;">
        Login
      </v-btn>
    </router-link>
    <router-link to="/about">
      <v-btn style="margin-right: 20px;margin-top: 20px; margin-left: 20px;">
        About
      </v-btn>
    </router-link>
    <v-btn
      v-if="checkLogin"
      style="margin-right: 20px;margin-top: 20px; margin-left: 20px; float: right;"
      color="red"
      @click="logout()"
    >
      Logout
    </v-btn>
  </nav>
</template>
  <script>
  import {  mapGetters,mapActions } from 'vuex';
  export default {
    data() {
      return {
      
      }
    },
    computed: {
    ...mapGetters({
      
      checkLogin: "checkLogin"
    }),},
    methods: {
      ...mapActions({ Set_Login:'Set_Login' }),
      logout() {
        this.Set_Login(false);
        this.$router.push('/')
       },
     },
  };
  </script>
  <style>
  .nav {
    background-color: rgb(67, 140, 140);
    height: 100px;
    justify-content: space-between;
  }
  </style>
  
  