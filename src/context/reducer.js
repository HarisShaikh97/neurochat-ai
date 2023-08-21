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
        case 'SET_USER_INFO': {
            if (action?.payload) {
                return { ...state, user_info: action?.payload }
            }
            return state
        }
        case 'SET_CURRENT_PACKAGE': {
            if (action?.payload) {
                return { ...state, current_package: action?.payload }
            }
            return state
        }
        case 'SET_SYNAPTIQUERY_AGREED': {
            return { ...state, synaptiquery_agreed: action?.payload }
        }
        case 'SET_CHATGPT_AGREED': {
            return { ...state, chatgpt_agreed: action?.payload }
        }
        case 'SET_CLAUDE_AGREED': {
            return { ...state, claude_agreed: action?.payload }
        }
        case 'SET_PALM_AGREED': {
            return { ...state, palm_agreed: action?.payload }
        }
        case 'SET_FALCON_AGREED': {
            return { ...state, falcon_agreed: action?.payload }
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
}