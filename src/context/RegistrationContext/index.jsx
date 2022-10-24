import { createContext, useContext, useReducer } from "react";

const Context = createContext()
export const useRegister = () => useContext(Context)

export const RegistrationContext = ({children}) => {
    const [state, dispatch] = useReducer((state, action ) => {
        switch(action.type) {
            case 'register':
                console.log(state, 'rolllll')
                return {...state, username: action.payload.user.username, email: action.payload.user.email, password: action.payload.user.password, confirmPassword: action.payload.user.confirmPassword, role: action.payload.role}

            default: return {...state}
        }
    }, localStorage.getItem('register') ? JSON.parse(localStorage.getItem('register')) : {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: ''
    })
    localStorage.setItem('register', JSON.stringify(state))
    
    return(
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}
