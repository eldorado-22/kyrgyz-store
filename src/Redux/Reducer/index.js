import axios from "axios";


const initialState = {
    product: [],
}


export const getProduct = () => {
    return async (dispatch) => {
        try {
            let responsive = await axios('https://fakestoreapi.com/products')
            let {data} = await responsive
            dispatch({type: 'GET_PRODUCT', payload: data})
        }catch (e){
            console.log(e)
        }
    }
}
export const Index = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCT" :
            console.log(action.payload)
            return {...state, product: action.payload}



        default :
            return state
    }
}

