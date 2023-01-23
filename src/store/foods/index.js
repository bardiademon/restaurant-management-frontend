import axios from "axios";
import publicError from "@/store/errors";
import getCookie from "@/utils/GetCookie";

const foods = {
    state: {foods: []},
    getters: {getFoods: (state) => state.foods},
    mutations: {
        setFoods: (state, foods) =>
        {
            state.foods = foods;
        }
    },
    actions: {
        getFoods: ({commit}) =>
        {
            axios
                .create({
                    headers: {token: getCookie("token")}
                })
                .get("http://localhost:8888/foods/list")
                .then(res =>
                {
                    const foods = res.data.info;
                    commit('setError', false);
                    commit('setFoods', foods);
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
        removeFoods: ({commit}, data) =>
        {
            console.log(data);
            axios
                .create({
                    headers: {token: getCookie("token")}
                })
                .delete("http://localhost:8888/foods/delete/" + data)
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
        addFoods: ({commit}, data) =>
        {
            axios
                .create({
                    headers: {token: getCookie("token")}
                })
                .post("http://localhost:8888/foods/add", data)
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

export default foods;