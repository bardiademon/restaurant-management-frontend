import {createStore} from "vuex";
import user from "@/store/auth";
import orders from "@/store/orders";
import foods from "@/store/foods";

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {user, orders, foods}
});