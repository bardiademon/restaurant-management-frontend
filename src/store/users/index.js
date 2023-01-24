import axios from "axios";
import publicError from "@/store/errors";
import getCookie from "@/utils/GetCookie";

const users = {
    state: {users: []},
    getters: {getUsers: (state) => state.users},
    mutations: {
        setUsers: (state, users) =>
        {
            state.users = users;
        }
    },
    actions: {
        getUsers: ({commit}) =>
        {
            axios
                .create({
                    headers: {token: getCookie("token")}
                })
                .get("http://localhost:8888/users/get-all")
                .then(res =>
                {
                    const users = res.data.info;
                    commit('setError', false);
                    commit('setUsers', users);
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
        addUser: ({commit}, data) =>
        {
            console.log(data);
            axios
                .create({
                    headers: {token: getCookie("token"), "Content-Type": "multipart/form-data;boundary=SOME_BOUNDARY"}
                })
                .post("http://localhost:8888/users/register", data)
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

export default users;