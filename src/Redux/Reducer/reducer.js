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

        default :
            return state
    }
}

