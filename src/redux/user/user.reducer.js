const INITIAL_STATE = {
    user : null,
    message : null
}

const userReducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {
       case 'AUTH_USER_SUCCESS':
            return {
                ...state,
                user : action.payload
            }
        case 'AUTH_USER_FAIL':
            return {
                ...state,
                message : action.payload
            }  
        case 'DELETE_MESSAGE':
            return {
                ...state,
                message : ''
           }    
    default:
       return state        
    }
}

export default userReducer