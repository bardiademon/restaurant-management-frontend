const userError = {
    state: {loginMessageError: '', error: false},
    getters: {
        getLoginMessageError: (state) => state.loginMessageError,
        loginIsError: (state) => state.error,
    },
    mutations: {
        setLoginMessageError: (state, message) =>
        {
            state.loginMessageError = message
        },
        loginSetError: (state, error) =>
        {
            state.error = error
        }
    },
    actions: {},
    modules: {}
};

export default userError;