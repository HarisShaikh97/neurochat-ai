export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_IS_LOADING': {
            return { ...state, isLoading: action?.payload }
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
        case 'SET_USER_ID': {
            if (action?.payload) {
                return { ...state, user_id: action?.payload }
            }
            return state
        }
        case 'SET_OTP': {
            if (action?.payload) {
                return { ...state, otp: action?.payload }
            }
            return state
        }
        default:
            return state
    }
};