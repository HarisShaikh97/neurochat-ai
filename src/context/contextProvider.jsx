import { useReducer } from "react"
import PropTypes from 'prop-types'
import { MyContext } from "./context"
import { reducer } from "./reducer"

export function MyContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, {
        isLoading: true,
        mode: 'light',
        username: ''
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