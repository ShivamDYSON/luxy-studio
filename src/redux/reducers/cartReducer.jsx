// src/redux/reducers/cartReducer.js
const initialState = {
    cartCount: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_CART':
            return {
                ...state,
                cartCount: state.cartCount + 1,
            };
        case 'RESET_CART':
            return {
                ...state,
                cartCount: 0,
            };
        default:
            return state;
    }
};

export default cartReducer;
