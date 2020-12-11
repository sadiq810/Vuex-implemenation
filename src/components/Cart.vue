<template>
  <div class="container">
    <table class="table table-border">
      <thead>
      <tr>
        <th>Item</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="t in items">
        <td> {{ t.title }}</td>
        <td>${{ t.price }}</td>
        <td>{{ t.quantity }}</td>
        <td>${{ (t.quantity * t.price).toFixed(2) }}</td>
        <td><button class="btn btn-warning" @click="decrease(t.id)"><i class="fa fa-minus"></i></button></td>
        <td><button class="btn btn-danger" @click="remove(t.id)"><i class="fa fa-star"></i></button></td>
        <td><button class="btn btn-success" @click="increase(t.id)"><i class="fa fa-plus"></i></button></td>
      </tr>
      </tbody>
    </table>
    <hr>
    <div class="col-lg-12">
      <div class="col-lg-6" style="float: left; font-weight: bold; text-align: right;">Cart Total</div>
      <div class="col-lg-6" style="float: left; font-weight: bold;">${{ cartTotal }}</div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: "Cart",
  computed: mapState('cart', {
      items: (state) => state.items,
      cartTotal() {
        return this.items.reduce((total, i) => total + (i.quantity * i.price), 0)
      }
    }),

  methods: mapActions('cart', {increase: 'increase', decrease: 'decrease', remove: 'remove'})
}
</script>
