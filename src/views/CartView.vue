<template>
  <div>
    <!-- <h3>Cart Length: {{ cartlength }}<br /></h3> -->
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Image</th>
            <th class="text-left">Product Name</th>
            <th class="text-left">Quantity
            </th>
            <th class="text-left">Price</th>
            <th class="text-left">Action</th> 
          </tr>
        </thead>
        <tbody>
          
          <tr v-for="item in items" :key="'item_' + item.id">
            <td><img :src="item.img" alt="Profile Image" width="150" /></td>
            <td>{{ item.name }}</td>
            <td><v-btn @click="minus(item)" style="background-color: rgb(202, 83, 83);font-size: 30px;" :disabled="item.quantity == 1 ? true: false">-</v-btn>  {{ item.quantity }} <v-btn @click="plus(item)" style="background-color: rgb(145, 238, 133);font-size: 30px;">+</v-btn></td>
            <td>{{ item.price }}</td>
            <td> <v-btn @click="removeItem(item)" style="background-color: rgb(248, 38, 38);">Remove</v-btn></td> 
          </tr>
        </tbody>
        
        <h6>Sub Amount :{{ total }}</h6>
       
        <v-app>
          <h6> Apply Coupon :
         
          <v-dialog
      v-model="dialog"
      persistent
      max-width="500"
      
    >
    
      <template v-slot:activator="{ on, attrs }">
        
        
        <span>
         <v-text-field label="Coupon Code" v-model="value" :disabled="discount> 0"></v-text-field>
         <v-btn  color="primary" :disabled="discount> 0" @click="addcoupon(value)" style="margin-right: 20px;">Apply</v-btn>
         <v-btn  color="error" @click="removecoupon()" v-if="discount> 0">Remove</v-btn>
         <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          :disabled="discount>0"
        >
         Coupon Available 
        </v-btn>
      </span>
       
      </template>
      <v-card>
        <v-card-title class="text-h5">
          
         Select the Coupon
        </v-card-title>
        <v-card-text>
          <v-list dense>
      
     
      <v-list-item-group
      v-model="value"
        color="primary"
      >
        <v-list-item
          v-for="coupon in couponslist"
          :key ="'coupon_' + coupon.name"
          :value="coupon.code"
        >
         
          <v-list-item-content>
           
            <v-list-item-title> Code :{{ coupon.code  }} Rs: {{ coupon.value }} Discount 
              <v-btn  color="primary" style="float: right;" @click="addcoupon(coupon.code),dialog=false">Apply</v-btn>
             
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
      </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
         
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </h6>
    <h6>Discount:{{ discount }}</h6>
    <h6>Total :{{ price }}</h6>
   
  </v-app>
  
      </template>
     
    </v-simple-table>
  </div>
</template>
  <script>
  import Swal from "sweetalert2";
import {mapGetters, mapActions } from "vuex";

export default {
  data () {
      return {
        dialog: false,
        value:"",
      }
    },
  name: "CartView",
 
  components: {},
  computed: {
    ...mapGetters({
      // cartlength: "getcartlength",
      items: "cartItems",
      total: "getTotal",
      couponslist:"getcoupon",
      price:"getprice",
      discount:"getdiscount"
    }),
  },
  methods:{
       ...mapActions({ remove:"remove",plus:"plus",minus:"minus",addcoupon:"addcoupon",removecoupon:"removecoupon"}),
       removeItem(item){
        Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to remove this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, remove it!'
}).then((result) => {
  if (result.isConfirmed) {
    this.remove(item);
    Swal.fire(
      'Deleted!',
      'Your item has been removed.',
      'success'
    )
  }
})      
},

},
}
</script>
  