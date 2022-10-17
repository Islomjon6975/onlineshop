const reducer = (state, action) => {
    switch(action.type) {
        case 'openCart': 
            return {...state, basket: !state.basket}

        case 'closeCart':
            return {...state, basket: false}
        default: return {...state}
    }
}

export default reducer