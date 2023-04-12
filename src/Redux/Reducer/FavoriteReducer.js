const initialState = {
    favorite: [],
}

export const FavoriteReducer = (state = initialState, action) => {
    switch (action.type) {

        case "ADD_TO_FAVORITES" :
            const foundFavorites = state.favorite.find(el => el.id === action.payload.id)
            if (foundFavorites) {
                return {...state, favorite: state.favorite.filter(el => el.id === foundFavorites.id ? {...el,} : el)}
            } else {
                return {...state, favorite: [...state.favorite, {...action.payload, quantity: 1}]}
            }

        default :
            return state
    }
}
