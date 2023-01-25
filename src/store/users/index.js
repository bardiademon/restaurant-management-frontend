import axios from "axios";
import getCookie from "@/utils/GetCookie";
import userError from "@/store/users/errors";

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
        getUsers: async ({commit}) =>
        {
            await axios
                .create({
                    headers: {token: getCookie("token")}
                })
                .get("http://localhost:8888/users/get-all")
                .then(res =>
                {
                    const users = res.data.info;
                    commit('setUserError', false);
                    commit('setUsers', users);
                })
                .catch(err =>
                {
                    console.log(err);
                    commit('setUserError', true);
                    try
                    {
                        commit('setUserMessageError', err.response.data.message);
                    }
                    catch (e)
                    {
                        commit('setUserMessageError', "can't error handler");
                    }
                });
        },
        addUser: async ({commit}, data) =>
        {
            console.log(data);
            await axios
                .create({
                    headers: {token: getCookie("token"), "Content-Type": "multipart/form-data;boundary=SOME_BOUNDARY"}
                })
                .post("http://localhost:8888/users/register", data)
                .then(res =>
                {
                    console.log(res);
                    commit('setUserError', false);
                })
                .catch(err =>
                {
                    commit('setUserError', true);
                    try
                    {
                        let message = err.response.data.message;
                        if (message === undefined)
                        {
                            commit('setUserMessageError', "can't error handler");
                        }
                        else commit('setUserMessageError', message);
                    }
                    catch (e)
                    {
                        commit('setUserMessageError', "can't error handler");
                    }
                });
        }
    },
    modules: {userError}
};

export default users;