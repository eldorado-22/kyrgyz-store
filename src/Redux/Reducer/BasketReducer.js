const initialState = {
    basket: [],
}

export const BasketReducer = (state = initialState, action) => {
    switch (action.type) {

        case "ADD_TO_BASKET" :
            const foundProduct = state.basket.find(el => el.id === action.payload.id)
            if (foundProduct) {
                return {
                    ...state,
                    basket: state.basket.map(el => el.id === foundProduct.id ? {...el, quantity: el.quantity + 1} : el)
                }
            } else {
                return {...state, basket: [...state.basket, {...action.payload, quantity: 1}]}
            }

        case "BASKET_MINUS" :
            const foundMinus = state.basket.find(el => el.id === action.payload.id)
            if (foundMinus) {
                return {
                    ...state,
                    basket: state.basket.map(el => el.id === foundMinus.id ? {...el, quantity: el.quantity - 1} : el)
                }
            } else {
                return {...state, basket: [...state.basket, {...action.payload, quantity: 1}]}
            }


        default :
            return state
    }
}