import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

const Context = createContext();
export const usePlugins = () => useContext(Context)

const PluginsContext = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {basket: false})
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default PluginsContext
