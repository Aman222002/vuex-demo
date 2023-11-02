<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row justify="center">
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-form ref="form">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              />
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Password"
                type="password"
                required
              />
              <v-btn
                color="primary"
                @click="submitForm"
              >
                Login
              </v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
  
  <script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
      passwordRules: [(v) => !!v || "Password is required"],
    };
  },
  methods: {
    ...mapActions({ login: "Set_Login" }),
    submitForm() {
      if (this.$refs.form.validate()) {
        this.login(true)
        this.$router.push("/");
      }
    },
  },
};
</script>
  