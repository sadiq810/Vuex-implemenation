<template>
  <div class="container">
    <table class="table table-border">
      <thead>
      <tr>
        <th>Item</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="t in items">
          <td> {{ t.title }}</td>
          <td>{{ t.price }}</td>
          <td>{{ t.quantity }}</td>
          <td><button class="btn btn-primary" @click="addItemToCart(t.id)">Add To Cart</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "Products",
  computed: mapGetters('products', {items: "listProducts"}),
  methods: mapActions('products', ['addItemToCart'])
}
</script>
