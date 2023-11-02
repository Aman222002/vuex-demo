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
                 
                  label="E-mail"
                  required
                />
                <p style="color: red;font-size: 15px;">{{ msg }}</p>
                <v-text-field
                  v-model="password"
                 
                  label="Password"
                  type="password"
                  required
                />
                <p style="color: red;font-size: 15px;">{{ msg2 }}</p>
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
  import Swal from "sweetalert2";
import { mapActions } from 'vuex';
  export default {
    data() {
      return {
        email: "",
        password: "",
        msg:"",
        msg2:""
        // emailRules: [
        //   (v) => !!v || "E-mail is required",
        //   (v) => /.+@.+/.test(v) || "E-mail must be valid",
        // ],
      //   passwordRules: [(v) => !!v || "Password is required"],
      };
    },
    watch:{
      // email:{
      // immediate:true,
      // handler (newValue,oldValue) 
      // {
      //  console.log('old value is this',oldValue,'new value is this',newValue);
      // }
      // },
      email:{
        immediate:true,
       handler (value,oldValue){
      // this.email = value;
      console.log('old value is this',oldValue,'new value is this',value);
      this.emailvalidate(value);
    },
    },
    password:{
      immediate:true,
      handler(value) {
        this.passwordvalidate(value);
      }
    }
  },

    methods: {
        ...mapActions({Login:"login"}),
      submitForm() {
        if (this.$refs.form.validate()) {
            this.Login();
            Swal.fire({
        position: "center",
        icon: "success",
        title: "Login Successfully",
      });
        this.$router.push('/')
        //   localStorage.setItem("isLogin", 1);
        //    this.$router.go();
        }
      },
      emailvalidate(email){
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    this.msg = '';
    
  } else{
    this.msg= 'Invalid Email Address';
   
  } 
    },
    passwordvalidate(password){
      if (password.length==0) {
        this.msg2 = 'Password is required' ;
    }
    else {
         this.msg2 = '';
      }
    }}}
  </script>
  