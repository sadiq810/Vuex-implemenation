import Vue from 'vue'
import Vuex from 'vuex'
import getters from "@/store/getters";
import actions from "@/store/actions";
import mutations from "@/store/mutations";
import products from "@/store/modules/products";
import cart from "@/store/modules/cart";

Vue.use(Vuex)


const store = new Vuex.Store({
    modules: {products, cart},

    state: {},

    //.... Getters
    getters,

    //..... Actions
    actions,

    //..... Mutations
    mutations
});


export default store;
