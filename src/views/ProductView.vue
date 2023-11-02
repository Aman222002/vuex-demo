<!-- <template>
   <v-app>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">ID</th>

          <th class="text-left">Image</th>

          <th class="text-left">Product Name</th>

          <th class="text-left">Price</th>

          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.name">
          <td>{{ item.id }}</td>
          <td><img :src="item.img" alt="Image" width="150" /></td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>
           
              <v-dialog  max-width="600px" max-height="750px" persistent>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" v-bind="attrs" v-on="on">View</v-btn>
                </template>
                <template v-slot:default="dialog">
                  <v-card>
                   <h1 style="float: left;"> {{ item.name }} </h1>
                      <v-btn text @click="dialog.value = false" style="float: right;">Close</v-btn>
                  
                    <v-card-text>
                      <h2>PRICE: {{ item.price }}</h2><br>
                      <img :src="item.img" alt="Image" width="300" height="200" /><v-rating v-model="rating" hover color="yellow" ></v-rating><br><hr>
                    <pre>
                  <h2>Key Features: </h2>
                     1) Power Steering           <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" fill="green"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                     2) Power WindowsFront       <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" fill="green"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                     3) Air Conditioner          <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" fill="green"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                     4) Driver Airbag            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" fill="green"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                     5) Passenger Airbag         <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" fill="green"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                     6) Wheel Covers             <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" fill="green"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                     </pre><hr>
                   
                    <v-btn style="background-color: rgb(129, 243, 129);float: left;" @click="insertItem(item)" block>Add To Cart</v-btn>
                    </v-card-text>
                   
                  </v-card>
                </template>
              </v-dialog>

            <v-btn style="background-color: rgb(129, 243, 129)" @click="insertItem(item)">Add</v-btn>
          </td>


        </tr>
      </tbody>
    </template>
  </v-simple-table> 

</v-app>

</template>
  
<script>
import Swal from "sweetalert2";
import { mapActions } from "vuex";
export default {
  data() {
    
    return {
      rating: 3,

      items: [
        {
          id: 1,
          name: "Alto",
          price: 400000,
          img: "/static/A.jpg",
        },
        {
          id: 2,
          name: "BMW",
          price: 3000000,
          img: "/static/B.jpg",
        },
        {
          id: 3,
          name: "Verna",
          price: 2000000,
          img: "/static/C.jpg",
        },
      ],
    };
  },
  methods: {
    ...mapActions({ addTocart: "addToCart" }),
    insertItem(item) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Added Successfully",
      });
      item.quantity = 1;
      this.addTocart(item);
    },
  },
};
</script> -->
<template>
  <v-app>
    <v-row>
      <v-col  v-for="item in items" :key="item.name" >
        <v-card style="margin-left: 50px; height: auto;" >
          <v-img :src="item.img" height="200" ></v-img>
          <v-card-title>{{ item.name }}</v-card-title>
          <v-card-text>
            <div>Price: {{ item.price }}</div>
            <v-rating v-model="rating" hover color="yellow"></v-rating>
           
          </v-card-text>
          <v-card-actions>
            <v-dialog  max-width="600px" max-height="750px" persistent>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" v-bind="attrs" v-on="on" >View</v-btn>
                </template>
                <template v-slot:default="dialog">
                  <v-card>
                   <h1 style="float: left;"> {{ item.name }} </h1>
                      <v-btn text @click="dialog.value = false" style="float: right;">Close</v-btn>
                  
                    <v-card-text>
                      <h2>PRICE: {{ item.price }}</h2><br>
                      <img :src="item.img" alt="Image" width="300" height="200" /><v-rating v-model="rating" hover color="yellow" ></v-rating><br><hr>
                    <pre>
                  <h2>Key Features: </h2>
                     1) Power Steering           <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" fill="green"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                     2) Power WindowsFront       <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" fill="green"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                     3) Air Conditioner          <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" fill="green"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                     4) Driver Airbag            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" fill="green"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                     5) Passenger Airbag         <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" fill="green"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                     6) Wheel Covers             <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" fill="green"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                     </pre><hr>
                   
                    <v-btn style="background-color: rgb(129, 243, 129);float: right;" @click="insertItem(item)" block>Add To Cart</v-btn>
                    </v-card-text>
                   
                  </v-card>
                </template>
              </v-dialog>
           
            <v-btn color="success" @click="insertItem(item)">Add to Cart</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import Swal from "sweetalert2";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      rating: 3,
      items: [
        {
          id: 1,
          name: "Alto",
          price: 400,
          img: "/static/A.jpg",
        },
        {
          id: 2,
          name: "BMW",
          price: 300,
          img: "/static/B.jpg",
        },
        {
          id: 3,
          name: "Verna",
          price: 200,
          img: "/static/C.jpg",
        },

      ],
    };
  },

  methods: {
    ...mapActions({ addTocart: "addToCart" }),
    insertItem(item) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Added Successfully",
      });
      item.quantity = 1;
      this.addTocart(item);
    },
  },
};
</script>
