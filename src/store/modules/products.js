export default {
    namespaced: true,
    state: {
        items: [{
            id: 1,
            title: 'Iphone X',
            price: 200,
            quantity: 12
        },{
            id: 2,
            title: 'Iphone Pro',
            price: 400,
            quantity: 10
        },{
            id: 3,
            title: 'Iphone Pro Max',
            price: 600,
            quantity: 32
        }]
    },

    actions: {
        addItemToCart({commit, state, rootGetters}, id) {
            let item = state.items.find(p => p.id === id)

            if (item.quantity <= 0) return;

            let exist = rootGetters['cart/getCart'].find(c => c.id === id)

            if (exist)
                commit('cart/INCREASE_ITEM', id, {root: true});
            else
                commit('cart/ADD_ITEM_TO_CART', {...item, quantity: 1}, {root: true})

            commit('DECREASE_ITEM', id)
        },
    },

    mutations: {
        INCREASE_ITEM(state, id) {
            let prd = state.items.find(p => p.id === id);
            prd.quantity += 1;
        },

        DECREASE_ITEM(state, id) {
            let prd = state.items.find(p => p.id === id);
            prd.quantity -= 1;
        }
    },

    getters: {
        listProducts(state) {
            return state.items
        }
    }
}
