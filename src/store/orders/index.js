import axios from "axios";
import getCookie from "@/utils/GetCookie";
import orderError from "@/store/orders/errors";

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
        getOrders: async ({commit}) =>
        {
            await axios
                .create({
                    headers: {token: getCookie("token")}
                })
                .get("http://localhost:8888/orders/")
                .then(res =>
                {
                    const orders = res.data.info;
                    commit('setOrderError', false);
                    commit('setOrders', orders);
                })
                .catch(err =>
                {
                    commit('setOrderError', true);
                    try
                    {
                        commit('setOrderMessageError', err.response.data.message);
                    }
                    catch (e)
                    {
                        commit('setOrderMessageError', "can't error handler");
                    }
                });
        },
        removeOrder: async ({commit}, data) =>
        {
            console.log(data);
            await axios
                .create({
                    headers: {token: getCookie("token")}
                })
                .delete("http://localhost:8888/orders/" + data)
                .then(res =>
                {
                    console.log(res);
                    commit('setOrderError', false);
                })
                .catch(err =>
                {
                    commit('setOrderError', true);
                    try
                    {
                        commit('setOrderMessageError', err.response.data.message);
                    }
                    catch (e)
                    {
                        commit('setOrderMessageError', "can't error handler");
                    }
                });
        },
        addOrder: async ({commit}, data) =>
        {
            await axios
                .create({
                    headers: {token: getCookie("token")}
                })
                .post("http://localhost:8888/orders/add", data)
                .then(res =>
                {
                    console.log(res);
                    commit('setOrderError', false);
                })
                .catch(err =>
                {
                    commit('setOrderError', true);
                    try
                    {
                        commit('setOrderMessageError', err.response.data.message);
                    }
                    catch (e)
                    {
                        commit('setOrderMessageError', "can't error handler");
                    }
                });
        }
    },
    modules: {orderError}
};

export default orders;