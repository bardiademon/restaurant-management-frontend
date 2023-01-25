import authError from "@/store/auth/errors";
import axios from "axios";

const user = {
    state: {token: undefined},
    getters: {getToken: (state) => state.token},
    mutations: {
        setToken: (state, token) =>
        {
            state.token = token;
        }
    },
    actions: {
        generateUserLogin: async ({commit}, data) =>
        {
            await axios
                .post("http://localhost:8888/users/login", data.value)
                .then(res =>
                {
                    const token = res.data.info;
                    commit('loginSetError', false);
                    commit('setToken', token);
                })
                .catch(err =>
                {
                    commit('loginSetError', true);
                    try
                    {
                        commit('setLoginMessageError', err.response.data.message);
                    }
                    catch (e)
                    {
                        commit('setLoginMessageError', "can't error handler");
                    }
                });
        }
    },
    modules: {authError}
};

export default user;