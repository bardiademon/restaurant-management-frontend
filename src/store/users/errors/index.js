const userError = {
    state: {userMessageError: undefined, userError: false},
    getters: {
        getUserMessageError: (state) => state.userMessageError,
        isUserError: (state) => state.userError,
    },
    mutations: {
        setUserMessageError: (state, message) =>
        {
            state.userMessageError = message
        },
        setUserError: (state, error) =>
        {
            state.userError = error
        }
    },
    actions: {},
    modules: {}
};

export default userError;