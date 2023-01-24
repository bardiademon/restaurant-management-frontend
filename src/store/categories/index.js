import axios from "axios";
import publicError from "@/store/errors";
import getCookie from "@/utils/GetCookie";

const categories = {
    state: {categories: []},
    getters: {getCategories: (state) => state.categories},
    mutations: {
        setCategories: (state, categories) =>
        {
            state.categories = categories;
        }
    },
    actions: {
        getCategories: ({commit}) =>
        {
            axios
                .create({
                    headers: {token: getCookie("token")}
                })
                .get("http://localhost:8888/categories/list")
                .then(res =>
                {
                    const categories = res.data.info;
                    commit('setError', false);
                    commit('setCategories', categories);
                })
                .catch(err =>
                {
                    console.log(err);
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
        removeCategory: ({commit}, data) =>
        {
            console.log(data);
            axios
                .create({
                    headers: {token: getCookie("token")}
                })
                .delete("http://localhost:8888/categories/" + data)
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
        },
        addCategory: ({commit}, data) =>
        {
            console.log(data);
            axios
                .create({
                    headers: {token: getCookie("token"), "Content-Type": "application/x-www-form-urlencoded"}
                })
                .post("http://localhost:8888/categories/add", data)
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

export default categories;