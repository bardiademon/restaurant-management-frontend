import axios from "axios";
import publicError from "@/store/errors";
import getCookie from "@/utils/GetCookie";

const orders = {
    state: {orders: []},
    getters: {getOrders: (state) => state.orders},
    mutations: {
        setOrders: (state, orders) =>
        {
            state.orders = orders;
        }
    },
    actions: {
        getOrders: ({commit}) =>
        {
            axios
                .create({
                    headers: {token: getCookie("token")}
                })
                .get("http://localhost:8888/orders/")
                .then(res =>
                {
                    const orders = res.data.info;
                    commit('setError', false);
                    commit('setOrders', orders);
                })
                .catch(err =>
                {
                    commit('setError', true);
                    try
                    {
                        commit('setMessageError', err.response.data.message);
                    }
                    catch (e)
                    {
                        commit('setMessageError', "can't error handler");
                    }
                });
        },
        removeOrder: ({commit}, data) =>
        {
            console.log(data);
            axios
                .create({
                    headers: {token: getCookie("token")}
                })
                .delete("http://localhost:8888/orders/" + data)
                .then(res =>
                {
                    console.log(res);
                    commit('setError', false);
                })
                .catch(err =>
                {
                    commit('setError', true);
                    try
                    {
                        commit('setMessageError', err.response.data.message);
                    }
                    catch (e)
                    {
                        commit('setMessageError', "can't error handler");
                    }
                });
        }
    },
    modules: {publicError}
};

export default orders;