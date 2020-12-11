<template>
  <div id="app" style="margin-top: 20px;">
    <h2 class="h2 text-center">Products</h2>
    <Products />
    <hr />
    <h2 class="h2 text-center">Cart</h2>
    <Cart />
  </div>
</template>

<script>

import Products from "@/components/Products";
import Cart from "@/components/Cart";
export default {
  name: 'App',
  components: {Cart, Products}
}
</script>
