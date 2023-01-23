const publicError = {
    state: {loginMessageError: '', error: false},
    getters: {
        getMessageError: (state) => state.messageError,
        isError: (state) => state.error,
    },
    mutations: {
        setMessageError: (state, message) =>
        {
            state.messageError = message
        },
        setError: (state, error) =>
        {
            state.error = error
        }
    },
    actions: {},
    modules: {}
};

export default publicError;