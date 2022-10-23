import { createContext, useContext, useReducer } from "react";

const Context = createContext()
export const useRegister = () => useContext(Context)

export const RegistrationContext = ({children}) => {
    const [state, dispatch] = useReducer((state, action ) => {
        switch(action.type) {
            case 'register':
                return {...state, username: action.payload.user.username, email: action.payload.user.email, password: action.payload.user.password, confirmPassword: action.payload.user.confirmPassword}

            default: return {...state}
        }
    },{
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    
    return(
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}
