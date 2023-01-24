import {createStore} from "vuex";
import user from "@/store/auth";
import orders from "@/store/orders";
import foods from "@/store/foods";
import users from "@/store/users";
import categories from "@/store/categories";

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {user, orders, foods, users, categories}
});