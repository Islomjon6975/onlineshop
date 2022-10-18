import { createContext, useContext, useReducer } from "react";
import { data } from "../../utils/data";
import { reducer } from "./reducer";

const Context = createContext();
export const useProducts = () => useContext(Context)

const ProductsContext = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {
        data: data, 
        favourites: [], 
        min: 0, 
        max: 500, 
        cart: [],
        basket: false,
        totalPrice: 0
    })
    return(
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default ProductsContext