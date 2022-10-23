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
    }, localStorage.getItem('register') ? JSON.parse(localStorage.getItem('register')) : {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    localStorage.setItem('register', JSON.stringify(state))
    
    return(
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}
