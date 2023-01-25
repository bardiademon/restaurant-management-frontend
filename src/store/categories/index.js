import axios from "axios";
import getCookie from "@/utils/GetCookie";
import categoryError from "@/store/categories/errors";

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
        getCategories: async ({commit}) =>
        {
            await axios
                .create({
                    headers: {token: getCookie("token")}
                })
                .get("http://localhost:8888/categories/list")
                .then(res =>
                {
                    const categories = res.data.info;
                    commit('setCategoryError', false);
                    commit('setCategories', categories);
                })
                .catch(err =>
                {
                    console.log(err);
                    commit('setCategoryError', true);
                    try
                    {
                        commit('setCategoryMessageError', err.response.data.message);
                    }
                    catch (e)
                    {
                        commit('setCategoryMessageError', "can't error handler");
                    }
                });
        },
        removeCategory: async ({commit}, data) =>
        {
            console.log(data);
            await axios
                .create({
                    headers: {token: getCookie("token")}
                })
                .delete("http://localhost:8888/categories/" + data)
                .then(res =>
                {
                    console.log(res);
                    commit('setCategoryError', false);
                })
                .catch(err =>
                {
                    commit('setCategoryError', true);
                    try
                    {
                        commit('setCategoryMessageError', err.response.data.message);
                    }
                    catch (e)
                    {
                        commit('setCategoryMessageError', "can't error handler");
                    }
                });
        },
        addCategory: async ({commit}, data) =>
        {
            console.log(data);
            await axios
                .create({
                    headers: {token: getCookie("token"), "Content-Type": "application/x-www-form-urlencoded"}
                })
                .post("http://localhost:8888/categories/add", data)
                .then(res =>
                {
                    console.log(res);
                    commit('setCategoryError', false);
                })
                .catch(err =>
                {
                    commit('setCategoryError', true);
                    try
                    {
                        commit('setCategoryMessageError', err.response.data.message);
                    }
                    catch (e)
                    {
                        commit('setCategoryMessageError', "can't error handler");
                    }
                });
        }
    },
    modules: {categoryError}
};

export default categories;