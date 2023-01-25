const authError = {
    state: {loginMessageError: undefined, loginError: false},
    getters: {
        getLoginMessageError: (state) => state.loginMessageError,
        loginIsError: (state) => state.loginError,
    },
    mutations: {
        setLoginMessageError: (state, message) =>
        {
            state.loginMessageError = message
        },
        loginSetError: (state, error) =>
        {
            state.loginError = error
        }
    },
    actions: {},
    modules: {}
};

export default authError;