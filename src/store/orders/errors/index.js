const orderError = {
    state: {orderMessageError: '', orderError: false},
    getters: {
        getOrderMessageError: (state) => state.orderMessageError,
        isOrderError: (state) => state.orderError,
    },
    mutations: {
        setOrderMessageError: (state, message) =>
        {
            state.orderMessageError = message
        },
        setOrderError: (state, error) =>
        {
            state.orderError = error
        }
    },
    actions: {},
    modules: {}
};

export default orderError;