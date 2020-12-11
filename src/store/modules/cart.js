export default {
    namespaced: true,
    state: {
        items: []
    },

    actions: {
        increase({commit, rootGetters}, id) {
            let prd = rootGetters['products/listProducts'].find(p => p.id === id);

            if (prd.quantity > 0) {
                commit('INCREASE_ITEM', id);
                commit('products/DECREASE_ITEM', id, {root: true})
            }
        },

        decrease({commit, state, rootGetters}, id) {
            let cartItem = state.items.find(c => c.id === id);

            if (cartItem.quantity > 0)
                commit('products/INCREASE_ITEM', id, {root: true})

            commit('DECREASE_ITEM', id);
        },

        remove({commit, state, rootGetters}, id) {
            let cartItem = state.items.find(c => c.id === id);
            let prd = rootGetters['products/listProducts'].find(p => p.id === id);
            prd.quantity += cartItem.quantity;

            commit('REMOVE_ITEM', id);
        }
    },

    mutations: {
        INCREASE_ITEM(state, id) {
            let cartItem = state.items.find(c => c.id === id);
            cartItem.quantity += 1;
        },

        DECREASE_ITEM(state, id) {
            let cartItem = state.items.find(c => c.id === id);

            if (cartItem.quantity <= 1)
                state.items = state.items.filter(p => p.id !== id);
            else
                cartItem.quantity -= 1;
        },

        REMOVE_ITEM(state, id) {
            state.items = state.items.filter(p => p.id !== id);
        },

        ADD_ITEM_TO_CART(state, item) {
            state.items = [...state.items, {...item, quantity: 1}];
        }
    },

    getters: {
     getCart(state) {
         return state.items;
     }
    }
}
