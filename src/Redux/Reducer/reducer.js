const initialState = {
    product: [],
    basket: [],
    favorite: [],
}


export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCT" :
            console.log(action.payload)
            return {...state, product: action.payload}
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

        case "ADD_TO_FAVORITES" :
            const foundFavorites = state.favorite.find(el => el.id === action.payload.id)
            if (foundFavorites) {
                return {
                    ...state,
                    favorite: state.favorite.map(el => el.id === foundFavorites.id ? {
                        ...el,
                        quantity: el.quantity + 1
                    } : el)
                }
            } else {
                return {...state, favorite: [...state.favorite, {...action.payload, quantity: 1}]}
            }

        default :
            return state
    }
}

