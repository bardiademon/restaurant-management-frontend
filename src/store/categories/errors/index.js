const categoryError = {
    state: {categoryMessageError: '', categoryError: false},
    getters: {
        getCategoryMessageError: (state) => state.categoryMessageError,
        isCategoryError: (state) => state.categoryError,
    },
    mutations: {
        setCategoryMessageError: (state, message) =>
        {
            state.categoryMessageError = message
        },
        setCategoryError: (state, error) =>
        {
            state.categoryError = error
        }
    },
    actions: {},
    modules: {}
};
export default categoryError;