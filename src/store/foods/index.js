import axios from "axios";
import getCookie from "@/utils/GetCookie";
import foodsError from "@/store/foods/errors";

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
                    commit('setFoodsError', false);
                    commit('setFoods', foods);
                })
                .catch(err =>
                {
                    console.log(err);
                    commit('setFoodsError', true);
                    try
                    {
                        commit('setFoodsMessageError', err.response.data.message);
                    }
                    catch (e)
                    {
                        commit('setFoodsMessageError', "can't error handler");
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
                    commit('setFoodsError', false);
                })
                .catch(err =>
                {
                    commit('setFoodsError', true);
                    try
                    {
                        commit('setFoodsMessageError', err.response.data.message);
                    }
                    catch (e)
                    {
                        commit('setFoodsMessageError', "can't error handler");
                    }
                });
        },
        addFood: ({commit}, data) =>
        {
            console.log(data);
            axios
                .create({
                    headers: {token: getCookie("token"), "Content-Type": "multipart/form-data;boundary=SOME_BOUNDARY"}
                })
                .post("http://localhost:8888/foods/add", data)
                .then(res =>
                {
                    console.log(res);
                    commit('setFoodsError', false);
                })
                .catch(err =>
                {
                    commit('setFoodsError', true);
                    try
                    {
                        commit('setFoodsMessageError', err.response.data.message);
                    }
                    catch (e)
                    {
                        commit('setFoodsMessageError', "can't error handler");
                    }
                });
        }
    },
    modules: {foodsError}
};

export default foods;