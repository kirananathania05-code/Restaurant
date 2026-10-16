import axios from "axios";
export default ({
    state(){
        return {
            cart: [],
            product: null,
        };
    },

    getters: {
        totalItems(state){
            return state.cart.length;
        }
    },

    mutations: {
        ADD_TO_CART(state, namaItem) {
            state.cart.push(namaItem);
        },
        REMOVE_FROM_CART(state, index){
            state.cart.splice(index, 1);
        },
        SET_PRODUCT(state, payload){
            state.product = payload;
        }
    },

    actions: {
        tambahBarang({commit}, namaItem){
            commit('ADD_TO_CART', namaItem);
        },
        hapusBarang({commit}, index){
            commit('REMOVE_FROM_CART', index);
        },
        async getProductData ({commit}){
            try {
                const {data} = await axios.get(
                    "https://kirana-project-cdf5b-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
                )
                
                commit('SET_PRODUCT', data || {});
                
            } catch (err) {
                console.log(err)
            }
        }
    }
})