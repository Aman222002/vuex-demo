<template>
  <v-app>
    <default-layout>
      <router-view />
    </default-layout>
  </v-app>
</template>

<script>
import DefaultLayout from "./components/Layout/defaultLayout.vue";

export default {
  name: "App",

  components: {
    DefaultLayout,
  },

  data: () => ({}),
};
</script>
