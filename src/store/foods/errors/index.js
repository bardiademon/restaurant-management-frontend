const foodsError = {
    state: {foodsMessageError: '', idFoodsError: false},
    getters: {
        getFoodsMessageError: (state) => state.foodsMessageError,
        isFoodsError: (state) => state.idFoodsError,
    },
    mutations: {
        setFoodsMessageError: (state, message) =>
        {
            state.foodsMessageError = message
        },
        setFoodsError: (state, error) =>
        {
            state.idFoodsError = error
        }
    },
    actions: {},
    modules: {}
};

export default foodsError;