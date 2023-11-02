import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import VuexPersist from "vuex-persist";
import Swal from "sweetalert2";

Vue.use(Vuex);
const vuexLocalStorage = new VuexPersist({
  key: "vuex",
  storage: window.localStorage,
});

const products = [
  {
    id: 1,
    name: "Alto",
    price: 400,
    img: "/static/A.jpg",
    stock: 2,
  },
  {
    id: 2,
    name: "BMW",
    price: 300,
    img: "/static/B.jpg",
    stock: 3,
  },
  {
    id: 3,
    name: "Verna",
    price: 200,
    img: "/static/C.jpg",
    stock: 4,
  },
];
const coupons = [
  {
    name: "abc",
    code: "ABC123",
    type: "fixed",
    value: 100,
  },
  {
    name: "fgh",
    code: "FGH456",
    type: "percentage",
    value: 50,
  },
];

const store = new Vuex.Store({
  plugins: [vuexLocalStorage.plugin],
  state: {
    items: [],
    products,
    coupons,
    isloggedIn: false,
  },
  getters: {
   
    getcoupon: (state) => state.coupons,
    getdiscount:(state)=>state.discount,
    getprice: (state) => state.subtotal,
    cartItems: (state) => state.items,
    getcartlength: (state) => state.items.length,
    checkLogin: (state) => state.isloggedIn,
    getName: (state) => state.items,
    getTotal: (state) => {
      var amount = 0;
      const items = [...state.items];
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        amount += item.quantity * item.price;
      }
      state.subtotal = amount;
      return amount;
    },
  },
  mutations: {
    ADD_ITEM: (state, payload) => {
      let product = products.filter((item) => item.id == payload.id);
      if (product.length) {
        product = product[0];
      }
      // console.log("Product", product);
      let itemIndex = -1;
      // Check if item is already added
      for (var i = 0; i < state.items.length; i++) {
        if (state.items[i].id == payload.id) {
          itemIndex = i;
          break;
        }
      }
      // if item not exist into cart, we need to add new row
      if (itemIndex == -1) {
        state.items.push(payload);
      } else {
        // updated quantity for the product
        const item = JSON.parse(JSON.stringify(state.items[itemIndex]));
        const newQty = item.quantity + 1;
        if (newQty > product.stock) {
          return Swal.fire({
            icon: "error",
            title: "Limited quantity",
            text: "We have only " + product.stock + " quantity available",
          });
        } else {
          item.quantity += payload.quantity;
          state.items.splice(itemIndex, 1);
          state.items.splice(itemIndex, 0, item);
        }
      }
    },
    REMOVE_ITEM: (state, payload) => {
      let itemIndex = state.items.indexOf(payload);
      state.items.splice(itemIndex, 1);
    },
    PLUS: (state, payload) => {
      let product = products.filter((item) => item.id == payload.id);
      if (product.length) {
        product = product[0];
      }
      let itemIndex;
      itemIndex = state.items.indexOf(payload);
      const item = JSON.parse(JSON.stringify(state.items[itemIndex]));
      const newQty = item.quantity + 1;
      if (newQty > product.stock) {
        return Swal.fire({
          icon: "error",
          title: "Limited quantity",
          text: "We have only " + product.stock + " quantity available",
        });
      } else {
        item.quantity += payload.quantity;
        state.items.splice(itemIndex, 1);
        state.items.splice(itemIndex, 0, item);
      }
    },
    REMOVE:(state) =>{
      state.subtotal += state.discount;
      state.discount=0;
      Swal.fire(
        "REMOVED!",
        "Removed Succesfully ",
        "success"
      )
      
    },
      

    MINUS: (state, payload) => {
      let itemIndex;
      itemIndex = state.items.indexOf(payload);
      const item = JSON.parse(JSON.stringify(state.items[itemIndex]));
      if (item.quantity == 1) return;
      item.quantity -= 1;
      state.items.splice(itemIndex, 1);
      state.items.splice(itemIndex, 0, item);
    },
    Set_Login: (state) => {
      state.isloggedIn = true;
    },
    Set_Logout: (state) => {
      state.isloggedIn = false;
    },
    COUPON: (state, payload) => {
      let coupon = coupons.filter((coupon) => coupon.code == payload);
      // console.log(coupon.length);
      if (coupon.length) {
        coupon = coupon[0];
      }
        if(coupon.code==payload){

        
      if (coupon.type == "fixed") {
        state.discount=coupon.value;
        state.subtotal = state.subtotal - state.discount;
        Swal.fire(
          "Applied!",
          "Coupon code  " + coupon.code +  " Applied  Rs " + coupon.value + " Discount  Available ",
          "success"
        )
       
      } else {
        state.discount=(coupon.value / 100) * state.subtotal;
      
        state.subtotal = state.subtotal - state.discount;
        Swal.fire(
          "Applied!",
          "Coupon  code " + coupon.code +  " Applied   " + coupon.value + "  % Discount  Available ",
          "success"
        )
      }}else{
        Swal.fire({
          icon: "error",
          title: "Invalid Coupon",
          text: "Please Add The Valid Coupon",
        });
        
      }
    },
  },
  actions: {
    addToCart: function ({ commit }, payload) {
      commit("ADD_ITEM", payload);
    },
    remove: function ({ commit }, payload) {
      commit("REMOVE_ITEM", payload);
    },
    plus: function ({ commit }, payload) {
      commit("PLUS", payload);
    },
    minus: function ({ commit }, payload) {
      commit("MINUS", payload);
    },
    login: function ({ commit }, payload) {
      commit("Set_Login", payload);
    },
    logout: function ({ commit }, payload) {
      commit("Set_Logout", payload);
    },
    addcoupon: function ({ commit }, payload) {
      commit("COUPON", payload);
    },
    removecoupon: function({commit}){
      commit("REMOVE");
    }
  },
  modules: {
    user,
  },
});
export default store;
