import { useReducer } from "react"
import PropTypes from 'prop-types'
import { MyContext } from "./context"
import { reducer } from "./reducer"

export function MyContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, {
        isLoading: true,
        mode: 'light',
        username: '',
        user_id: null,
        user_info: null,
        current_package: null,
        otp: '',
        synaptiquery_agreed: true,
        chatgpt_agreed: true,
        claude_agreed: true,
        palm_agreed: true,
        falcon_agreed: true
    })

    return (
        <MyContext.Provider value={{ state, dispatch }}>
            {children}
        </MyContext.Provider>
    )
}

MyContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}