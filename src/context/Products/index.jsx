import { createContext, useContext, useReducer } from "react";
import { data } from "../../utils/data";
import { reducer } from "./reducer";

const Context = createContext();
export const useProducts = () => useContext(Context)

const ProductsContext = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {data: data, favourites: []})
    return(
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default ProductsContext