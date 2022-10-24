import { data } from "../../utils/data";

export const reducer = (state, action) => {
    switch(action.type) {
            case 'heart': 
                let favouritesOne = null;
                let heart = state.data.map(value => {
                    if(value.id === action.payload.id) {
                        favouritesOne = {...value, like: true}
                        return {...value, like: true}
                    } else {
                        return value
                    }
                } );
                return {...state, data: heart, favourites: [...state.favourites, favouritesOne]}

            case 'redHeart': 
                let removeFavouriteOne = null
                let redheart = state.data.map(value => {
                    if(value.id === action.payload.id) {
                        removeFavouriteOne = state.favourites.filter((value) => value.id !== action.payload.id )
                        return {...value, like: false}
                    } else {
                        return value
                    }
                } );
                return {...state, data: redheart, favourites: [...removeFavouriteOne]}

            case 'select':
                if(action.payload.value === 'Most Expensive') {
                    const sortBypriceCart = state.data.sort((itemA, itemB) => itemB?.price - itemA?.price) // sort descending by price
                    const expensiveOrder = sortBypriceCart;
                    return {...state, data: expensiveOrder}
                } else if (action.payload.value === 'Cheapest') {
                    const sortBypriceCart = state.data.sort((itemA, itemB) => itemA?.price - itemB?.price) // sort descending by price
                    const cheapOrder = sortBypriceCart;
                    return {...state, data: cheapOrder}
                }  else if (action.payload.value === 'Default sorting') {
                    let sortByDefault = state.data.sort((itemA, itemB) => itemA?.id - itemB?.id) // sort by default
                    return {...state, data: sortByDefault}
                }
                return {...state}
                
            case 'openCart': 
                return {...state, basket: !state.basket}
    
            case 'closeCart':
                return {...state, basket: false}

            case 'slider':
                let sortByRange = data.filter((value) => (state.max > value.price && state.min < value.price) && value)
                return {...state, data: sortByRange, min: action.payload.min, max: action.payload.max}
            
            case 'addtocart':
                let selectedCart = null
                let totalPriceAddtocart = state.totalPrice
                let res = state.data.map((value) => {
                    if(value.id === action.payload.id) {
                        totalPriceAddtocart += value.price * value.quantity
                        selectedCart = {...value, addtocart: true}
                        return {...value, addtocart: true}
                    } else {
                        return value
                    }
                })
                return {...state, data: res, cart: [...state.cart, selectedCart], totalPrice: totalPriceAddtocart}
            
            case 'cancelcart': 
                let cancelcart = state.cart.filter((value) => {
                    if(value.id !== action.payload.id) {
                        return value
                    }
                })
                let canceladdtocart = state.data.map((value) => {
                    if(value.id === action.payload.id) {
                        return {...value, addtocart: false}
                    } else {
                        return value
                    }
                })
                return {...state, cart: cancelcart, data: canceladdtocart}

            case 'increment': 
                let increment = state.cart.map((value) => {
                    if(value.id === action.payload.id) {
                        return {...value, quantity: value.quantity + 1}
                    }
                    else {
                        return value
                    }
                })
                

                return {...state, cart: increment}

            case 'decrement': 
                // let totalPriceDecrement = state.totalPrice
                let decrement = state.cart.map((value) => {
                    if(value.id === action.payload.id && value.quantity > 1) {
                        // totalPriceIncrement -= value.quantity * value.price
                        return {...value, quantity: value.quantity - 1}
                    }
                    else {
                        return value
                    }
                })

                return {...state, cart: decrement}

            case 'openModal':
                return {...state, modal: true}

            case 'closeModal':
                return {...state, modal: false}
            case 'openHumburger':
                return {...state, humburger: true}

            case 'closeHumburger':
                return {...state, humburger: false}

            default: return {...state, data: state.data}
        }
}