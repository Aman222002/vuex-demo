<template>
  <v-main>
    <div class="app-container">
      <HeaderComponent />
      <div class="main-content">
        <slot />
      </div>
      <div class="FooterComponent">
        <FooterComponent />
      </div>
    </div>
  </v-main>
</template>
    
    <script>
    import HeaderComponent from "../HeaderComponent.vue";
    import FooterComponent from "../FooterComponent.vue";
    
    export default {
      name: "App",
      components: {
        HeaderComponent,
        FooterComponent,
      },
    };
    </script>
    
    <style scoped>
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    
    .main-content {
      margin-top: 20px; 
    }
    
    
    .FooterComponent {
      margin-top: auto;
    }
    </style>
    