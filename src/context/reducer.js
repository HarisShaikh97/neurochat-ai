export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_IS_LOADING': {
            if (action?.payload) {
                return { ...state, isLoading: action?.payload }
            }
            return state
        }
        case 'SWITCH_MODE': {
            if (state?.mode === 'light') {
                return { ...state, mode: 'dark' }
            }
            else {
                return { ...state, mode: 'light' }
            }
        }
        case 'SET_USERNAME': {
            if (action?.payload) {
                return { ...state, username: action?.payload }
            }
            return state
        }
        default:
            return state
    }
};