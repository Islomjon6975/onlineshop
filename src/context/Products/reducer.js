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
            default: return state.data
        }
}